import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu'
import Solicitud from './components/Solicitud/Solicitud'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Menu/>
          <Solicitud/>
      </div>
    );
  }
}

export default App;
