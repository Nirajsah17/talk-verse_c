class Events extends EventTarget {
  constructor() {
    super();
  }
  on(type, cb) {
    this.addEventListener(type, cb);
  }
  emit(type, data) {
    const evt = new CustomEvent(type, {
      bubbles: true,
      composed: true,
      detail: data
    });
    this.dispatchEvent(evt);
  }
}

export default Events;
export { Events }