import { spinnerEvent } from "../utils/spinnerEvent.js";
import { loginUser } from "./loginModel.js";

export const loginController = (loginForm) => {
    
    loginForm.addEventListener ('submit', (event) => {
        event.preventDefault();
        submitLogin(loginForm)
    })
}

const submitLogin = async (loginForm) => {
    const {username, password} = loginData(loginForm);
    try {
        spinnerEvent('loadingLogin', null, loginForm);
        const jwt =  await loginUser(username, password);
        alert('login ok');
        localStorage.setItem('token', jwt);
        window.location = './index.html';
    } catch (error) {
        alert(error);
    } finally {
        spinnerEvent('finishLoadingLogin', null, loginForm);
    }
}

const loginData = (loginForm) => {
    //const username = loginForm.querySelector('#username');
    //const password = loginForm.querySelector('#password');

    const formData = new FormData(loginForm);
    const username = formData.get('username');
    const password = formData.get('password');
    return {
        username: username,
        password: password
    }

}
