import AbstractView from "./abstract";

export default class Popup extends AbstractView {

  getTemplate() {
    return (
      `<section class="popup popup--hidden">
        <div class="popup__content bg-light shadow">
          <h2 class="popup__title">
            Ваш счет: <span class="popup__result">0</span>
          </h2>
          <form class="popup__form">
            <div class="form-group">
              <label for="name">Имя:</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Запишите Ваше Имя"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">
              Сохранить результат
            </button>
          </form>
        </div>
      </section>`
    );
  }

}
