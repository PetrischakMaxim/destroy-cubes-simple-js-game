import AbstractView from "./abstract";
import {DEFAULT_CUBE_PARAMS} from "../const";

export default class Cube extends AbstractView {

  constructor(params = DEFAULT_CUBE_PARAMS) {
    super();
    this._params = params;
    this._element = this.getElement();
    this._setStyle(this._element);
    this._clickHandler = this._clickHandler.bind(this);
    this._click = null;
  }

  getTemplate() {
    return (
      `<div class="game__cube cube"></div>`
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

  _setStyle(el) {
    Object.assign(el.style, this._params);
  }

}
