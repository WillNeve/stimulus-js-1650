import { Application } from 'stimulus';
window.Stimulus = Application.start()

import DisableButtonController from "./controllers/disable_button_controller.js"
Stimulus.register("disable-button", DisableButtonController)

// const button = document.querySelector("#click-me");

// button.addEventListener("click", (event) => {
//   event.target.disabled = true;
// })


