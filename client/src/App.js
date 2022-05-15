import React from 'react';
import './App.css';
import Switchboard from './components/Switchboard';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import io from 'socket.io-client';
import { message } from 'antd'

const socket = io.connect('http://localhost:8000');

socket.on("book_alert", (title) =>{
  message.success(title.message)
})

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Switchboard />
    </div>
  );
}

export default App;
