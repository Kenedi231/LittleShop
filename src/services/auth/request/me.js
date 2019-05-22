import getInitGET from '../../getInitGET';

function me() {
    let request = new Request('/user/me', getInitGET());
    return fetch(request).then(response => response.json())
}

export default me;