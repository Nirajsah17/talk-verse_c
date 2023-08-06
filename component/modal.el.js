function define(o) {
  class Modal extends HTMLElement {
    constructor() {
      super();
      this.options = o || {};
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
            <h1>Modal Element</h1>
            `;
    }

    connectedCallback() {

    }
  }
  return Modal
}


// customElements.define('tv-modal', Modal);0
class ModalWrapper {
  constructor(o) {
    this._options = o || {};
  }

  init(o) {
    //  Extend the options {o}
    this.extends(o, this.options)
    const _define = define(o);
    const _name = 'tv-modal'
    customElements.define(_name, _define);
  }
  extends(o, options) {
    console.log({ o, options });
  }
}
