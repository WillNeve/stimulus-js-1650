// We import the base controller class (with all the base functionality) from Stimulus
import { Controller } from 'stimulus';

// We define a class that inherits from the base class and export it
export default class extends Controller {
  // we accept/register targets made available in our HTML
  static targets = ["button", "resetButton"];
  // we accept/register values made available in our HTML
  static values = {
    dog: String
  }
  // this function is automatically invoked/called when the controller connects
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
