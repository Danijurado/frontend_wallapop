import { signupController } from "./signupController.js";
import{notificationsController} from "../notifications/notificationsController.js"

const signupForm = document.querySelector('#signup');
const notifications = document.querySelector('#notification');

const showNotification = notificationsController(notifications);
signupController(signupForm);

signupForm.addEventListener ('userCreated', (event) => {
    showNotification(event.detail.message, event.detail.type);
})


