import AbstractView from "./abstract";

export default class Popup extends AbstractView {

  constructor(result = 0) {
    super();
    this._hiddenState = `popup--hidden`;
    this._result = result;
  }

  getTemplate() {
    return (
      `<section class="popup popup--hidden">
        <div class="popup__content bg-light shadow">
          <h2 class="popup__title">
            Your score: <span class="popup__result">${this._result}</span>
          </h2>
          <form class="popup__form">
            <div class="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">
              Save
            </button>
          </form>
        </div>
      </section>`
    );
  }

  show() {
    this.getElement().classList.remove(this._hiddenState);
  }

}
