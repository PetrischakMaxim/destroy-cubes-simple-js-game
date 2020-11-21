import AbstractView from "./abstract";
import {ButtonStatus} from "../const";

export default class ToggleButton extends AbstractView {

  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
    this._click = null;
  }

  getTemplate() {
    return (
      `<button class="btn-outline-primary btn controls__button" data-status="${ButtonStatus.START}">
        ${ButtonStatus.START}
      </button>`
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

}
