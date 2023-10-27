import { buildSessionOff, buildUserSession } from "./userSessionView.js";

export const userSessionController = (session) => {
     

     if (getToken()) {
        session.innerHTML = buildSessionOff();
        const logoutButtom = session.querySelector('button');
        logoutButtom.addEventListener('click', () => {
            localStorage.removeItem('token');
            userSessionController(session);
        })
     } else {
        session.innerHTML = buildUserSession();
     }
    }
const getToken = () => {
    return localStorage.getItem('token');
}
