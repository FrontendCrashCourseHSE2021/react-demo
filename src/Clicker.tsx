import {Button} from "react-bootstrap";
import {useState} from "react";


/**
 * Компонента кликер (счётчик кликов на кнопку)
 * @constructor
 */
export function Clicker() {
    // Состояние и функция для изменения состояния
    let [clicked, changeClicked] = useState(0);

    // Возвращаем вёрстку
    return (
        <div>
            {/*Рисуем сам счётчик кликов*/}
            <h1>Clicked: {clicked}</h1>

            {/*Рисуем кнопку, которая меняет состояние (вызывает функцию для изменения) увеличивая состояние на 1*/}
            <Button variant={"danger"} onClick={() => changeClicked(clicked + 1)}>Click me</Button>
        </div>
    );
}
