export const buildUserSession = () => {
    return `
        <ul>
            <li>
                <a href="login.html">Login</a>
                <a href="signup.html">Signup</a>
            </li>
        </ul>
        `;
}

export const buildSessionOff = () => {
    return `
    <a href="create.html">Añadir producto</a>
    <button>Cerrar sesion</button>`;
        
}