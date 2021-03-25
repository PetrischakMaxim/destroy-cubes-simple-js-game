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

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: ButtonStatus, TICK_TIME, TIMER_VALUE, CUBES_PER_GAME, MAX_ALLOWED_CUBE_IN_FIELD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonStatus", function() { return ButtonStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TICK_TIME", function() { return TICK_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMER_VALUE", function() { return TIMER_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUBES_PER_GAME", function() { return CUBES_PER_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_ALLOWED_CUBE_IN_FIELD", function() { return MAX_ALLOWED_CUBE_IN_FIELD; });
const ButtonStatus = {
  START: `Start`,
  PAUSE: `Pause`,
};

const TICK_TIME = 1000;
const TIMER_VALUE = 60;
const CUBES_PER_GAME = 60;
const MAX_ALLOWED_CUBE_IN_FIELD = 5;


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presenter_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presenter/game */ "./src/presenter/game.js");


const appElement = document.querySelector(`.app`);
const mainContainerElement = appElement.querySelector(`.app__main .container`);

const game = new _presenter_game__WEBPACK_IMPORTED_MODULE_0__["default"](mainContainerElement);

game.init();


/***/ }),

/***/ "./src/presenter/game.js":
/*!*******************************!*\
  !*** ./src/presenter/game.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _view_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/bar */ "./src/view/bar.js");
/* harmony import */ var _view_points__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/points */ "./src/view/points.js");
/* harmony import */ var _view_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/controls */ "./src/view/controls.js");
/* harmony import */ var _view_toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/toggle-button */ "./src/view/toggle-button.js");
/* harmony import */ var _view_start_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/start-button */ "./src/view/start-button.js");
/* harmony import */ var _view_stats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/stats */ "./src/view/stats.js");
/* harmony import */ var _view_board__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/board */ "./src/view/board.js");
/* harmony import */ var _view_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/popup */ "./src/view/popup.js");
/* harmony import */ var _view_cube__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view/cube */ "./src/view/cube.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timer */ "./src/presenter/timer.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _utils_dom_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/dom-utils */ "./src/utils/dom-utils.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");



















class Game {

