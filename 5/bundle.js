/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: FILTERS, SORTINGS, RenderPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTERS", function() { return FILTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORTINGS", function() { return SORTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
// Исходные данные для всего приложения, межкомпонентные

const FILTERS = [`everything`, `future`, `past`];

const SORTINGS = [`day`, `event`, `time`, `price`, `offer`];

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  AFTEREND: `afterend`,
  BEFOREBEGIN: `beforebegin`,
  BEFOREEND: `beforeend`
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/info */ "./src/view/info.js");
/* harmony import */ var _view_cost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/cost */ "./src/view/cost.js");
/* harmony import */ var _view_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/tabs */ "./src/view/tabs.js");
/* harmony import */ var _view_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/filters */ "./src/view/filters.js");
/* harmony import */ var _view_new_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/new-button */ "./src/view/new-button.js");
/* harmony import */ var _view_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/sort */ "./src/view/sort.js");
/* harmony import */ var _view_events_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/events-list */ "./src/view/events-list.js");
/* harmony import */ var _view_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/event */ "./src/view/event.js");
/* harmony import */ var _view_event_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/event-edit */ "./src/view/event-edit.js");
/* harmony import */ var _mock_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock/event */ "./src/mock/event.js");
/* harmony import */ var _mock_event_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mock/event-types */ "./src/mock/event-types.js");
/* harmony import */ var _mock_destinations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mock/destinations */ "./src/mock/destinations.js");
/* harmony import */ var _mock_const__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mock/const */ "./src/mock/const.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./const */ "./src/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


















const EVENTS_RANGE = [15, 20];
const eventsCount = Object(_utils__WEBPACK_IMPORTED_MODULE_14__["getRandomInt"])(...EVENTS_RANGE);
const events = new Array(eventsCount).fill().map(_mock_event__WEBPACK_IMPORTED_MODULE_9__["generateEvent"]);

const headerMainElement = document.querySelector(`.trip-main`);
const infoComponent = new _view_info__WEBPACK_IMPORTED_MODULE_0__["default"](events);
const infoElement = infoComponent.getElement();
Object(_utils__WEBPACK_IMPORTED_MODULE_14__["renderElement"])(infoElement, new _view_cost__WEBPACK_IMPORTED_MODULE_1__["default"](events).getElement());
Object(_utils__WEBPACK_IMPORTED_MODULE_14__["renderElement"])(headerMainElement, new _view_new_button__WEBPACK_IMPORTED_MODULE_4__["default"]().getElement());
Object(_utils__WEBPACK_IMPORTED_MODULE_14__["renderElement"])(headerMainElement, infoElement, _const__WEBPACK_IMPORTED_MODULE_13__["RenderPosition"].AFTERBEGIN);

const controlsElement = headerMainElement.querySelector(`.trip-controls`);
Object(_utils__WEBPACK_IMPORTED_MODULE_14__["renderElement"])(controlsElement.querySelector(`h2`), new _view_tabs__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _const__WEBPACK_IMPORTED_MODULE_13__["RenderPosition"].AFTEREND);
Object(_utils__WEBPACK_IMPORTED_MODULE_14__["renderElement"])(controlsElement, new _view_filters__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement());

const eventsElement = document.querySelector(`.trip-events`);
Object(_utils__WEBPACK_IMPORTED_MODULE_14__["renderElement"])(eventsElement, new _view_sort__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement());

Object(_utils__WEBPACK_IMPORTED_MODULE_14__["renderElement"])(eventsElement, new _view_events_list__WEBPACK_IMPORTED_MODULE_6__["default"](eventsCount).getElement());
if (eventsCount) {
  const listElement = eventsElement.querySelector(`.trip-events__list`);

  events.forEach((eventData) => {
    const eventComponent = new _view_event__WEBPACK_IMPORTED_MODULE_7__["default"](eventData);
    const eventEditComponent = new _view_event_edit__WEBPACK_IMPORTED_MODULE_8__["default"]({
      eventData,
      eventTypes: _mock_event_types__WEBPACK_IMPORTED_MODULE_10__["eventTypes"],
      destinations: _mock_destinations__WEBPACK_IMPORTED_MODULE_11__["destinations"],
      cities: _mock_const__WEBPACK_IMPORTED_MODULE_12__["CITY_NAMES"]
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

    Object(_utils__WEBPACK_IMPORTED_MODULE_14__["renderElement"])(listElement, eventComponent.getElement());
  });
}


/***/ }),

/***/ "./src/mock/const.js":
/*!***************************!*\
  !*** ./src/mock/const.js ***!
  \***************************/
