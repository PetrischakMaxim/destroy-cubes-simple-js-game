import BarView from "../view/bar";
import PointsView from "../view/points";
import ControlsView from "../view/controls";
import ToggleButtonView from "../view/toggle-button";
import StartButtonView from "../view/start-button";
import StatsView from "../view/stats";
import BoardView from "../view/board";

import TimerPresenter from "./timer";
import CubePresenter from "./cube";

import {ButtonStatus} from "../const";
import {render} from "../utils/dom-utils";
import {getRandomInteger} from "../utils/utils";

export default class Game {

  constructor(container, duration) {

    this._container = container;
    this._duration = duration || 1;

    this._boardView = new BoardView();
    this._barView = new BarView();
    this._controlsView = new ControlsView();
    this._toggleButtonView = new ToggleButtonView();
    this._startButtonView = new StartButtonView();
    this._pointsView = new PointsView();
    this._statsView = new StatsView();
    this._timerPresenter = new TimerPresenter(this._duration, this._end);

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
    console.log(`run`);
    // fragment to do
    this._interval = setInterval(() => {
      this._cubePresenter = new CubePresenter(this._boardView);
      this._cubePresenter.init();
    }, getRandomInteger(750, 2000));
  }

  _stopCubes() {
    console.log(`stop`);
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
    // end game
    // todo show Popup
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
