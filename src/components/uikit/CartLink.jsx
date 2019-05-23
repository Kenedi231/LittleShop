import React from 'react';
import {Link} from "react-router-dom";
import style from '../../styles/header.less';

const counter = cart => {
    let result = 0;
    for (let i = 0; i < cart.length; i++) {
        result += cart[i].count;
    }
    return result;
};

export default function CartLink(props) {
    const cart = props.user.cart;
    const count = counter(cart);
    return (
        <li><Link to="/cart">Cart <span className={style.cart}>{count}</span></Link></li>
    );
};
