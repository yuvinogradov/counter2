import React from "react";
import s from './Input.module.css'

type InputPropsType = {

    title: string
    val: string
    action: () => void
    error: boolean
}

export default function Input(props: any) {


    return <div className={s.input}>
        <div className={s.title}>{props.title}</div>
        <input type="number" value={props.val} onChange={props.action} className={props.error ? s.error : ''}/>
    </div>

}

