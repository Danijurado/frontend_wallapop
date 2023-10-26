import { createUser } from "./signupModel.js";

export const signupController =  (signupForm) => {
    signupForm.addEventListener('submit',async (event) => {
        event.preventDefault();

        const username = signupForm.querySelector('#username');
        const password = signupForm.querySelector('#password');
        const passwordComfirm = signupForm.querySelector('#password-confirm');
       

        if (isValidForm(username, password, passwordComfirm)) {
            try {
                await createUser(username.value, password.value)
                alert('Usuario creado correctamente');
            } catch (error) {
                alert (error);
                
            }
        }
    });
    
}
const isValidForm = (username, password, passwordComfirm) => {
    return isValidateUsername(username) && isValidatePassword(password, passwordComfirm)
}

const isValidateUsername = (username) => {
    const usernameRegExp = new RegExp(/^[a-zA-Z\-]+$/);
    let result = true;

    if (!usernameRegExp.test(username.value)) {
        alert('El usuario no es correcto');
        result = false;
    }
    return result;
}

const isValidatePassword = (password, passwordComfirm) => {
    let result = true;
    if (password.value !== passwordComfirm.value) {
        alert('Las contraseñas no coinciden');
        result = false;
    }
    return result;
}