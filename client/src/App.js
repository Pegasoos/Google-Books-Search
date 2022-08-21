import React from 'react';
import './App.css';
import Switchboard from './components/Switchboard';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import io from 'socket.io-client';
import { message } from 'antd'

// Socket.io listens for book_aler from server to display message
const socket = io.connect(`http://${window.location.hostname}:3000`);

socket.on("book_alert", (title) =>{
  message.success(title.message)
})
// End Socket.io

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
