import AbstractView from "./abstract";

export default class Stats extends AbstractView {

  constructor(gamers) {
    super();
    this._gamers = JSON.parse(gamers);
  }

  getTemplate() {
    return (
      `<div class="game__stats stats">
        <p class="stats__title">Gamers:</p>
        <ul class="list-group">${this._generateData()}</ul>
      </div>`
    );
  }

  _generateData() {
    return Object.entries(this._gamers).map(([name, score]) => {
      return (
        `<li class="list-group-item stats__data">
            <b class="stats__content">${name}</b>
            <b class="stats__content">${score}</b>
        </li>`
      );
    }).join(``);
  }
}
