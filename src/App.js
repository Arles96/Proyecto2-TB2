import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu'
import FormPuesto from './components/FormPuesto/FormPuesto'
import CreateEmpresa from './components/CreateEmpresa/CreateEmpresa'

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
          <CreateEmpresa />
      </div>
    );
  }
}

export default App;
