import getInitPOST from "../../getInitPOST";

function loginUser() {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let body = JSON.stringify({
        login,
        password,
    });
    return fetch('/user/login', getInitPOST(body)).then(response => response.json())
}

export default loginUser;