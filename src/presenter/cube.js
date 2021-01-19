import CubeView from "../view/cube";
import {render} from "../utils/dom-utils";
import {generateCubeParams} from "../utils/utils";

export default class Cube {

  constructor(container) {
    this._container = container;
    this._style = generateCubeParams();
    this._view = new CubeView(this._style);

    this._handleClick = this._handleClick.bind(this);
  }

  init() {
    render(this._container, this._view);
    this._view.setClickHandler(this._handleClick);
  }

  _handleClick() {
    this._view.getElement().classList.add(`cube--clicked`);
    // remove(this._view);
  }


}
