import React, {Component} from 'react';
import style from '../../styles/form.less';
import checkInput from '../../services/auth/checks/checkLoginInput';
import Button from '../uikit/Button';
import loginUser from '../../services/auth/request/loginUser';

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonActive: false,
        }
    }

    checkInput = () => {
        const result = checkInput();
        this.setState({buttonActive: result});
    };

    handleClick = (event) => {
        event.preventDefault();
        this.showLoader();
        loginUser()
            .then((res) => {
                console.log(res);
                if (res.res) {
                    location.href = '/';
                } else {
                    alert("Wrongs login or password");
                }
            })
            .then(this.hideLoader)
            .catch(err => {
                alert(err);
            })
    };

    showLoader = () => {
        this.setState({
            loading: true,
        })
    };

    hideLoader = () => {
        this.setState({
            loading: false,
        })
    };

    render() {
        const {buttonActive} = this.state;
        return (
            <form onSubmit={this.handleClick} id='signIn' className={style.form}>
                <div className={style.inputForm}>
                    <input onChange={this.checkInput} type='text' id='login' className={style.inputText} required />
                    <label htmlFor='login' className={style.inputLabel}>Login</label>
                </div>
                <div className={style.inputForm}>
                    <input onChange={this.checkInput} type='password' id='password' className={style.inputText} required />
                    <label htmlFor='password' className={style.inputLabel}>Password</label>
                </div>
                <Button text='Sign In' active={buttonActive} />
            </form>
        );
    }
}