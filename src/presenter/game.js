import BarView from "../view/bar";
import TimerView from "../view/timer";
import PointsView from "../view/points";
import ControlsView from "../view/controls";
import ToggleButtonView from "../view/toggle-button";
import StartButtonView from "../view/start-button";
import StatsView from "../view/stats";

import BoardView from "../view/board";
import CubeView from "../view/cube";

import {render, RenderPosition} from "../utils/dom-utils.js";

const CUBES_COUNT = 60;

export default class Game {
  constructor(container) {
    this._container = container;
    this._boardView = new BoardView();
    this._controlsView = new ControlsView();
    this._barView = new BarView();
    this._controlsView = new ControlsView();
    this._timerView = new TimerView();
    this._pointsView = new PointsView();
    this._statsView = new StatsView();

    this._toggleButtonView = new ToggleButtonView();
    this._startButtonView = new StartButtonView();
    this._cubeView = null;
  }

  init() {
    this._renderElements();
  }

  _renderControls() {
    render(this._barView, this._controlsView);
  }

  _renderPoints() {
    render(this._barView, this._pointsView);
  }

  _renderTimer() {
    render(this._barView, this._timerView);
  }

  _renderStartButton() {
    render(this._controlsView, this._startButtonView);
  }

  _renderToggleButton() {
    render(this._controlsView, this._toggleButtonView);
  }

  // _renderCubes(count) {

  // }

  _renderElements() {
    render(this._container, this._barView);
    this._renderTimer();
    this._renderPoints();
    this._renderControls();
    this._renderStartButton();
    this._renderToggleButton();
    render(this._container, this._boardView);
    render(this._container, this._statsView);
  }


}
