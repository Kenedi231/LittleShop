import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from '../styles/header.less';
import AuthLink from './uikit/AuthLink';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;
        return (
            <div>
                <ul className={style.list}>
                    <li><Link to="/">Home</Link></li>
                    {user.role !== undefined ? <li><Link to="/cart">Cart</Link></li> : null}
                    <AuthLink user={this.props.user} />
                </ul>
            </div>
        );
    }
}