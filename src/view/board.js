import AbstractView from "./abstract";

export default class Board extends AbstractView {

  getTemplate() {
    return (
      `<div class="game__board board border border-primary"></div>`
    );
  }

}