  constructor(container) {

    this._container = container;
    this._store = new _store__WEBPACK_IMPORTED_MODULE_10__["default"]();
    this._data = this._store.getData();
    this._duration = 1;
    this._score = 0;

    this._boardView = new _view_board__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this._barView = new _view_bar__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._controlsView = new _view_controls__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._toggleButtonView = new _view_toggle_button__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._startButtonView = new _view_start_button__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._pointsView = new _view_points__WEBPACK_IMPORTED_MODULE_1__["default"](this._score);
    this._statsView = null;
    this._popupView = null;

    this._interval = null;

    this._cubes = new Map();

    this._timerPresenter = new _timer__WEBPACK_IMPORTED_MODULE_9__["default"](this._duration, () => this._end());

    this._running = null;
    this._pausing = false;

    this._handleStartButtonClick = this._handleStartButtonClick.bind(this);
    this._handleToggleButtonClick = this._handleToggleButtonClick.bind(this);
    this._handleCubeClick = this._handleCubeClick.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  init() {
    this._renderElements();
    this._setInnerHandlers();
    this._timerPresenter.init();
  }

  _run() {
    this._updateState(this._pausing, this._running);
    this._timerPresenter.tick();
    this._renderCubes();
  }

  _pause() {
    this._updateState(this._running, this._pausing);
    this._timerPresenter.pause();
    this._stopRenderCubes();
  }

  _end() {
    this._handleToggleButtonClick();
    this._renderPopup();
  }

  _setInnerHandlers() {
    this._startButtonView.setClickHandler(this._handleStartButtonClick);
    this._toggleButtonView.setClickHandler(this._handleToggleButtonClick);
  }

  _renderElements() {
    if (this._data) {
      this._statsView = new _view_stats__WEBPACK_IMPORTED_MODULE_5__["default"](this._data);
      Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_12__["render"])(this._container, this._statsView);
    }
    // fragment to do
    Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_12__["render"])(this._container, this._boardView);
    Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_12__["render"])(this._container, this._barView);
    Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_12__["render"])(this._barView, this._timerPresenter.getView());
    Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_12__["render"])(this._barView, this._pointsView);
    Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_12__["render"])(this._barView, this._controlsView);
    Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_12__["render"])(this._controlsView, this._startButtonView);
    Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_12__["render"])(this._controlsView, this._toggleButtonView);
  }

  _renderCubes(duration = 500) {
    this._interval = window.setInterval(() => {
      this._initCube();
    }, duration);
  }

  _initCube() {
    this._createCube();
    this._stopRenderCubes();
    this._renderCubes(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_13__["getRandomInteger"])(500, 750));
  }

  _createCube() {
    // fragment to do
    const cube = new _view_cube__WEBPACK_IMPORTED_MODULE_8__["default"]();
    const cubeId = cube.getId();
    this._cubes.set(cubeId, cube);
    const currentCube = this._cubes.get(cubeId);
    currentCube.setClickHandler(() => this._handleCubeClick(cubeId));
    Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_12__["render"])(this._boardView, currentCube);

    this._hideUnclickedCubes(this._cubes);
  }

  _hideUnclickedCubes(cubes) {
    if (cubes.size > _const__WEBPACK_IMPORTED_MODULE_11__["MAX_ALLOWED_CUBE_IN_FIELD"]) {
      const hideCube = () => this._hideCube(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_13__["getRandomIndex"])([...cubes.keys()]));
      const hidenCubeCount = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_13__["getRandomInteger"])(1, 3);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_13__["runCallbacks"])(hidenCubeCount, hideCube);
    }
  }

  _hideCube(id) {
    this._cubes.get(id).hide();
  }

  _stopRenderCubes() {
    window.clearInterval(this._interval);
    this._interval = null;
  }

  _renderPopup() {
    this._popupView = new _view_popup__WEBPACK_IMPORTED_MODULE_7__["default"](this._score);
    Object(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_12__["render"])(this._container, this._popupView);
    this._popupView.setSubmitHandler(this._handleFormSubmit);
    this._popupView.show();
  }

  _renderMessage(message, cb) {
    let isConfirmed = confirm(`${message}`);
    return (isConfirmed) ? cb() : false;
  }

  _updateState(prevStatus, currentStatus) {
    if (prevStatus) {
      return;
    }
    prevStatus = currentStatus;
    prevStatus = prevStatus;
  }

  _updateScore(score = this._score) {
    score++;
    this._score = score;
    this._pointsView.updateScore(score);
  }

  _clearBoard() {
    this._updateScore(-1);
    this._cubes.forEach(_utils_dom_utils__WEBPACK_IMPORTED_MODULE_12__["remove"]);
    this._cubes.clear();
  }

  _handleCubeClick(id) {
    this._updateScore();
    this._hideCube(id);
  }

  _handleStartButtonClick() {
    this._renderMessage(`Play again? Time and points will be reset`, () => {
      this._timerPresenter.reset();
      this._handleToggleButtonClick();
      this._clearBoard();
    });
  }

  _handleToggleButtonClick() {
    let currentStatus = ``;
    const toggleButton = this._toggleButtonView.getElement();
    if (toggleButton.dataset.status === `${_const__WEBPACK_IMPORTED_MODULE_11__["ButtonStatus"].PAUSE}`) {
      currentStatus = `${_const__WEBPACK_IMPORTED_MODULE_11__["ButtonStatus"].START}`;
      this._pause();
    } else {
      currentStatus = `${_const__WEBPACK_IMPORTED_MODULE_11__["ButtonStatus"].PAUSE}`;
      this._run();
    }
    toggleButton.dataset.status = currentStatus;
    toggleButton.textContent = currentStatus;
  }

  _handleFormSubmit(evt) {
    const inputValue = evt.target.querySelector(`.form-control`).value;
    const scoreValue = this._score;
    this._store.setData(inputValue, scoreValue);
  }

}


/***/ }),

/***/ "./src/presenter/timer.js":
/*!********************************!*\
  !*** ./src/presenter/timer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timer; });
/* harmony import */ var _view_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/timer */ "./src/view/timer.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");




class Timer {

  constructor(duration, callback) {
    this._view = new _view_timer__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._countElement = this._view.getElement().querySelector(`.timer__count`);
    this._duration = duration * _const__WEBPACK_IMPORTED_MODULE_1__["TIMER_VALUE"];
    this._initialDuration = this._duration;
    this._callback = callback;
    this._interval = null;
    this._min = null;
    this._sec = null;
    this._paused = null;
  }

