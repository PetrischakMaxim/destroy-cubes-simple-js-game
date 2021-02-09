import AbstractView from "./abstract";

export default class Points extends AbstractView {

  constructor(score) {
    super();
    this._score = score;
    this._scoreElement = this.getElement().querySelector(`.points__count`);
  }

  getTemplate() {
    return (
      `<div class="bar__field points">
        <p class="points__title">Score:</p>
        <div class="points__container border border-primary p-1">
          <b class="points__count">${this._score}</b>
        </div>
      </div>
    `);
  }

  updateScore(score) {
    this._score = score;
    this._scoreElement.textContent = score;
  }

}
