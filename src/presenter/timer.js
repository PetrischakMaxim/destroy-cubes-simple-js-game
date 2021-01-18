import TimerView from "../view/timer";

import {TICK_TIME, TIMER_VALUE} from "../const";

export default class Timer {

  constructor(duration, callback) {
    this._view = new TimerView();
    this._countElement = this._view.getElement().querySelector(`.timer__count`);
    this._duration = duration * TIMER_VALUE;
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

    }, TICK_TIME);
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
