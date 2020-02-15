import React from 'react';

import Header from './components/header/header';
import Intro from './components/intro/intro';
import logo from './DuolingoBird.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <body className={'App-Body'}>
        <Intro></Intro>
        <Intro></Intro>
        <img src={logo} alt="logo" />
      </body>
    </div>
  );
}

export default App;