  init() {
    this._updateTick();
  }

  getView() {
    return this._view;
  }

  pause() {
    this._paused = true;
    this._clearInterval();
  }

  tick() {
    this._paused = false;
    this._interval = window.setInterval(() => {

      if (--this._duration === 0) {
        this._clearInterval();
        this._callback();
      }

      this._updateTick();

    }, _const__WEBPACK_IMPORTED_MODULE_1__["TICK_TIME"]);
  }

  reset() {
    window.clearInterval(this._interval);
    this._interval = null;
    this._duration = this._initialDuration;
    this._updateTick();
  }

  _updateTick() {
    this._min = parseInt(this._duration / 60, 10);
    this._sec = parseInt(this._duration % 60, 10);

    this._min = (this._min < 10) ? `0${this._min}` : `${this._min}`;
    this._sec = (this._sec < 10) ? `0${this._sec}` : `${this._sec}`;

    this._countElement.textContent = `${this._min}:${this._sec}`;
  }

  _clearInterval() {
    window.clearInterval(this._interval);
    this._interval = null;
  }

}


/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Store; });
class Store {

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


/***/ }),

/***/ "./src/utils/dom-utils.js":
/*!********************************!*\
  !*** ./src/utils/dom-utils.js ***!
  \********************************/
/*! exports provided: RenderPosition, render, createElement, renderTemplate, replace, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _view_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

const render = (container, child, place = RenderPosition.AFTERBEGIN) => {
  if (container instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const renderTemplate = (container, template, place) => {
  if (container instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  container.insertAdjacentHTML(place, template);
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if (!(component instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: getRandomInteger, getRandomIndex, runCallbacks, getRandomTransition, getRandomColor, generateCubeParams, generateId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIndex", function() { return getRandomIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runCallbacks", function() { return runCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomTransition", function() { return getRandomTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomColor", function() { return getRandomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCubeParams", function() { return generateCubeParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateId", function() { return generateId; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomIndex = (array) => array[getRandomInteger(0, array.length - 1)];

const runCallbacks = (times, cb) => new Array(times).fill(null).forEach(cb);

const getRandomTransition = () => {
  const R1 = ((Math.random() * 0.699) + 0.300).toFixed(3);
  const R2 = ((Math.random() * -0.899) - 0.100).toFixed(3);
  const R3 = ((Math.random() * 0.899) + 0.100).toFixed(3);
  const R4 = (Math.random() + 0.4).toFixed(3);
  return `cubic-bezier(${R1},${R2},${R3},${R4})`;
};

const getRandomColor = () => `#${((1 << 24) * Math.random() | 0).toString(16)}`;

const generateCubeParams = () => {
  const randomDimension = getRandomInteger(50, 150);
  return {
    top: `${getRandomInteger(0, 75)}%`,
    left: `${getRandomInteger(0, 75)}%`,
    width: `${randomDimension}px`,
    height: `${randomDimension}px`,
    borderRadius: `${getRandomInteger(0, 15)}px`,
    color: `${getRandomColor()}`,
    zIndex: `${getRandomInteger(1, 10)}`,
    transition: `all ${randomDimension / 100}s ${getRandomTransition()}`
  };
};

const generateId = () => Math.random().toString(36).substr(2, 9);


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom-utils.js */ "./src/utils/dom-utils.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/bar.js":
/*!*************************!*\
  !*** ./src/view/bar.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bar; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


class Bar extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return (
      `<div class="bar game__bar"></div>`
    );
  }

}


/***/ }),

/***/ "./src/view/board.js":
/*!***************************!*\
  !*** ./src/view/board.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


class Board extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return (
      `<div class="game__board board border border-primary"></div>`
    );
  }

}


/***/ }),

/***/ "./src/view/controls.js":
/*!******************************!*\
  !*** ./src/view/controls.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controls; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


class Controls extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return (
      `<nav class="bar__field controls">
      </nav>`
    );
  }

}


/***/ }),

