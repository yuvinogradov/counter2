import React, {useState} from 'react';
import s from './Counter.module.css'
import Display from "../Display/Display";
import Button from "../Button/Button";


const MIN = 0;
const MAX = 7;

function Counter() {
    let [counter, setCounter] = useState(0);

    function counterIncrement() {
        setCounter(counter + 1)
    }

    function counterReset() {
        setCounter(0)
    }

    return <div className={`${s.counter} ${s.borders}`}>
        <Display counter={counter} maxCounter={MAX}/>
        <div className={`${s.buttonsArea} ${s.borders}`}>
            <Button text='INC' action={counterIncrement} disabled={counter >= MAX}/>
            <Button text='RESET' action={counterReset} disabled={(counter === MIN)}/>
        </div>

    </div>

}

export default Counter;