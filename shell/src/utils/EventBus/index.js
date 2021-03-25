class EventBus {
  constructor() {
    this._bus = document.createElement('div');
  }

  addEventListener(event, callback) {
    this._bus.addEventListener(event, callback, true);
  } 
    
  removeEventListener(event, callback) {
    this._bus.removeEventListener(event, callback, true);
  }

  dispatchEvent(event, detail = {}) {
    this._bus.dispatchEvent(new CustomEvent(event, { detail }));
  }
}

export default EventBus;