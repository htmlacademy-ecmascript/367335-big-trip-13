export default class Observer {
  constructor() {
    this._observers = [];
  }

  addObserver(observer) {
    this._observers.push(observer);
  }

  removeObserver(observer) {
    this._observers = this._observers.filter((existedObserver) => {
      return existedObserver !== observer;
    });
  }

  _notify(evt, payload, notice = null) {
    this._observers.forEach((observer) => observer(evt, payload, notice));
  }
}
