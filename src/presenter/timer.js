import {TICK_TIME} from "../const";

export default class Timer {

  constructor(element, duration, callback) {
    this._element = element;
    this._duration = duration * 60;
    this._callback = callback;
    this._interval = null;
    this._min = null;
    this._sec = null;
    this._paused = null;
  }

  init() {
    this._updateTick();
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

  _updateTick() {
    this._min = parseInt(this._duration / 60, 10);
    this._sec = parseInt(this._duration % 60, 10);

    this._min = (this._min < 10) ? `0${this._min}` : `${this._min}`;
    this._sec = (this._sec < 10) ? `0${this._sec}` : `${this._sec}`;

    this._element.textContent = `${this._min}:${this._sec}`;
  }

  _clearInterval() {
    window.clearInterval(this._interval);
    this._interval = null;
  }

}
