import React from 'react';
import s from './Display.module.css'

export type DisplayPropsType = {
    counter: number
    maxCounter: number
}

function Display(props: DisplayPropsType) {
    return <div className={`${s.display} ${props.counter >= props.maxCounter ? s.max : ''}`}>
        {props.counter}
    </div>

}

export default Display;