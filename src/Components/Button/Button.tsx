import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    text: string
    action: () => void
    disabled: boolean
}

function buttonClick(text: string) {
    alert(text);
}

function Button(props: ButtonPropsType) {

    return <button className={`${s.button} ${props.disabled ? s.disabled : ""}`}
                   onClick={props.action} disabled={props.disabled}>
        {props.text}
    </button>


}

export default Button;