import React, {Component} from 'react';
import style from '../../styles/form.less';
import Button from '../uikit/Button';
import createUser from '../../services/auth/request/registerUser';
import checkInput from '../../services/auth/checks/checkRegisterInput';

export default class SignUp extends Component {
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
        createUser()
            .then((res) => {
                if (res.code === 1) {
                    alert(res.message);
                } else {
                    location.href = '/';
                }
            })
            .catch(err => {
                alert(err);
            })
    };

    render() {
        return (
            <form onSubmit={this.handleClick} id='signUp' className={style.form}>
                <div className={style.inputForm}>
                    <input onChange={this.checkInput} type='text' id='login' className={style.inputText} required />
                    <label htmlFor='login' className={style.inputLabel}>Login</label>
                </div>
                <div className={style.inputForm}>
                    <input onChange={this.checkInput} type='password' id='password' className={style.inputText} required />
                    <label htmlFor='password' className={style.inputLabel}>Password</label>
                </div>
                <div className={style.inputForm}>
                    <input onChange={this.checkInput} type='password' id='repeatPass' className={style.inputText} required />
                    <label id='labelRepeatPass' htmlFor='repeatPass' className={style.inputLabel}>Repeat password</label>
                </div>
                <div className={style.inputForm}>
                    <input onChange={this.checkInput} type='text' id='e-mail' className={style.inputText} required />
                    <label id='labelEmail' htmlFor='e-mail' className={style.inputLabel}>E-Mail</label>
                </div>
                <Button text='Sign Up' active={this.state.buttonActive}/>
            </form>
        )
    }
}