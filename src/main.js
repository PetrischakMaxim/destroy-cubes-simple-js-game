import GamePresenter from "./presenter/game";

const appElement = document.querySelector(`.app`);
const mainContainerElement = appElement.querySelector(`.app__main .container`);

const game = new GamePresenter(mainContainerElement);

game.init();
