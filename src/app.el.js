import getTemplate from './app.template.js';

function define(o) {
  class App extends HTMLElement {
    constructor() {
      super();
      this.options = o || {};
      this.hydrateUI(this.options);
    }
    hydrateUI(options) {
      let template = getTemplate(options);
      this.attachShadow({
        mode: 'open'
      });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      //  const nav = this.shadowRoot.querySelector('tv-nav');
      //  this.shadowRoot.querySelector('#btn').addEventListener('click', () => {
      //    nav._state.currentState = "a"
      //  })

    }
    connectedCallback() {

    }
  }
  return App
}


// customElements.define('tv-modal', Modal);0
class AppWrapper {
  constructor(o) {
    this._options = {
      classtype: 'AppWrapper',
      name: 'app',
      prefix: 'tv-',
      stylePath: './style.min.css',
      domIds: {},
      dispatchEvents: {},
      listenEvents: {},
      eventBus: o.eventBus,
    };

    this._extend(o, this._options);
    this._prefix = this._options.prefix || 'tv-';
    this._options._name = this._prefix + this._options.name;
  }

  _define(name) {
    customElements.define(name, define(this._options));
  }

  init(o) {
    o = o || {};
    const _name = this._prefix + this._options.name;
    this._define(_name);
    const o_keys = Object.keys(o);
    const _options_keys = Object.keys(this._options);
    o_keys.forEach(key => {
      if (!_options_keys.includes(key)) {
        if (o[key] === 'undefined') return;
        this._options[key] = o[key]
      }
    })
    return this;
  }

  _extend(o, _options) {
    o = o || {};
    const _options_keys = Object.keys(_options);
    const o_keys = Object.keys(o);
    _options_keys.forEach(key => {
      if (!o_keys.includes(key)) {
        if (_options[key] === 'undefined') return;
        o[key] = _options[key]
      }
    })
  }
}
export {
  AppWrapper
}