export default class Store {

  constructor() {
    this._data = new Map();
    this._storage = window.localStorage;
  }

  setData(name, score) {
    this._data.set(name, score);
    this._updateStorage(name, score);
  }

  getData() {
    return this._storage.gamers;
  }

  _updateStorage(name, score) {
    const storageContainer = JSON.parse(this._storage.getItem(`gamers`)) || {};
    storageContainer[name] = score;
    this._storage[`gamers`] = JSON.stringify(storageContainer);
  }

}
