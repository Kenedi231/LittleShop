import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';

export default class Cart extends Component {
    render() {
        return (
            <DocumentTitle title='MyShop | Cart'>
                <div>
                    <Header user={this.props.user}/>
                    <h1>Cart Page</h1>
                </div>
            </DocumentTitle>
        );
    }
}