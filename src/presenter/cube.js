import CubeView from "../view/cube";
import {render} from "../utils/dom-utils";
import {generateCubeParams} from "../utils/utils";

export default class Cube {

  constructor(container) {
    this._container = container;
    this._style = generateCubeParams();
    this._view = new CubeView(this._style);
  }

  init() {
    render(this._container, this._view);
  }

}
