export default class Store {
  constructor(key, storage) {
    this._storage = storage;
    this._storeKey = key;
  }

  getItems() {
    try {
      return JSON.parse(this._storage.getItem(this._storeKey)) || {};
    } catch (err) {
      return {};
    }
  }

  removeItem(key) {
    const store = this.getItems();

    delete store[key];

    this.setItems(store);
  }

  setItem(key, value) {
    const store = this.getItems();

    this.setItems(Object.assign({}, store, {
      [key]: value
    }));
  }

  setItems(items) {
    this._storage.setItem(this._storeKey, JSON.stringify(items));
  }
}
