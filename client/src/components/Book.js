import {React} from 'react';
import { Row, Col, Button, Divider } from 'antd';
import io from 'socket.io-client';
import './Book.css'
const socket = io.connect('http://localhost:8000');

function Book(props){

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
                    //socket.io emits to server once book is successfuly saved
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
        saveOrDeleteButton = <Button className = "book-button" props = {props} onClick={saveBook} type="primary">Save</Button>
    } else {
        saveOrDeleteButton = <Button className = "book-button" props = {props.id} onClick={deleteBook} type="danger">Delete</Button>
    }

    return(
        <article className='book-div'>
            
        <Divider />
            <Row>
                <Col className = 'book-heading-div' span ={8} offset = {10}>
                <h2>
                    {props.title}
                </h2>
                <h3>
                    Written by {props.authors.map((author, i, authors) =>{
                     if(authors.length === 0){
                        return `No Specified Author`
                    }
                    if( authors.length > 1 && i + 1 === authors.length){
                        return `and ${author}`
                    }
                    if(authors.length === 1 || authors.length === 2){
                        return ` ${author} `
                    }
                    else{
                        return `${author}, `
                    }
                    })}
                </h3>
                </Col>
            </Row>
                <Row className = "top-book-div">
                    <Col span = {1}>
                        <img src = {props.imgSrc} alt="Book Cover"></img>
                    </Col>
                    <Col span = {20}>
                        <p>{props.description}</p>
                    </Col>
                </Row>
                <Row>
                <Col className = 'button-div' span = {4} offset = {20}>
                    <Button type="link" href = {props.link}>View</Button>
                    {saveOrDeleteButton}
                </Col>
                </Row>
        </article>
    )
}

export default Book;