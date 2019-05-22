import getInitPOST from "../../getInitPOST";

function logout() {
    return fetch('/user/logout', getInitPOST()).then(response => response.json())
}

export default logout;