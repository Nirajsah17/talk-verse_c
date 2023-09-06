import getTemplate from './nav.template.js';

function define(o) {
  class Nav extends HTMLElement {
    constructor() {
      super();
      this.options = o || {};
      this._domIds = null;
      this.eventBus = o.eventBus;
      this.hydrateUI(this.options);
    }

    hydrateUI(options) {
      let template =
        (o.getTemplate && o.getTemplate(options)) || getTemplate(options);
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this._domIds = this.getDomIds();
      this.addEvents();
    }

    getDomIds(){
      let domIds = {};
      domIds.signUp = this.shadowRoot.querySelector(`#${this.options.domIds['signUp']}`);
      return domIds;
    }

    addEvents(){
      this._domIds.signUp.addEventListener("click",(e)=>{
        console.log(this.options.dispatchEvents['openModal']);
        this.eventBus.emit(this.options.dispatchEvents['openModal'], {});
      })
    }

    connectedCallback() {
    
    }
  }
  return Nav
}


// customElements.define('tv-modal', Modal);0
class NavWrapper {
  constructor(o) {
    o = o || {};
    this._options = {
      classtype: 'NavWrapper',
      name: 'nav',
      prefix: 'tv-',
      stylePath: '',
      domIds: {
        signUp: 'sign-up'
      },
      dispatchEvents: {
        openModal: "open-modal"
      },
      listenEvents: {},
      eventBus: o.eventBus,
    };

    // this._extend(o, this._options);
    this._prefix = this._options.prefix || 'hx-';
    this._options._name = this._prefix + this._options.name;
    this._options._dispatchEvents = ((o, name) => {
      Object.keys(o).map(function (key, index) {
        o[key] = `${name}:${o[key]}`;
      });
      return o;
    })(this._options.dispatchEvents, this._options._name);

    this._options._domIds = ((o, name) => {
      Object.keys(o).map(function (k) {
        o[k] = `${name}-${o[k]}`;
      });
      return o;
    })(this._options.domIds, this._options._name);

    this._el = null;

    return this;
  }

  _extend(o, _options) {
    o = o || {};
    for (const prop in o) {
      if (typeof o[prop] !== 'undefined') {
        _options[prop] = o[prop];
      }
    }
  }

  _define(name) {
    customElements.define(name, define(this._options));
  }

  init(o) {
    o = o || {};
    const _name = this._prefix + this._options.name;
    this._define(_name);
    return this;
  }
}
export default NavWrapper;