import React, {Component} from 'react';
import Header from "./Header";
import getItem from "../services/item/request/getItem";
import DocumentTitle from 'react-document-title';
import NotFound from "./NotFound";
import style from '../styles/itemPage.less';
import addItemToCart from "../services/item/request/addItemToCart";

export default class ItemPage extends Component {
    constructor(props) {
        super(props);

        this.state ={
            item: null,
            loading: true,
            match: props.match,
        };
    }

    componentDidMount() {
        getItem(this.state.match.params.number)
            .then(res => {
                this.setState({item: res.item})
            })
            .then(this.hideLoader)
            .catch(err => console.log(err))
    }

    hideLoader = () => {
        this.setState({loading: false});
    };

    button = () => {
        addItemToCart(this.state.item.number)
            .then(res => {
                if (res.code) {
                    alert(res.message);
                }
                location.reload();
            })
            .catch(err => {
                alert(err);
            });
    };

    render() {
        const {loading, item} = this.state;
        const {user} = this.props;
        if (loading) return (<h1>Loading...</h1>);
        if (item === null) return (<NotFound />);
        return (
            <DocumentTitle title={`MyShop | ${item.name}`}>
                <div>
                    <Header user={user} />
                    <div className={style.itemPage}>
                        <h1>{item.name}</h1>
                        <img src={item.image} alt={item.name} />
                        <div className={style.price}>
                            <span>{`${item.price}$`}</span>
                            {user.role !== undefined ? <button onClick={this.button}>Add in the cart</button> : <p>Log in to add to cart</p>}
                        </div>
                        <p>{item.Description}</p>
                    </div>
                </div>
            </DocumentTitle>
        )
    }
}