/*! exports provided: CITY_NAMES, EVENT_TYPES, PRICE_RANGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CITY_NAMES", function() { return CITY_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_TYPES", function() { return EVENT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICE_RANGE", function() { return PRICE_RANGE; });
const CITY_NAMES = [
  `Amsterdam`,
  `Chamonix`,
  `Geneva`,
  `Paris`,
  `Madrid`,
  `Barcelona`,
  `Lisbon`
];

const EVENT_TYPES = [
  `taxi`,
  `bus`,
  `train`,
  `ship`,
  `transport`,
  `drive`,
  `flight`,
  `check-in`,
  `sightseeing`,
  `restaurant`
];

const PRICE_RANGE = [5, 500];


/***/ }),

/***/ "./src/mock/destinations.js":
/*!**********************************!*\
  !*** ./src/mock/destinations.js ***!
  \**********************************/
/*! exports provided: destinations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destinations", function() { return destinations; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./src/mock/const.js");



const PHRASES_RANGE = [1, 5];
const PHOTOS_RANGE = [1, 5];
const PHOTONUMBERS_RANGE = [100, 500];
const DESCRIPTION_PHRASES = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const destinations = _const__WEBPACK_IMPORTED_MODULE_1__["CITY_NAMES"].map((city) => ({
  city,
  description: new Array(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(...PHRASES_RANGE)).fill().map(() => {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomItem"])(DESCRIPTION_PHRASES);
  }).join(` `),
  photos: new Array(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(...PHOTOS_RANGE)).fill().map(() => {
    return `http://picsum.photos/248/152?r=${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(...PHOTONUMBERS_RANGE)}`;
  })
}));


/***/ }),

/***/ "./src/mock/event-types.js":
/*!*********************************!*\
  !*** ./src/mock/event-types.js ***!
  \*********************************/
/*! exports provided: eventTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventTypes", function() { return eventTypes; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./src/mock/const.js");



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

const eventTypes = _const__WEBPACK_IMPORTED_MODULE_1__["EVENT_TYPES"].map((typeName) => {
  const offerNames = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomItems"])(OFFER_NAMES, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(...OFFERS_COUNT_RANGE));

  return {
    name: typeName,
    offers: offerNames.map((name) => ({
      name,
      alias: name.slice(name.lastIndexOf(` `)).toLowerCase(),
      price: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(..._const__WEBPACK_IMPORTED_MODULE_1__["PRICE_RANGE"]),
      isChecked: false
    }))
  };
});


/***/ }),

/***/ "./src/mock/event.js":
/*!***************************!*\
  !*** ./src/mock/event.js ***!
  \***************************/
/*! exports provided: generateEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEvent", function() { return generateEvent; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "./src/mock/const.js");
/* harmony import */ var _event_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-types */ "./src/mock/event-types.js");
/* harmony import */ var _destinations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./destinations */ "./src/mock/destinations.js");






const DURATION_RANGE = [10, 60 * 24 * 3]; // для выбора случайной длительности от 10 мин. до 3 сут.
const MINUTE_NAME = `minute`;
let tempTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(...DURATION_RANGE), MINUTE_NAME);
let counter = 0;

const generateEvent = () => {
  // Начало следующего мероприятия совпадает с окончанием ранее сгенерированного
  // Поэтому сохраняем значение из счетчика времени
  const startTime = tempTime.toISOString();

  // Добавляем к счетчику времени случайную продолжительность
  tempTime = tempTime.add(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(...DURATION_RANGE), MINUTE_NAME);

  const typeName = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomItem"])(_const__WEBPACK_IMPORTED_MODULE_2__["EVENT_TYPES"]);
  const cityName = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomItem"])(_const__WEBPACK_IMPORTED_MODULE_2__["CITY_NAMES"]);
  const type = JSON.parse(JSON.stringify(_event_types__WEBPACK_IMPORTED_MODULE_3__["eventTypes"].find(({name}) => name === typeName)));
  type.offers.forEach((offer) => {
    offer.isChecked = Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])());
  });

  return {
    id: ++counter,
    type,
    destination: _destinations__WEBPACK_IMPORTED_MODULE_4__["destinations"].find(({city}) => city === cityName),
    startTime,
    finishTime: tempTime.toISOString(),
    isFavorite: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])()),
    price: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(..._const__WEBPACK_IMPORTED_MODULE_2__["PRICE_RANGE"])
  };
};


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomInt, getRandomItem, capitalize, shuffle, getRandomItems, formatWithLead0, renderElement, renderTemplate, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomItem", function() { return getRandomItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomItems", function() { return getRandomItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatWithLead0", function() { return formatWithLead0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderElement", function() { return renderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/const.js");


const getRandomInt = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomItem = (list) => {
  const randomIndex = getRandomInt(0, list.length - 1);

  return list[randomIndex];
};

// Делает первую букву заглавной
const capitalize = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);

// Перемешивает массив по алгоритму Фишера—Йетса.
const shuffle = (array) => {
  const resultArray = array.slice();
  for (let i = resultArray.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));
    [resultArray[randomNumber], resultArray[i]] = [resultArray[i], resultArray[randomNumber]];
  }

  return resultArray;
};

