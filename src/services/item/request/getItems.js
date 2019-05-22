import getInitGET from '../../getInitGET';

function getItems() {
    let request = new Request('/item/all', getInitGET());
    return fetch(request).then(response => response.json())
}

export default getItems;