class Modal extends HTMLElement {
    constructor(o) {
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
// customElements.define('tv-modal', Modal);0
export { Modal }
