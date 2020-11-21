import AbstractView from "./abstract";

export default class Popup extends AbstractView {

  getTemplate() {
    return (
      `<section class="popup popup--hidden">
        <div class="popup__content bg-light shadow">
          <h2 class="popup__title">
            Your score: <span class="popup__result">0</span>
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

}
