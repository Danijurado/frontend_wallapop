import { loginController } from "./loginController.js";
import {loaderController} from "../loader/loaderController.js"
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login');
    
    const loader = document.querySelector('#loader');
    const {show, hide} = loaderController(loader);
    
    loginForm.addEventListener('loadingLogin', () => {
        show();
    });
    loginForm.addEventListener('finishLoadingLogin', () => {
        hide();
    });
    
    loginController(loginForm);
})