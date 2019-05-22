import getInitPOST from '../../getInitPOST';

function getItem(number) {
    let body = JSON.stringify({
        number,
    });
    let request = new Request('/item/get', getInitPOST(body));
    return fetch(request).then(response => response.json())
}

export default getItem;