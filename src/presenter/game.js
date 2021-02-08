
import BarView from "../view/bar";
import PointsView from "../view/points";
import ControlsView from "../view/controls";
import ToggleButtonView from "../view/toggle-button";
import StartButtonView from "../view/start-button";
import StatsView from "../view/stats";
import BoardView from "../view/board";
import PopupView from "../view/popup";

import TimerPresenter from "./timer";
import CubePresenter from "./cube";

import {ButtonStatus} from "../const";
import {render} from "../utils/dom-utils";

import {getRandomInteger, generateId} from "../utils/utils";

export default class Game {

  constructor(container) {

    this._container = container;
    this._duration = 0.1;

    this._boardView = new BoardView();
    this._barView = new BarView();
    this._controlsView = new ControlsView();
    this._toggleButtonView = new ToggleButtonView();
    this._startButtonView = new StartButtonView();
    this._pointsView = new PointsView();
    this._statsView = new StatsView();
    this._popupView = null;

    this._timerPresenter = new TimerPresenter(this._duration, () => {
      this._end();
    });
    this._cubePresenter = new Map();

    this._interval = null;
    this._running = null;
    this._pausing = false;

    this._handleStartButtonClick = this._handleStartButtonClick.bind(this);
    this._handleToggleButtonClick = this._handleToggleButtonClick.bind(this);
  }

  init() {
    this._renderElements();
    this._setInnerHandlers();
    this._timerPresenter.init();
  }

  _setInnerHandlers() {
    this._startButtonView.setClickHandler(this._handleStartButtonClick);
    this._toggleButtonView.setClickHandler(this._handleToggleButtonClick);
  }

  _renderElements() {
    // fragment to do
    render(this._container, this._boardView);
    render(this._container, this._statsView);
    render(this._container, this._barView);

    render(this._barView, this._timerPresenter.getView());
    render(this._barView, this._pointsView);
    render(this._barView, this._controlsView);
    render(this._controlsView, this._startButtonView);
    render(this._controlsView, this._toggleButtonView);
  }

  _renderCubes() {
    // fragment to do
    this._interval = window.setInterval(() => {
      const id = generateId();
      this._cubePresenter.set(id, new CubePresenter(this._boardView));
      this._cubePresenter.get(id).init();
    }, getRandomInteger(750, 2000));
  }

  _stopCubes() {
    clearInterval(this._interval);
  }

  _run() {
    this._updateState(this._pausing, this._running);
    this._timerPresenter.tick();
    this._renderCubes();
  }

  _pause() {
    this._updateState(this._running, this._pausing);
    this._timerPresenter.pause();
    this._stopCubes();
  }

  _end() {
    this._handleToggleButtonClick();
    this._renderPopup();
  }

  _renderPopup() {
    this._popupView = new PopupView();
    render(this._container, this._popupView);
    this._popupView.fadeIn();
  }

  _handleStartButtonClick() {

    this._renderMessage(`Че сыграем заново? Время и очки будут сброшены`, ()=> {
      this._timerPresenter.reset();
      this._handleToggleButtonClick();
    });

  }

  _handleToggleButtonClick() {
    let currentStatus = ``;
    const toggleButton = this._toggleButtonView.getElement();
    if (toggleButton.dataset.status === `${ButtonStatus.PAUSE}`) {
      currentStatus = `${ButtonStatus.START}`;
      this._pause();
    } else {
      currentStatus = `${ButtonStatus.PAUSE}`;
      this._run();
    }
    toggleButton.dataset.status = currentStatus;
    toggleButton.textContent = currentStatus;
  }

  _updateState(prevStatus, currentStatus) {
    if (prevStatus) {
      return;
    }
    prevStatus = currentStatus;
    prevStatus = prevStatus;
  }

  _renderMessage(message, cb) {
    let isConfirmed = confirm(`${message}`);
    return (isConfirmed) ? cb() : false;
  }

}
