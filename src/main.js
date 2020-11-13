import BarView from "./view/bar";
import BoardView from "./view/board";
import CubeView from "./view/cube";
import StatsView from "./view/stats";
import PopupView from "./view/popup";

import {render, RenderPosition} from "./utils/dom-utils.js";

const appElement = document.querySelector(`.app`);
const mainContainerElement = appElement.querySelector(`.app__main .container`);
const boad = new BoardView();
const boadrElement = boad.getElement();


render(mainContainerElement, new BarView());
render(mainContainerElement, boad);
render(boadrElement, new CubeView(50, `red`, 30));
render(mainContainerElement, new StatsView());

render(appElement, new PopupView(), RenderPosition.BEFOREEND);
