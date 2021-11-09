import {Button, Card, Col} from "react-bootstrap";
import React from "react";
import {NewsArticle} from "./App";

/**
 * Описание входных аргументов для NewsArticleView (компонента для отображения новости)
 */
interface NewsArticleViewProps {
    // Новость.
    article: NewsArticle;
}

/**
 * Компонента для отображения новости
 *
 * @param props Входные аргументы компоненты
 * @constructor
 */
export function NewsArticleView(props: NewsArticleViewProps) {
    // Из входящих аргументов получаем новость
    let article = props.article;

    // Возвращаем вёрстку для компоненты
    return (
        <Col>
            <Card style={{width: '18rem'}}>
                {/*Подставляем поля из новости в вёрстку*/}
                <Card.Img variant="top" src={article.image}/>
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.shortText}</Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}
