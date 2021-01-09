import React from 'react';
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
//              1) выводится сообщение "enter values and press 'set' ",
//              2) раздизэйбливается кнопка Set

//       Проверки: старт меньше нуля, максимум меньше или равно старту
//       Сохранять наши настройки в ЛОКАЛ СТОРЭЙДЖЕ.
//       Разбивать на компоненты. Кнопки - одна компонента, примененная трижды


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <CounterSettings/>
                <Counter/>
            </header>
        </div>
    );
}

export default App;
