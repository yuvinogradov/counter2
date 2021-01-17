import React, {ChangeEvent} from 'react';
import s from './CounterSettings.module.css'
import Button from "../Button/Button";
import Input from "../Input/Input";


export default function CounterSettings(props: any) {
    const {state, setState} = props;


    const changeMax = (e: ChangeEvent<HTMLInputElement>) => {
        const newState = {
            ...state,
            currentMaxVal: e.currentTarget.value,
            editMode: true,
        }
        if (+e.currentTarget.value <= state.currentStartVal || state.currentStartVal < 0) {
            newState.settingsError = true;
            newState.counterMessage = 'Incorrect value'
        } else {
            newState.settingsError = false;
            newState.counterMessage = "Enter values and press 'SET'"
        }
        setState(newState)
    }
    const changeMin = (e: ChangeEvent<HTMLInputElement>) => {
        const newState = {
            ...state,
            currentStartVal: e.currentTarget.value,
            editMode: true,
        }
        if (+e.currentTarget.value >= state.currentMaxVal || +e.currentTarget.value < 0) {
            newState.settingsError = true;
            newState.counterMessage = 'Incorrect value'
        } else {
            newState.settingsError = false;
            newState.counterMessage = "Enter values and press 'SET'"
        }
        setState(newState)
    }
    const setLimits = () => {
        // решил не сбрасывать счетчик в соответствии с новыми значениями maxValue и startValue
        setState({
            ...state,
            maxValue: +state.currentMaxVal,
            startValue: +state.currentStartVal,
            editMode: false
        })
    }

    return <div className={`${s.counterSettingsBox} ${s.borders}`}>
        <div className={s.inputArea}>
            <Input title={'Max value'} val={state.currentMaxVal} action={changeMax}
                   error={`${ state.currentStartVal >= state.currentMaxVal ? 'true' : ''}`}/>
            <Input title={'Start value'} val={state.currentStartVal} action={changeMin}
                   error={`${state.currentStartVal < 0 || state.currentStartVal >= state.currentMaxVal ? 'true' : ''}`}/>
        </div>
        <div className={`${s.buttonsArea} ${s.borders}`}>
            <Button text='SET' action={setLimits} disabled={!state.editMode || state.settingsError}/>
        </div>
    </div>
}

// export default CounterSettings;
