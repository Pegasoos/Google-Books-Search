import {React, useEffect} from 'react';
import { Row, Col, Button, Divider } from 'antd';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8000');

function Book(props){

        socket.on("book_alert", (message) =>{
            alert(message)
        })

   const sendMessage = (title) =>{
    socket.emit("save_book", {message: `${title} has been saved to the shelf!`})
   }
    const saveBook = async () =>{
        try {
            const response = await fetch('/api/books',{
                method:'POST',
                body: JSON.stringify(props),
                headers: {'Content-Type':'application/json'}
                });
                if(response.ok){
                    //add socket.io call here
                    sendMessage(props.title)
                    console.log("Book Shelved!")
                }
                console.log(JSON.stringify(props))
        } catch (error) {
            console.log(error)
        }
    }

    const deleteBook = async (e) =>{
        try {
            const response = await fetch(`/api/books/${props.id}`, {
                method:"DELETE",
                headers: {'Content-Type':'application/json'}
            });
            if(response.ok){
                console.log("Book Removed")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const saveOrSearch = props.header;
    let saveOrDeleteButton;

    if(saveOrSearch === "Results"){
        saveOrDeleteButton = <Button props = {props} onClick={saveBook}>Save</Button>
    } else {
        saveOrDeleteButton = <Button props = {props.id} onClick={deleteBook}>Delete</Button>
    }

    return(
        <article className='book-div'>
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
                    <Button href = {props.link}>View</Button>
                    {saveOrDeleteButton}
                </Col>
            </Row>
            </header>
        <Divider />
            <section>
                <Row>
                    <Col span = {4}>
                        <img src = {props.imgSrc} alt="Book Cover"></img>
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