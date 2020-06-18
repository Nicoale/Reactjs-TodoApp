import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Register from './Register'
import { useState } from 'react';

function App() {
 
 

  return (
    <div className='app'>
      <h1>Hello there</h1>
      <Register name="ashley@example.com"/> 
      <Register password="Stringpassword12"/> 
      <Register confirm password="Stringpassword12"/> 
    </div>
   
  );
}

export default App;








































































































// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div>