const getRandomItems = (list, length = 0) => {
  return shuffle(Array.from(list)).slice(0, length);
};

// Выводит число с ведущим нулём
const TWO_DIGIT = 10;
const formatWithLead0 = (num) => `${num < TWO_DIGIT ? 0 : ``}${num}`;

const renderPositions = Object.values(_const__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"]);
const renderElement = (container, element, place = _const__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND) => {
  if (renderPositions.indexOf(place) > -1) {
    container.insertAdjacentElement(place, element);
  }
};
const renderTemplate = (container, template, place = _const__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND) => {
  if (renderPositions.indexOf(place) > -1) {
    container.insertAdjacentHTML(place, template);
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template.trim();

  return newElement.firstChild;
};


/***/ }),

/***/ "./src/view/cost.js":
/*!**************************!*\
  !*** ./src/view/cost.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CostView; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createCostTemplate = (events) => {
  const cost = events.reduce((total, {price, type: {offers}}) => {
    return total + price + offers.reduce((offersTotal, offer) => {
      return offersTotal + (offer.isChecked ? offer.price : 0);
    }, 0);
  }, 0);

  return `
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
    </p>
  `;
};

class CostView {
  constructor(events) {
    this._events = events;
  }

  getTemplate() {
    return createCostTemplate(this._events);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/event-edit.js":
/*!********************************!*\
  !*** ./src/view/event-edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventEditView; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");



const currentTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().toISOString();

const getDefaultData = (type, destination) => ({
  id: 0,
  type,
  destination,
  startTime: currentTime,
  finishTime: currentTime,
  price: ``
});

const createEventTypes = (eventTypes, typeName, id) => eventTypes.reduce((template, {name}) => {
  const checkedAttr = name === typeName ? `checked` : ``;
  return `
    ${template}
    <div class="event__type-item">
      <input
        id="event-type-${name}-${id}"
        class="event__type-input visually-hidden"
        type="radio"
        name="event-type"
        value="${name}"
        ${checkedAttr}
      />
      <label class="event__type-label event__type-label--${name}" for="event-type-${name}-${id}">
        ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(name)}
      </label>
    </div>
  `;
}, ``);

const createCitiesList = (cities) => cities.reduce((template, cityName) => {
  return `${template}<option value="${cityName}"></option>`;
}, ``);

const createOffersList = (offers) => offers.reduce((template, offer, i) => {
  const {name, alias, price: offerPrice, isChecked} = offer;
  const checkedAttr = isChecked ? `checked` : ``;

  return `
    ${template}
    <div class="event__offer-selector">
      <input
        class="event__offer-checkbox visually-hidden"
        id="event-offer-${alias}-${i + 1}"
        type="checkbox"
        name="event-offer-${alias}"
        ${checkedAttr}
      />
      <label class="event__offer-label" for="event-offer-${alias}-${i + 1}">
        <span class="event__offer-title">${name}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offerPrice}</span>
      </label>
    </div>
  `;
}, ``);

const createPhotosList = (photos) => photos.reduce((template, photo) => {
  return `${template}<img class="event__photo" src="${photo}" alt="Event photo">`;
}, ``);

const createEventEditTemplate = ({eventData = null, eventTypes, destinations, cities}) => {
  if (!eventData) {
    eventData = getDefaultData(eventTypes[0], destinations[0]);
  }
  const {id, type, destination, startTime, finishTime, price} = eventData;
  const {offers, name: typeName} = type;
  const {city, description, photos} = destination;

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
              <span class="visually-hidden">Choose event type</span>
              <img
                class="event__type-icon"
                width="17"
                height="17"
                src="img/icons/${typeName}.png"
                alt="Event type icon"
              />
            </label>
            <input
              class="event__type-toggle visually-hidden"
              id="event-type-toggle-${id}"
              type="checkbox"
            />

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${createEventTypes(eventTypes, type, id)}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group event__field-group--destination">
            <label class="event__label event__type-output" for="event-destination-${id}">
              ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(typeName)}
            </label>
            <input
              class="event__input event__input--destination"
              id="event-destination-${id}"
              type="text"
              name="event-destination"
              value="${city}"
              list="destination-list-${id}"
            />
            <datalist id="destination-list-${id}">${createCitiesList(cities)}</datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-${id}">From</label>
            <input
              class="event__input event__input--time"
              id="event-start-time-${id}"
              type="text"
              name="event-start-time"
              value="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startTime).format(`DD/MM/YY HH:mm`)}"
            />
            &mdash;
            <label class="visually-hidden" for="event-end-time-${id}">To</label>
            <input
              class="event__input event__input--time"
              id="event-end-time-${id}"
              type="text"
              name="event-end-time"
              value="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(finishTime).format(`DD/MM/YY HH:mm`)}"
            />
          </div>

          <div class="event__field-group event__field-group--price">
            <label class="event__label" for="event-price-${id}">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input
              class="event__input event__input--price"
              id="event-price-${id}"
              type="text"
              name="event-price" value="${price}"
            />
          </div>

          <button class="event__save-btn btn btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
        <section class="event__details">
          ${offers.length ? `<section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
            <div class="event__available-offers">${createOffersList(offers)}</div>
          </section>` : ``}

          <section class="event__section event__section--destination">
            <h3 class="event__section-title event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${description}</p>

            <div class="event__photos-container">
              <div class="event__photos-tape">${createPhotosList(photos)}</div>
            </div>
          </section>
        </section>
      </form>
    </li>
  `;
};

class EventEditView {
  constructor(payload) {
    this._payload = payload;
  }

  getTemplate() {
    return createEventEditTemplate(this._payload);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/event.js":
/*!***************************!*\
  !*** ./src/view/event.js ***!
  \***************************/
