import AbstractView from "./abstract";

export default class ToggleButton extends AbstractView {

  getTemplate() {
    return (
      `<button class="btn-outline-primary btn controls__button">
        Старт/ пауза
      </button>`
    );
  }

}
