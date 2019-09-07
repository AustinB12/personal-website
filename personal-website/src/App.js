import React from 'react';
import logo from './DuolingoBird.svg';
import bnb from './BadNewsBears.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello! My name is Austin Baird, and I'm a web developer!</h1>
        <img className="App-logo" src={logo} alt="logo" />
        <img src={bnb} alt="bnb" />
      </header>
    </div>
  );
}

export default App;
