import React from 'react';
import { Row, Col, Button, Divider } from 'antd';


function Book(props){
    return(
        <article class = 'book-div'>
            <header>
            <Row>
                <Col className = 'book-heading-div' span = {6}>
                <h1>
                    {props.title}
                </h1>
                <h3>
                    Written by {props.authors}
                </h3>
                </Col>
                <Col className = 'button-div' span = {4} offset = {14}>
                    <Button>View</Button>
                    <Button>Save</Button>
                </Col>
            </Row>
            </header>
        <Divider />
            <section>
                <Row>
                    <Col span = {4}>
                        <img src = {props.imgSrc}></img>
                    </Col>
                    <Col span = {20}>
                        <p>{props.description}</p>
                    </Col>
                </Row>
            </section>

        </article>
    )
}

export default Book;