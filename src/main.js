import BarView from "./view/bar";
import BoardView from "./view/board";
import StatsView from "./view/stats";
import PopupView from "./view/popup";

import {render, RenderPosition} from "./utils/dom-utils.js";

const appElement = document.querySelector(`.app`);
const mainContainerElement = appElement.querySelector(`.app__main .container`);

render(mainContainerElement, new BarView());
render(mainContainerElement, new BoardView());
render(mainContainerElement, new StatsView());

render(appElement, new PopupView(), RenderPosition.BEFOREEND);
