import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ["button", "resetButton"];
  static values = {
    dog: String
  }

  connect() {
    console.log("Hello from our first Stimulus controller");
  }

  disable() {
    this.buttonTarget.innerText = this.dogValue;
    this.buttonTarget.disabled = true;
    // show the reset button
    this.resetButtonTarget.classList.remove('d-none');
  }

  reset() {
    this.buttonTarget.innerText = 'Click Me!';
    this.buttonTarget.disabled = false;
    this.resetButtonTarget.classList.add('d-none');
  }
}
