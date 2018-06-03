import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import SubMenu from './components/SubMenu/SubMenu'
import FormPuesto from './components/FormPuesto/FormPuesto'
import CreateEmpresa from './components/CreateEmpresa/CreateEmpresa'
import Home from './components/Home/Home'

class App extends Component {

  constructor(){
    super()
    this.state = {
      submenu : false,
      login : false
    }
    this.menuExtend=this.menuExtend.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.renderMenu = this.renderMenu.bind(this)
  }

  menuExtend(){
    this.setState({
      submenu : true
    })
  }

  closeMenu(){
    this.setState({
      submenu : false
    })
  }

  renderMenu(){
    if (this.state.submenu){
      return (
        <SubMenu login={this.state.login} event={this.closeMenu} />
      )
    }
  }

  render() {
    return (
      <div className="App">
          <Menu event={this.menuExtend} />
          <Home />
          {this.renderMenu()}
      </div>
    );
  }
}

export default App;
