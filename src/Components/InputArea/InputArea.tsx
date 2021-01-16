import React from 'react';
import s from './InputArea.module.css'
import Input from "../Input/Input";

export type DisplayPropsType = {
    counter: number
    maxCounter: number
}

function InputArea(props: DisplayPropsType) {
    return <div className={`${s.inputArea} ${props.counter >= props.maxCounter ? s.max : ''}`}>
        {/*<input type="number" id="quantity" name="quantity" min="1" max="5"></input>*/}
        {/*<input type="number" id="quantity" name="quantity" min="1" max="5"></input>*/}
        <Input title={'Max value'} val={5}/>
        <Input title={'Start value'} val={0}/>
    </div>

}

export default InputArea;