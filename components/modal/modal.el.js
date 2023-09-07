import getTemplate from './modal.template.js';

function define(o) {
  class Modal extends HTMLElement {
    constructor() {
      super();
      this.options = o || {};
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
      this.eventBus.on("click-event", (e) => {
        console.log(e.detail.data);
      })
    }
    connectedCallback() {

    }
  }
  return Modal
}


// customElements.define('tv-modal', Modal);0
class ModalWrapper {
  constructor(o) {
    o = o || {};
    this._options = {
      classtype: 'ModalWrapper',
      name: 'modal',
      prefix: 'tv-',
      stylePath: '',
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
export default ModalWrapper