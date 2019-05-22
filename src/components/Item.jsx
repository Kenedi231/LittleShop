import React, {Component} from 'react';
import style from '../styles/item.less';
import {Link} from 'react-router-dom'

export default class Item extends Component {
    constructor(props) {
        super(props);

    }

    button = () => {
        alert('hi');
    };

    render() {
        const {item, user} = this.props;
        const path = `/item/${item.number}`;
        return (
            <div className={style.item}>
                <div className={style.info}>
                    <Link to={path}>
                        <img src={item.image} alt={item.name} />
                    </Link>
                    <h2>{item.name}</h2>
                    <span>{`${item.price}$`}</span>
                    <p>{item.shortDescription}</p>
                </div>
                {user.role !== undefined ? <button onClick={this.button}>Add in the cart</button> : null}
            </div>
        )
    }
}