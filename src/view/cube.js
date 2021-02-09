import AbstractView from "./abstract";
import {generateId, generateCubeParams} from "../utils/utils";

export default class Cube extends AbstractView {

  constructor() {
    super();
    this._id = generateId();
    this._params = generateCubeParams();
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
