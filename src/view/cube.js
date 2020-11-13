import AbstractView from "./abstract";

export default class Cube extends AbstractView {

  constructor(size, color, speed) {
    super();

    this._width = size;
    this._height = size;
    this._color = color;
    this._speed = speed;

    this._element = this.getElement();
    this._setStyle(this._element);
  }

  getTemplate() {
    return (
      `<div class="game__cube cube"></div>`
    );
  }


  _setStyle(el) {
    Object.assign(el.style, {width: `${this._width}px`, height: `${this._height}px`, color: `${this._color}`});
  }

}
