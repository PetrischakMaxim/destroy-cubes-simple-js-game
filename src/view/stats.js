import AbstractView from "./abstract";

export default class Stats extends AbstractView {

  getTemplate() {
    return (
      `<div class="game__stats stats">
        <p class="stats__title">Игроки:</p>
        <ul class="list-group">
          <li class="list-group-item stats__data">
            <b class="stats__content" data-stats="name">Alex</b>
            <b class="stats__content" data-stats="points">120</b>
          </li>
        </ul>
      </div>`
    );
  }

}
