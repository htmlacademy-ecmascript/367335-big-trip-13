import {Random} from '../utils';
import {EVENT_TYPES, PRICE_RANGE} from './const';

const OFFER_NAMES = [
  `Order Uber`,
  `Add luggage`,
  `Switch to comfort`,
  `Rent a car`,
  `Add breakfast`,
  `Book tickets`,
  `Lunch in city`,
  `Choose seats`
];
const OFFERS_COUNT_RANGE = [0, 5];

export const eventTypes = EVENT_TYPES.map((typeName) => {
  const offerNames = Random.getItems(OFFER_NAMES, Random.getInt(...OFFERS_COUNT_RANGE));

  return {
    name: typeName,
    offers: offerNames.map((name) => ({
      name,
      alias: name.slice(name.lastIndexOf(` `)).toLowerCase(),
      price: Random.getInt(...PRICE_RANGE),
      isChecked: false
    }))
  };
});
