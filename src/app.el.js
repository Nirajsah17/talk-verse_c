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

   }
      connectedCallback() {
  
      }
    }
    return App
  }
  
  
  // customElements.define('tv-modal', Modal);0
  class AppWrapper {
    constructor(o) {
      this._options = o || {};
    }
  
    init(o) {
      console.log(o);
      //  Extend the options {o}
      // this.extends(o, this.options)
      const _define = define(o);
      const _name = 'app-modal'
      customElements.define(_name, _define);
    }
    extends(o, options) {
      console.log({ o, options });
    }
  }
  export { AppWrapper }
