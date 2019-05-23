import getInitPOST from "../../getInitPOST";

function clearCart() {
    return fetch('/user/clearCart', getInitPOST()).then(response => response.json())
}

export default clearCart;