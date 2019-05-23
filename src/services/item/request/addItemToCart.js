import getInitPOST from "../../getInitPOST";

function addItemToCart(number) {
    let body = JSON.stringify({
        number,
    });
    return fetch('/user/addItem', getInitPOST(body)).then(response => response.json())
}

export default addItemToCart;