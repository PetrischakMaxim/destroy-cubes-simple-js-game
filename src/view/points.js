import AbstractView from "./abstract";

export default class Points extends AbstractView {

  getTemplate() {
    return (
      `<div class="bar__field points">
        <p class="points__title">Очки:</p>
        <div class="points__container border border-primary p-1">
          <b class="points__count">0</b>
        </div>
      </div>
    `);
  }

}
