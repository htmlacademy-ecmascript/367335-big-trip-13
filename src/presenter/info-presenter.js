import InfoView from '../view/info-view';
import {Render} from '../utils';
import {RenderPosition} from '../const';

export default class InfoPresenter {
  constructor(infoContainer, pointsModel) {
    this._infoContainer = infoContainer;
    this._pointsModel = pointsModel;
    this._infoComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);
  }

  init() {
    this._pointsModel.addObserver(this._handleModelEvent);
  }

  _destroy() {
    Render.remove(this._infoComponent);
    this._infoComponent = null;
  }

  _handleModelEvent() {
    if (!this._pointsModel.getPoints().length) {
      this._destroy();
      return;
    }

    const prevInfoComponent = this._infoComponent;
    this._infoComponent = new InfoView(this._pointsModel.getPoints());

    if (prevInfoComponent === null) {
      Render.render(this._infoContainer, this._infoComponent, RenderPosition.AFTERBEGIN);
      return;
    }

    Render.replace(this._infoComponent, prevInfoComponent);
    Render.remove(prevInfoComponent);
  }
}
