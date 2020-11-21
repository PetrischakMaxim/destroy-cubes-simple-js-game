import BarView from "../view/bar";
import PointsView from "../view/points";
import ControlsView from "../view/controls";
import ToggleButtonView from "../view/toggle-button";
import StartButtonView from "../view/start-button";
import StatsView from "../view/stats";
import BoardView from "../view/board";

import TimerPresenter from "./timer";

import {ButtonStatus} from "../const";
import {render} from "../utils/dom-utils.js";

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

  _run() {
    this._updateState(this._pausing, this._running);

    console.log(`start`);

    // todo reset Timer new game button click
    this._timerPresenter.tick();
  }

  _pause() {
    this._updateState(this._running, this._pausing);
    console.log(`pause`);

    this._timerPresenter.pause();
  }

  _end() {
    // end game
    // todo show Popup
  }

  _handleStartButtonClick() {
    this._timerPresenter.reset();
  }

  _handleToggleButtonClick() {
    let updatedValue = ``;
    const toggleButton = this._toggleButtonView.getElement();
    if (toggleButton.dataset.status === `${ButtonStatus.PAUSE}`) {
      updatedValue = `${ButtonStatus.START}`;
      this._pause();
    } else {
      updatedValue = `${ButtonStatus.PAUSE}`;
      this._run();
    }
    toggleButton.dataset.status = updatedValue;
    toggleButton.textContent = updatedValue;
  }

  _updateState(prevStatus, currentStatus) {
    if (prevStatus) {
      return;
    }
    prevStatus = currentStatus;
    prevStatus = prevStatus;
  }

}
