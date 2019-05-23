import React, {Component} from 'react';
import style from '../styles/cart.less';

export default class CartItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cart: props.cart,
        }
    }

    increase = () => {
        const {increase} = this.props;
        const {cart} = this.state;
        increase(cart.number);
    };

    decrease = () => {
        const {decrease} = this.props;
        const {cart} = this.state;
        decrease(cart.number);
    };

    render() {
        const {number, count} = this.props.cart;
        const {name, price} = this.props.item;
        const total = count * price;
        return (
            <tr>
                <td>{number}</td>
                <td>{name}</td>
                <td>{`${price}$`}</td>
                <td className={style.count}><span onClick={this.decrease}>-</span><p>{count}</p><span onClick={this.increase}>+</span></td>
                <td>{`${total}$`}</td>
            </tr>
        );
    }
}