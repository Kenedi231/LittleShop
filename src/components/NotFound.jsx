import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import style from '../styles/notfound.less';

export default class NotFound extends Component {
    render() {
        return (
            <DocumentTitle title='MyShop | Not Found Page'>
                <div className={style.content}>
                    <h1>404</h1>
                    <h2>Not Found Page</h2>
                    <Link to='/'>Go to Home Page</Link>
                </div>
            </DocumentTitle>
        );
    }
}