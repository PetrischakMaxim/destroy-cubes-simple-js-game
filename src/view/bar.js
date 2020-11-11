import AbstractView from "./abstract";

export default class Bar extends AbstractView {

  getTemplate() {
    return (
      `<div class="bar game__bar">
        <nav class="bar__field controls">
          <button class="btn-outline-primary btn controls__button">
            Старт/ пауза
          </button>
          <button class="btn-outline-dark btn controls__button">
            Новая игра
          </button>
        </nav>

        <div class="bar__field points">
          <p class="points__title">Очки:</p>
          <div class="points__container border border-primary p-1">
            <b class="points__count">0</b>
          </div>
        </div>

        <div class="bar__field timer">
          <p class="timer__title">Время:</p>
          <div class="timer__container border border-primary p-1">
            <b class="timer__count">01:00</b>
          </div>
        </div>
    </div>`);
  }

}
