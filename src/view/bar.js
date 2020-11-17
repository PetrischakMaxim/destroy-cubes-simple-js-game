import AbstractView from "./abstract";

export default class Bar extends AbstractView {

  getTemplate() {
    return (
      `<div class="bar game__bar"></div>`
    );
  }

}
