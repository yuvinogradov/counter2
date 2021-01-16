import React, {ChangeEvent, useState} from 'react';
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
        if (+e.currentTarget.value <= state.currentStartVal) {
            newState.settingsError = true;
            newState.counterMessage = 'Incorrect value'
        } else {
            newState.settingsError = false;
            newState.counterMessage = "Enter values and press 'SET'"
        }
        setState(newState)
    }
    const changeMin = (e: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            currentStartVal: e.currentTarget.value,
            editMode: true,
            counterMessage: "Enter values and press 'SET'"
        })
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
            <Input title={'Max value'} val={state.currentMaxVal} action={changeMax}/>
            <Input title={'Start value'} val={state.currentStartVal} action={changeMin}/>
        </div>
        <div className={`${s.buttonsArea} ${s.borders}`}>
            <Button text='SET' action={setLimits} disabled={!state.editMode}/>
        </div>
    </div>
}

// export default CounterSettings;
