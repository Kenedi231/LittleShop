import React from 'react';
import {Link} from "react-router-dom";
import style from '../../styles/header.less';
import logout from '../../services/auth/request/logout';

const click = () => {
    logout()
        .then(() => {
            location.href = '/';
        })
        .catch(err => {
            alert(err);
        })
};

function User(props) {
    return (
        <li className={style.parent}>
            <Link to=''>{props.user.login}</Link>
            <ul className={style.menu}>
                {props.user.role === 'Admin' ? <li><Link to='/item/add'>Add Item</Link></li>: null}
                <li><Link onClick={click} to=''>Log Out</Link></li>
            </ul>
        </li>
    )
}

function AuthLink(props){
    return props.user.role === undefined ? <li><Link to="/auth">Sign In</Link></li> : <User user={props.user} />
}

export default AuthLink;