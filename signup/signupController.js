export const signupController = (signupForm) => {
    signupForm.addEventListener('submit',(event) => {
        event.preventDefault();
        const username = signupForm.querySelector('#username');
        const password = signupForm.querySelector('#password');
        const passwordComfirm = signupForm.querySelector('#password-confirm');

        const usernameRegExp = new RegExp(/^[a-zA-Z\-]+$/);
        if (!usernameRegExp.test(username.value)) {
            alert('El usuario no es correcto');
        }

        if (password.value !== passwordComfirm.value) {
            alert('Las contraseñas no coinciden');
        }
    })
}
