import AbstractView from "./abstract";

export default class Timer extends AbstractView {

  getTemplate() {
    return (
      `<div class="bar__field timer">
        <p class="timer__title">Время:</p>
        <div class="timer__container border border-primary p-1">
          <b class="timer__count">01:00</b>
      </div>
    `);
  }

}
