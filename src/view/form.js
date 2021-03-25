import AbstractView from "./abstract";


export default class Form extends AbstractView {

  getTemplate() {
    return (
      `<form class="popup__form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">
          Save
        </button>
      </form>`
    );
  }

}
