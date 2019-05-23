import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import CartItem from './CartItem';
import getItemsInCart from '../services/item/request/getItemsInCart';
import clearCart from '../services/item/request/clearCart';
import updateCart from '../services/item/request/updateCart';
import style from '../styles/cart.less';

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: props.user.cart,
            user: props.user,
            items: null,
            loading: true,
        };
    }

    componentDidMount() {
        const {cart} = this.state.user;
        getItemsInCart(cart)
            .then(res => {
                this.setState({items: res.items});
            })
            .then(this.hideLoader)
            .catch(err => {
                alert(err);
            });
    }

    increaseCount = (number) => {
        const {cart} = this.state;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].number === number) {
                cart[i].count++;
                break;
            }
        }
        this.setState({cart});
        updateCart(cart)
            .catch(err => {
                alert(err);
            })
    };

    decreaseCount = (number) => {
        const {cart} = this.state;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].number === number && cart[i].count > 1) {
                cart[i].count--;
                break;
            }
        }
        this.setState({cart});
        updateCart(cart)
            .catch(err => {
                alert(err);
            })
    };

    hideLoader = () => {
        this.setState({loading: false});
    };

    checkout = () => {
        let result = confirm("Do you really want to buy it?");
        if (result) {
            clearCart()
                .then(() => {
                    location.reload();
                })
                .catch(err => {
                    alert(err);
                })
        }
    };

    render() {
        const {loading, user} = this.state;
        const {cart} = user;
        const isEmpty = cart.length === 0;
        let total = 0;
        if (loading) {
            return (
                <h1>Loading...</h1>
            )
        }
        const {items} = this.state;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].count * items[i].price;
        }
        return (
            <DocumentTitle title='MyShop | Cart'>
                <div>
                    <Header user={user}/>
                    <div>
                        <h1>Cart Page</h1>
                        {
                            isEmpty
                                ? <h2>Cart is empty!</h2>
                                : (
                                    <div>
                                        <div className={style.cartPage}>
                                            <table className={style.cart}>
                                                <thead>
                                                    <tr>
                                                        <td>№</td>
                                                        <td>Name</td>
                                                        <td>Price</td>
                                                        <td>Count</td>
                                                        <td>Total</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        items.map((item, key) => {
                                                            return <CartItem key={key} cart={cart[key]} item={item} increase={this.increaseCount} decrease={this.decreaseCount}/>
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <span className={style.total}>{`Total: ${total}$`}</span>
                                        <button onClick={this.checkout} className={style.button}>Checkout!</button>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}