import PointsModel from '../model/points';
import {Utils} from '../utils';

export default class Provider {
  constructor(api, store) {
    this._api = api;
    this._store = store;
  }

  addPoint(point) {
    if (Utils.isOnline()) {
      return this._api.addPoint(point)
        .then((newPoint) => {
          this._store.setPoint(newPoint.id, PointsModel.adaptToServer(newPoint));
          return newPoint;
        });
    }

    return Promise.reject(new Error(`Add point failed`));
  }

  deletePoint(point) {
    if (Utils.isOnline()) {
      return this._api.deletePoint(point)
        .then(() => this._store.removePoint(point.id));
    }

    return Promise.reject(new Error(`Delete point failed`));
  }

  getAssets(callback) {
    if (Utils.isOnline()) {
      return this._api.getAssets()
        .then((assets) => {
          this._store.setItems(assets);
          this._api.setPointTypes(assets);
          return assets;
        })
        .catch(callback);
    }

    const {pointTypes, destinations} = this._store.getItems();
    console.log({pointTypes, destinations});
    return Promise.resolve({pointTypes, destinations});
  }

  getPoints() {
    if (Utils.isOnline()) {
      return this._api.getPoints()
        .then((points) => {
          const items = Provider.createStoreStructure(points.map(PointsModel.adaptToServer));
          this._store.setPoints(items);
          return points;
        });
    }

    const storePoints = Object.values(this._store.getPoints());

    return Promise.resolve(storePoints.map(PointsModel.adaptToClient));
  }

  sync() {
    if (Utils.isOnline()) {
      const storePoints = Object.values(this._store.getPoints());

      return this._api.sync(storePoints)
        .then((response) => {
          const items = Provider.createStoreStructure([
            ...Provider.getSyncedPoints(response.created),
            ...Provider.getSyncedPoints(response.updated)
          ]);

          this._store.setPoints(items);
        });
    }

    return Promise.reject(new Error(`Sync data failed`));
  }

  updatePoint(point) {
    if (Utils.isOnline()) {
      return this._api.updatePoint(point)
        .then((updatedPoint) => {
          this._store.setPoint(updatedPoint.id, PointsModel.adaptToServer(updatedPoint));
          return updatedPoint;
        });
    }

    this._store.setPoint(point.id, PointsModel.adaptToServer(Object.assign({}. point)));

    return Promise.resolve(point);
  }

  static getSyncedPoints(items) {
    return items.filter(({success}) => success).map((payload) => payload.point);
  }

  static createStoreStructure(items) {
    return items.reduce((acc, current) => {
      return Object.assign({}, acc, {
        [current.id]: current
      });
    }, {});
  }
}
