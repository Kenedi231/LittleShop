import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';
import style from '../styles/auth.less';
import AuthForm from './auth/AuthForm';
import Header from './Header';

export default class Auth extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <DocumentTitle title='MyShop | Authorization'>
                <div>
                    <Header user={this.props.user}/>
                    <div className={style.authForm}>
                        <AuthForm />
                    </div>
                </div>
            </DocumentTitle>
        )
    }
}