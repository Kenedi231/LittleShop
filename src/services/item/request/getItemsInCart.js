import getInitPOST from "../../getInitPOST";

function getItemsInCart(cart) {
    let body = JSON.stringify({
        cart,
    });
    return fetch('/item/getCart', getInitPOST(body)).then(response => response.json())
}

export default getItemsInCart;