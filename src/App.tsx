import React from 'react';
import './App.css';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {MyNavbar} from "./MyNavbar";
import {NewsArticleView} from "./NewsArticleView";
import {Timer} from "./Timer";
import {Clicker} from "./Clicker";

/**
 * Класс для данных про новость.
 */
export class NewsArticle {

    title: string;

    shortText: string;

    image: string;

    constructor(title: string, shortText: string, image: string) {
        this.title = title;
        this.shortText = shortText;
        this.image = image;
    }
}

/**
 * Класс для данных о профиле пользователя
 */
class Person {

    firstName: string;

    secondName: string;

    constructor(firstName: string, secondName: string) {
        this.firstName = firstName;
        this.secondName = secondName;
    }
}

function App() {
    // Как взаимодействуют сервер, фронтенд и база данных
    // DB <-> Backend <-> Frontend

    // Обычная функция
    function foobar(idx: number) {
        console.log("asdasd");
        return idx + 1;
    }

    // Стрелочная функция, которая ведёт себя так же как обычная (но запись немного удобнее)
    let foobar2 = (idx: number) => {
        console.log("asdasd");
        return idx + 1;
    };

    let array = [1, 2, 3];

    // Пример использования функции map (для получения массива, где каждый элемент в два раза больше, чем в оригинальном)
    let arrayX2 = array.map(value => value * 2);


    // Создаём фейковые данные (mock'и)
    let article1 = new NewsArticle(
        "Lorem ipsum",
        "asdasdsadasd",
        "https://engineering.fb.com/wp-content/uploads/2016/09/gjak3qbrgsjmr1afaaaaaada9cc2bj0jaaab.jpg"
    );

    let article2 = new NewsArticle(
        "Foo bar",
        "asdasdaslkdfgl;kdfgkdfjgkldfjgv",
        "https://engineering.fb.com/wp-content/uploads/2016/09/gjak3qbrgsjmr1afaaaaaada9cc2bj0jaaab.jpg"
    );

    let article3 = new NewsArticle(
        "Foo bar 123123123",
        "asdasdaslkdfgl;kdfgkdfjgkldfjgv",
        "https://engineering.fb.com/wp-content/uploads/2016/09/gjak3qbrgsjmr1afaaaaaada9cc2bj0jaaab.jpg"
    );

    // как бы мы это делали с настоящим сервером
    // let articles: NewsArticle[] = requestToServer();

    // Список всех новостей
    let articles = [article1, article2, article3];


    // Создаём фейкового пользователя (снова mock)
    let person = new Person("Ivan", "Ivanov");

    function doSomethingOnClick() {
        console.log("asd");
        alert("Hello!");
    }

    return (
        <div>
            {/*Компонента с хедером страницы*/}
            <MyNavbar/>

            <Container>

                {/*Вывод данных о профиле пользователя (используем фигурные скобки!)*/}
                <span>{person.firstName} {person.secondName}</span>

                <Clicker/>

                <Row>
                    {/*С помощью функции map превращаем каждую новость в компоненту NewsArticleView*/}
                    {
                        articles.map(element => {
                            return (
                                <NewsArticleView article={element}/>
                            );
                        })
                    }
                </Row>

                <br/>

                <Row>
                    <Col>
                        <Button variant={"primary"} onClick={() => doSomethingOnClick()}>test</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
