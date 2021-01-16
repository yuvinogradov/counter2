import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import CounterSettings from "./Components/CounterSettings/CounterSettings";
import Button from "./Components/Button/Button";


//       Задача: сделать счетчик с настройками.
//       - Блок настроек позволяет ввести максимальное значение и стартовое: max value/start value
//       - сделать проверку на правильный ввод: при неправильном вводе:
//            1) подсвечивается поле ввода,
//            2) выводится сообщение, вместо значения счетчика ("Incorrect value"),
//            3) дизэйблится кнопка Set
//
//       - при установке допустимого значения
//            1) выводится сообщение "enter values and press 'set' ",
//            2) раздизэйбливается кнопка Set
//            3) кнопки счетчика дизейблятся

//       Проверки: старт меньше нуля, максимум меньше или равно старту
//       Сохранять наши настройки в ЛОКАЛ СТОРЭЙДЖЕ.
//       Разбивать на компоненты. Кнопки - одна компонента, примененная трижды

const MAX = 5;
const MIN = 0;

function App() {
    let [state, setState] = useState(
        {
            maxValue: MAX,
            startValue: MIN,
            currentMaxVal: MAX,
            currentStartVal: MIN,
            counter: MIN,
            settingsError: false,
            editMode: false,
            counterMessage: "",
        }
    )


    return (
        <div className="App">
            <header className="App-header">
                <CounterSettings state={state} setState={setState} />
                <Counter state={state} setState={setState}/>
            </header>
        </div>
    );
}

export default App;