/*! exports provided: createEventTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventTemplate", function() { return createEventTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventView; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");



const formatDuration = (startInstance, finishInstance) => {
  const minutes = finishInstance.diff(startInstance, `minute`);
  const minuteStr = `${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["formatWithLead0"])(minutes % 60)}M`;

  if (minutes < 60) {
    return minuteStr;
  }

  const hours = finishInstance.diff(startInstance, `hour`);
  const hourStr = `${hours % 24}H`;
  if (hours < 24) {
    return `${hourStr} ${minuteStr}`;
  }

  const days = finishInstance.diff(startInstance, `day`);
  return `${days}D ${hourStr} ${minuteStr}`;
};

const createOfferItem = (template, offer) => {
  return `
    ${template}
    <li class="event__offer">
      <span class="event__offer-title">${offer.name}</span>
      &nbsp;&plus;&euro;&nbsp;&nbsp;<span class="event__offer-price">${offer.price} </span>
    </li>
  `;
};

const createOffersList = (offers) => {
  if (!offers.length) {
    return ``;
  }

  return `
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${offers.filter((offer) => offer.isChecked).reduce(createOfferItem, ``)}
    </ul>
  `;
};

const createEventTemplate = ({
  type,
  destination,
  startTime,
  finishTime,
  price,
  isFavorite
}) => {
  const startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startTime);
  const finishDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(finishTime);
  const {offers} = type;

  return `
    <li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${startDate.format(`YYYY-MM-DD`)}">
          ${startDate.format(`MMM DD`)}
        </time>
        <div class="event__type">
          <img
            class="event__type-icon"
            width="42"
            height="42"
            src="img/icons/${type.name}.png"
            alt="Event type icon"
          />
        </div>
        <h3 class="event__title">${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(type.name)} ${destination.city}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${startDate.format()}">
              ${startDate.format(`HH:mm`)}
            </time>
            &mdash;
            <time class="event__end-time" datetime="${finishDate.format()}">
              ${finishDate.format(`HH:mm`)}
            </time>
          </p>
          <p class="event__duration">${formatDuration(startDate, finishDate)}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
        </p>
        ${createOffersList(offers)}
        <button class="event__favorite-btn ${isFavorite ? `event__favorite-btn--active` : ``}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `;
};

class EventView {
  constructor(eventData) {
    this._event = eventData;
  }

  getTemplate() {
    return createEventTemplate(this._event);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/events-list.js":
/*!*********************************!*\
  !*** ./src/view/events-list.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventsListView; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createEventsListTemplate = (eventsCount) => {
  if (eventsCount) {
    return `<ul class="trip-events__list"></ul>`;
  }
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

class EventsListView {
  constructor(eventsCount) {
    this._count = eventsCount;
  }

  getTemplate() {
    return createEventsListTemplate(this._count);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/filters.js":
/*!*****************************!*\
  !*** ./src/view/filters.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FiltersView; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");



const defaultFilter = _const__WEBPACK_IMPORTED_MODULE_1__["FILTERS"][0];

const createListMarkup = (activeFilter) => _const__WEBPACK_IMPORTED_MODULE_1__["FILTERS"].reduce((markup, filter) => {
  const title = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["capitalize"])(filter);
  const isActive = filter === activeFilter;

  return `
    ${markup}
    <div class="trip-filters__filter">
      <input
        id="filter-${filter}"
        class="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value="${filter}"
        ${isActive ? `checked` : ``}
      />
      <label class="trip-filters__filter-label" for="filter-${filter}">
        ${title}
      </label>
    </div>
  `;
}, ``);

const createFiltersTemplate = (activeFilter) => {
  return `
    <form class="trip-filters" action="#" method="get">
      ${createListMarkup(activeFilter)}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `;
};

class FiltersView {
  constructor(activeFilter = defaultFilter) {
    this._activeFilter = activeFilter;
  }

  getTemplate() {
    return createFiltersTemplate(this._activeFilter);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/info.js":
/*!**************************!*\
  !*** ./src/view/info.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoView; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");



const createInfoTemplate = (events) => {
  const cities = Array.from(new Set(events.map((eventData) => {
    return eventData.destination.city;
  })));
  const startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(events[0].startTime);
  const finishDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(events[events.length - 1].finishTime);
  const isEqualMonths = startDate.month() === finishDate.month();
  const startDateStr = startDate.format(`MMM DD`);
  const finishDateStr = finishDate.format(isEqualMonths ? `DD` : `MMM DD`);

  return `
    <section class="trip-main__trip-info trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${cities.join(` &mdash; `)}</h1>
        <p class="trip-info__dates">
          ${startDateStr}&nbsp;&mdash;&nbsp;${finishDateStr}
        </p>
      </div>
    </section>
  `;
};

class InfoView {
  constructor(events) {
    this._events = events;
  }

  getTemplate() {
    return createInfoTemplate(this._events);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/new-button.js":
/*!********************************!*\
  !*** ./src/view/new-button.js ***!
  \********************************/
