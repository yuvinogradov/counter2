import React from "react";
import s from './Input.module.css'

type ButtonPropsType = {
    title: string
    action: void
    disabled: boolean
}

export default function Input(props: any) {
    return <div className={s.input}>
        <div className={s.title}>{props.title}</div>
        <div>        <input type="number" value={props.val} ></input></div>
        {/*<span><input type='number'>{props.value}</input> </span>*/}
    </div>

}

