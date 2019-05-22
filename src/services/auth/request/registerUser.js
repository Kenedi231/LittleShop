import getInitPOST from "../../getInitPOST";

function createUser() {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('e-mail').value;
    let body = JSON.stringify({
        login,
        password,
        email,
    });
    return fetch('/user/new', getInitPOST(body)).then(response => response.json())
}

export default createUser;