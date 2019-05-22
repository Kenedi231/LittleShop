import React, {Component} from 'react';
import style from '../../styles/form.less';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: true,
        }
    }

    tapLogin = () => {
        this.setState({login: true});
    };

    tapRegister = () => {
        this.setState({login: false});
    };

    render() {
        const {login} = this.state;
        const form = login ? <SignIn /> : <SignUp />;
        return (
            <div>
                <div className={style.switcher}>
                    <p className={login ? style.active : null} onClick={this.tapLogin}>Sign In</p>
                    <p className={!login ? style.active : null} onClick={this.tapRegister}>Sign Up</p>
                </div>
                {form}
            </div>
        )
    }
}