/*! exports provided: createNewButtonTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNewButtonTemplate", function() { return createNewButtonTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewButtonView; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createNewButtonTemplate = () => {
  return `
    <button class="trip-main__event-add-btn btn btn--big btn--yellow" type="button">
      New event
    </button>
  `;
};

class NewButtonView {
  getTemplate() {
    return createNewButtonTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortingsView; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");



const defaultSorting = _const__WEBPACK_IMPORTED_MODULE_1__["SORTINGS"][0];
const DISABLED_SORTINGS = [`event`, `offer`];

const createListMarkup = (activeSorting) => _const__WEBPACK_IMPORTED_MODULE_1__["SORTINGS"].reduce((markup, sorting) => {
  const title = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["capitalize"])(sorting);
  const isActive = sorting === activeSorting;
  const isDisabled = DISABLED_SORTINGS.indexOf(sorting) > -1;

  return `
    ${markup}
    <div class="trip-sort__item trip-sort__item--${sorting}">
      <input
        id="sort-${sorting}"
        class="trip-sort__input  visually-hidden"
        type="radio"
        name="trip-sort"
        value="sort-${sorting}"
        ${isActive ? `checked` : ``}
        ${isDisabled ? `disabled` : ``}
      />
      <label class="trip-sort__btn" for="sort-${sorting}">
        ${title}
      </label>
    </div>
  `;
}, ``);

const createSortingsTemplate = (activeSorting) => {
  return `
    <form class="trip-events__trip-sort trip-sort" action="#" method="get">
      ${createListMarkup(activeSorting)}
    </form>
  `;
};

class SortingsView {
  constructor(activeSorting = defaultSorting) {
    this._activeSorting = activeSorting;
  }

  getTemplate() {
    return createSortingsTemplate(this._activeSorting);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/tabs.js":
/*!**************************!*\
  !*** ./src/view/tabs.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabsView; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const TABS = [`table`, `stats`];
const defaultTab = TABS[0];

const createTabsTemplate = (activeTab) => {
  const tabsList = TABS.reduce((markup, tab) => {
    const activeClass = tab === activeTab ? `trip-tabs__btn--active` : ``;

    return `
      ${markup}
      <a class="trip-tabs__btn ${activeClass}" href="#">
        ${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["capitalize"])(tab)}
      </a>
    `;
  }, ``);

  return `
    <nav class="trip-controls__trip-tabs trip-tabs">
      ${tabsList}
    </nav>
  `;
};

class TabsView {
  constructor(activeTab = defaultTab) {
    this._activeTab = activeTab;
  }

  getTemplate() {
    return createTabsTemplate(this._activeTab);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map