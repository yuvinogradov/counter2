import React, {useState} from 'react';
import s from './Counter.module.css'
import Display from "../Display/Display";
import Button from "../Button/Button";


// const MIN = 0;
// const MAX = 7;

function Counter(props: any) {
    let {state, setState} = props

    function counterIncrement() {
        setState({...state, counter: state.counter + 1})
    }

    function counterReset() {
        setState({...state, counter: state.startValue})
    }

    //debugger

    return <div className={`${s.counter} ${s.borders}`}>
        <Display state={state}/>
        <div className={`${s.buttonsArea} ${s.borders}`}>
            <Button text='INC' action={counterIncrement} disabled={state.counter >= state.maxValue || state.editMode}/>
            <Button text='RESET' action={counterReset}
                    disabled={(state.counter === state.startValue || state.editMode)}/>
        </div>

    </div>

}

export default Counter;