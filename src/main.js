import InfoView from './view/info';
import CostView from './view/cost';
import TabsView from './view/tabs';
import FiltersView from './view/filters';
import NewButtonView from './view/new-button';
import SortingsView from './view/sort';
import EventsListView from './view/events-list';
import EventView from './view/event';
import EventEditView from './view/event-edit';

import {generateEvent} from './mock/event';
import {eventTypes} from './mock/event-types';
import {destinations} from './mock/destinations';
import {CITY_NAMES} from './mock/const';

import {RenderPosition} from './const';
import {getRandomInt, renderElement} from './utils';

const EVENTS_RANGE = [15, 20];
const eventsCount = getRandomInt(...EVENTS_RANGE);
const events = new Array(eventsCount).fill().map(generateEvent);

const headerMainElement = document.querySelector(`.trip-main`);
const infoComponent = new InfoView(events);
const infoElement = infoComponent.getElement();
renderElement(infoElement, new CostView(events).getElement());
renderElement(headerMainElement, new NewButtonView().getElement());
renderElement(headerMainElement, infoElement, RenderPosition.AFTERBEGIN);

const controlsElement = headerMainElement.querySelector(`.trip-controls`);
renderElement(controlsElement.querySelector(`h2`), new TabsView().getElement(), RenderPosition.AFTEREND);
renderElement(controlsElement, new FiltersView().getElement());

const eventsElement = document.querySelector(`.trip-events`);
renderElement(eventsElement, new SortingsView().getElement());

renderElement(eventsElement, new EventsListView(eventsCount).getElement());
if (eventsCount) {
  const listElement = eventsElement.querySelector(`.trip-events__list`);

  events.forEach((eventData) => {
    const eventComponent = new EventView(eventData);
    const eventEditComponent = new EventEditView({
      eventData,
      eventTypes,
      destinations,
      cities: CITY_NAMES
    });

    const switchToEdit = () => {
      listElement.replaceChild(eventEditComponent.getElement(), eventComponent.getElement());
    };
    const switchToView = () => {
      listElement.replaceChild(eventComponent.getElement(), eventEditComponent.getElement());
    };

    eventComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, switchToEdit);

    eventEditComponent.getElement().querySelector(`form`).addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      switchToView();
    });

    renderElement(listElement, eventComponent.getElement());
  });
}