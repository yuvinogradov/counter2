import React, {ChangeEvent} from "react";
import s from './Input.module.css'

type ButtonPropsType = {
    title: string
    action: void
    disabled: boolean
}

export default function Input(props: any) {


    return <div className={s.input}>
        <div className={s.title}>{props.title}</div>
        <input type="number" value={props.val} onChange={props.action}></input>
    </div>

}