/***/ "./src/view/cube.js":
/*!**************************!*\
  !*** ./src/view/cube.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cube; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");



class Cube extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor() {
    super();
    this._id = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["generateId"])();
    this._params = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["generateCubeParams"])();
    this._element = this.getElement();
    this._clikedState = `cube--clicked`;
    this._setStyle(this._element);
    this._clickHandler = this._clickHandler.bind(this);
    this._click = null;
  }

  getTemplate() {
    return (
      `<div class="game__cube cube"></div>`
    );
  }

  getId() {
    return this._id;
  }

  setClickHandler(callback) {
    this._click = callback;
    this._element.addEventListener(`click`, this._clickHandler);
  }

  hide() {
    this._element.classList.add(this._clikedState);
  }

  _clickHandler() {
    this._click();
  }

  _setStyle(el) {
    Object.assign(el.style, this._params);
  }

}


/***/ }),

/***/ "./src/view/points.js":
/*!****************************!*\
  !*** ./src/view/points.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Points; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


class Points extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(score) {
    super();
    this._score = score;
    this._scoreElement = this.getElement().querySelector(`.points__count`);
  }

  getTemplate() {
    return (
      `<div class="bar__field points">
        <p class="points__title">Score:</p>
        <div class="points__container border border-primary p-1">
          <b class="points__count">${this._score}</b>
        </div>
      </div>
    `);
  }

  updateScore(score) {
    this._score = score;
    this._scoreElement.textContent = score;
  }

}


/***/ }),

/***/ "./src/view/popup.js":
/*!***************************!*\
  !*** ./src/view/popup.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");

class Popup extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(result = 0) {
    super();
    this._hiddenState = `popup--hidden`;
    this._result = result;
    this._element = this.getElement();

    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._formSubmit = null;
  }

  getTemplate() {
    return (
      `<section class="popup popup--hidden">
        <div class="popup__content bg-light shadow">
          <h2 class="popup__title">
            Your score: <span class="popup__result">${this._result}</span>
          </h2>
          <form class="popup__form">
            <div class="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">
              Save
            </button>
          </form>
        </div>
      </section>`
    );
  }

  show() {
    this._element.classList.remove(this._hiddenState);
  }

  setSubmitHandler(callback) {
    this._formSubmit = callback;
    this._element.querySelector(`.popup__form`)
      .addEventListener(`submit`, this._formSubmitHandler);
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._formSubmit(evt);
    this._element.querySelector(`.popup__form`).submit();
  }

}


/***/ }),

/***/ "./src/view/start-button.js":
/*!**********************************!*\
  !*** ./src/view/start-button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartButton; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


class StartButton extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
    this._click = null;
  }

  getTemplate() {
    return (
      `<button class="btn-outline-dark btn controls__button">
        New Game
      </button>`
    );
  }

  setClickHandler(callback) {
    this._click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._click();
  }

}




/***/ }),

/***/ "./src/view/stats.js":
/*!***************************!*\
  !*** ./src/view/stats.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


class Stats extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(gamers) {
    super();
    this._gamers = JSON.parse(gamers);
  }

  getTemplate() {
    return (
      `<div class="game__stats stats">
        <p class="stats__title">Gamers:</p>
        <ul class="list-group">${this._generateData()}</ul>
      </div>`
    );
  }

  _generateData() {
    return Object.entries(this._gamers).map(([name, score]) => {
      return (
        `<li class="list-group-item stats__data">
            <b class="stats__content">${name}</b>
            <b class="stats__content">${score}</b>
        </li>`
      );
    }).join(``);
  }
}


/***/ }),

/***/ "./src/view/timer.js":
/*!***************************!*\
  !*** ./src/view/timer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timer; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


class Timer extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return (
      `<div class="bar__field timer">
        <p class="timer__title">Time:</p>
        <div class="timer__container border border-primary p-1">
          <b class="timer__count">01:00</b>
      </div>
    `);
  }
}


/***/ }),

/***/ "./src/view/toggle-button.js":
/*!***********************************!*\
  !*** ./src/view/toggle-button.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleButton; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");



class ToggleButton extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
    this._click = null;
  }

  getTemplate() {
    return (
      `<button class="btn-outline-primary btn controls__button" data-status="${_const__WEBPACK_IMPORTED_MODULE_1__["ButtonStatus"].START}">
        ${_const__WEBPACK_IMPORTED_MODULE_1__["ButtonStatus"].START}
      </button>`
    );
  }

  setClickHandler(callback) {
    this._click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._click();
  }

}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map