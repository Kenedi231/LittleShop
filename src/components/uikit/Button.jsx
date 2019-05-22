import React from 'react';
import style from "../../styles/form.less";

function Button(props) {
    if (!props.active) {
        return <button className={style.button} disabled>{props.text}</button>
    }
    return <button className={style.button}>{props.text}</button>
}

export default Button;