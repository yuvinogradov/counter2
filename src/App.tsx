import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import CounterSettings from "./Components/CounterSettings/CounterSettings";


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

//    ПЕРЕДЕЛАТЬ:
//    - ПЕРЕДАВАТЬ В КОМПОНЕНТЫ ТОЛЬКО НУЖНУЮ ЧАСТЬ СТЕЙТА
//    - СОХРАНЯТЬ В ЛОКАЛСТОРЕДЖЕ НЕ НЕСКОЛЬКО ПЕРЕМЕННЫХ, А ОДИН ОБЪЕКТ, ИСПОЛЬЗУЯ json-toString



function App() {

    const MAX = 5;
    const MIN = 0;

    let [state, setState] = useState<any>(
        {
            maxValue: +(localStorage.getItem('maxValue') || MAX),
            startValue: +(localStorage.getItem('startValue') || MIN),
            currentMaxVal: +(localStorage.getItem('maxValue') || MAX),
            currentStartVal: +(localStorage.getItem('startValue') || MIN),
            counter: +(localStorage.getItem('counter') || MIN),
            settingsError: false,
            editMode: false,
            counterMessage: "",
        }
    )
    localStorage.setItem('maxValue', ''+state.maxValue);
    localStorage.setItem('startValue', ''+state.startValue);
    localStorage.setItem('counter', ''+state.counter);


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
