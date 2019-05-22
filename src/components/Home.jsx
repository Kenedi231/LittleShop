import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import Item from './Item';
import style from '../styles/item.less';
import getItems from "../services/item/request/getItems";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: null,
        }
    }

    componentDidMount() {
        getItems().then(res => {
            this.setState({items: res.items});
        })
    }

    render() {
        const {items} = this.state;
        const {user} = this.props;
        return (
            <DocumentTitle title='MyShop | Home Page'>
                <div>
                    <Header user={user} />
                    <h1>Home Page</h1>
                    <div className={style.items}>
                        {
                            items !== null ? items.map((item, key) => <Item item={item} key={key} user={user} />) : ''
                        }
                    </div>
                </div>
            </DocumentTitle>
        )
    }
}