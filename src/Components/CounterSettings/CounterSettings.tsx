import React, {useState} from 'react';
import s from './CounterSettings.module.css'
import Display from "../Display/Display";
import Button from "../Button/Button";


const MIN = 0;
const MAX = 7;

export default function CounterSettings() {
    let [counter, setCounter] = useState(0);

    function counterIncrement() {
        setCounter(counter + 1)
    }

    function counterReset() {
        setCounter(0)
    }

    return <div className={`${s.counterSettingsBox} ${s.borders}`}>
        <Display counter={counter} maxCounter={MAX}/>
        <div className={`${s.buttonsArea} ${s.borders}`}>
            <Button text='SET' action={counterIncrement} disabled={counter >= MAX}/>
        </div>

    </div>

}

// export default CounterSettings;
