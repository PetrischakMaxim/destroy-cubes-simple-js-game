import AbstractView from "./abstract";

export default class StartButton extends AbstractView {

  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
    this._click = null;
  }

  getTemplate() {
    return (
      `<button class="btn-outline-dark btn controls__button">
        Новая игра
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


