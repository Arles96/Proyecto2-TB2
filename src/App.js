import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu'
import FormPuesto from './components/FormPuesto/FormPuesto'

class App extends Component {

  constructor(){
    super()
    this.menuExtend=this.menuExtend.bind(this)
  }

  menuExtend(){
    console.log("boo")
  }

  render() {
    return (
      <div className="App">
          <Menu event={this.menuExtend} />
          <FormPuesto />
      </div>
    );
  }
}

export default App;
