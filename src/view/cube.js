import AbstractView from "./abstract";
import {DEFAULT_CUBE_PARAMS} from "../const";

export default class Cube extends AbstractView {

  constructor(params = DEFAULT_CUBE_PARAMS) {
    super();

    this._params = params;
    this._element = this.getElement();
    this._setStyle(this._element);
  }

  getTemplate() {
    return (
      `<div class="game__cube cube"></div>`
    );
  }

  _setStyle(el) {
    Object.assign(el.style, this._params);
  }

}
