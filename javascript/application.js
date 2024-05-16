// we import the application class (top level process) from Stimulus
import { Application } from 'stimulus';
// we start the Stimulus top level process and bind a reference to the Stimulus object
window.Stimulus = Application.start()

// we import all of our controllers from our respective controller files
import DisableButtonController from "./controllers/disable_button_controller.js"
// ... and register them with stimulus, giving them a name that we can refer to them by in our HTML
Stimulus.register("disable-button", DisableButtonController)


// The VANILLA/OLD way of selecting an element
const button = document.querySelector("#non-existant-button");

// The VANILLA/OLD way of adding an event listener to said element
button.addEventListener("click", (event) => {
  event.target.disabled = true;
})
