import React from 'react';
import './App.css';
import Switchboard from './components/Switchboard';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

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
