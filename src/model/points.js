import {Dates, Observer, Utils} from '../utils';

export default class PointsModel extends Observer {
  constructor() {
    super();

    this._points = [];
    this._pointTypes = [];
    this._destinations = [];

    this.getDefaultPoint = this.getDefaultPoint.bind(this);
  }

  get destinations() {
    return this._destinations;
  }

  get pointTypes() {
    return this._pointTypes;
  }

  get _notice() {
    return {
      points: this._points
    };
  }

  addPoint(updateType, update) {
    this._points = [update, ...this._points];

    this._notify(updateType, update, this._notice);
  }

  deletePoint(updateType, update) {
    const i = this._findUpdateIndex(update, `delete`);

    this._points = [
      ...this._points.slice(0, i),
      ...this._points.slice(i + 1)
    ];

    this._notify(updateType, update, this._notice);
  }

  getDefaultPoint() {
    const [{type, offers}] = this._pointTypes;
    const dateFrom = Dates.getInst();

    return {
      id: `new`, // для рендеринга связок инпутов и лейблов
      isNewPoint: true,
      type,
      destination: Utils.cloneDeep(this._destinations[0]),
      dateFrom,
      dateTo: dateFrom,
      basePrice: ``,
      offers: Utils.cloneDeep(offers)
    };
  }

  getPoints() {
    return this._points;
  }

  setData(updateType, {points = [], pointTypes = [], destinations = []}) {
    this._points = points.slice();
    this._pointTypes = Utils.cloneDeep(pointTypes);
    this._destinations = Utils.cloneDeep(destinations);

    this._notify(updateType);
  }

  updatePoint(updateType, update) {
    const i = this._findUpdateIndex(update);

    this._points = [
      ...this._points.slice(0, i),
      update,
      ...this._points.slice(i + 1)
    ];

    this._notify(updateType, update, this._notice);
  }

  _findUpdateIndex(update, mode = `update`) {
    const i = this._points.findIndex((point) => point.id === update.id);

    if (i === -1) {
      throw new Error(`Can't ${mode} unexisting point`);
    }

    return i;
  }

  static adaptToClient(point, pointTypes) {
    const pointType = pointTypes.find(({type}) => type === point.type);

    const adaptedPoint = Object.assign({}, point, {
      dateFrom: Dates.getInst(point.date_from),
      dateTo: Dates.getInst(point.date_to),
      basePrice: point.base_price,
      isFavorite: point.is_favorite,
      offers: pointType.offers.map((offer) => {
        offer.isChecked = point.offers.some((pointOffer) => pointOffer.title === offer.title);
        return Utils.cloneDeep(offer);
      })
    });

    delete adaptedPoint.date_from;
    delete adaptedPoint.date_to;
    delete adaptedPoint.base_price;
    delete adaptedPoint.is_favorite;

    return adaptedPoint;
  }

  static adaptToServer(point) {
    const adaptedPoint = Object.assign({}, point, {
      'base_price': point.basePrice,
      'date_from': Dates.getUTC(point.dateFrom),
      'date_to': Dates.getUTC(point.dateTo),
      'is_favorite': point.isFavorite,
      'offers': Utils.cloneDeep(point.offers)
    });

    delete adaptedPoint.basePrice;
    delete adaptedPoint.dateFrom;
    delete adaptedPoint.dateTo;
    delete adaptedPoint.isFavorite;
    adaptedPoint.offers.forEach((offer) => {
      delete offer.isChecked;
    });

    return adaptedPoint;
  }
}
