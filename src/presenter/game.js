
import BarView from "../view/bar";
import PointsView from "../view/points";
import ControlsView from "../view/controls";
import ToggleButtonView from "../view/toggle-button";
import StartButtonView from "../view/start-button";
import StatsView from "../view/stats";
import BoardView from "../view/board";
import PopupView from "../view/popup";
import CubeView from "../view/cube";

import TimerPresenter from "./timer";

import {ButtonStatus} from "../const";
import {render} from "../utils/dom-utils";
import {getRandomInteger} from "../utils/utils";

export default class Game {

  constructor(container) {

    this._container = container;
    this._duration = 0.5;
    this._score = 0;

    this._boardView = new BoardView();
    this._barView = new BarView();
    this._controlsView = new ControlsView();
    this._toggleButtonView = new ToggleButtonView();
    this._startButtonView = new StartButtonView();
    this._pointsView = new PointsView(this._score);
    this._statsView = new StatsView();
    this._popupView = null;
    this._interval = null;

    this._cubes = new Map();

    this._timerPresenter = new TimerPresenter(this._duration, () => this._end());

    this._running = null;
    this._pausing = false;

    this._handleStartButtonClick = this._handleStartButtonClick.bind(this);
    this._handleToggleButtonClick = this._handleToggleButtonClick.bind(this);
    this._handleCubeClick = this._handleCubeClick.bind(this);

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

  _renderCubes(duration = 500) {
    this._interval = window.setInterval(() => {
      this._initCube();
    }, duration);
  }

  _initCube() {
    this._createCube();
    this._stopRenderCubes();
    this._renderCubes(getRandomInteger(250, 750));
  }

  _createCube() {
    // fragment to do
    const cube = new CubeView();
    const cubeId = cube.getId();
    this._cubes.set(cubeId, cube);
    const currentCube = this._cubes.get(cubeId);
    currentCube.setClickHandler(() => this._handleCubeClick(cubeId));
    render(this._boardView, currentCube);
  }

  _hideCube(id) {
    this._cubes.get(id).hide();
    this._cubes.delete(id);
  }

  _stopRenderCubes() {
    clearInterval(this._interval);
    this._interval = null;
  }

  _renderPopup() {
    this._popupView = new PopupView(this._score);
    render(this._container, this._popupView);
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

  _handleCubeClick(id) {
    this._updateScore();
    this._hideCube(id);
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

}
