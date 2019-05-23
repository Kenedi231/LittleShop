import getInitPOST from "../../getInitPOST";

function updateCart(cart) {
    let body = JSON.stringify({
        cart,
    });
    return fetch('/user/updateCart', getInitPOST(body)).then(response => response.json())
}

export default updateCart;