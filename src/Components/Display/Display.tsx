import React from 'react';
import s from './Display.module.css'

export type DisplayPropsType = {
    text: string
    maxCounter: number
}

function Display(props: any) {
    const {counter, maxValue, editMode, counterMessage, settingsError} = props.state;

    return <div
        className={`${s.display} ${editMode ? s.message : s.counter} 
                    ${((counter >= maxValue && !editMode) || settingsError) ? s.max : ''}
                    `}>
        {editMode ? counterMessage : counter}
    </div>
    // return <div className={`${s.display} ${props.counter >= props.maxCounter ? s.max : ''}`}>
    //      {props.counter}
    //  </div>

}

export default Display;