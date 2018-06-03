import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import Solicitud from './components/Solicitud/Solicitud'
import SubMenu from './components/SubMenu/SubMenu'
import FormPuesto from './components/FormPuesto/FormPuesto'
import CreateEmpresa from './components/CreateEmpresa/CreateEmpresa'
import Home from './components/Home/Home'

class App extends Component {

  constructor(){
    super()
    this.state = {
      submenu : false,
      login : false,
      home : true,
      empresas : false,
      registrarS : false,
      registrarE : false,
      puesto : false,
      solicitud : false
    }
    this.menuExtend=this.menuExtend.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.renderMenu = this.renderMenu.bind(this)
    this.handleEmpresa = this.handleEmpresa.bind(this)
    this.handleHome = this.handleHome.bind(this)
    this.handlePuesto = this.handlePuesto.bind(this)
    this.handleRegistrarE = this.handleRegistrarE.bind(this)
    this.handleRegistrarS = this.handleRegistrarS.bind(this)
    this.handleSolicitud = this.handleSolicitud.bind(this)
    this.renderContainer = this.renderContainer.bind(this)
  }

  //Funcion para cambiar el estado de submenu true
  menuExtend(){
    this.setState({
      submenu : true
    })
  }

  //Funcion para cambiar el estado de submenu a false
  closeMenu(){
    this.setState({
      submenu : false
    })
  }

  //Funcion para renderizar el componente SubMenu
  renderMenu(){
    if (this.state.submenu){
      return (
        <SubMenu 
          login={this.state.login} 
          event={this.closeMenu} 
          home={this.handleHome}
          empresa={this.handleEmpresa}
          registrarS={this.handleRegistrarS}
          registrarE={this.handleRegistrarE}
          puesto={this.handlePuesto}
          solicitud={this.handleSolicitud}
        />
      )
    }
  }

  //Funcion para cambiar de estado el home
  handleHome(){
    this.setState({
      home : true,
      empresas : false,
      registrarS : false,
      registrarE : false,
      puesto : false,
      solicitud : false
    })
    console.log("Home")
  }

  //Funcion que cambia de estado empresa
  handleEmpresa(){
    this.setState({
      home : false,
      empresas : true,
      registrarS : false,
      registrarE : false,
      puesto : false,
      solicitud : false
    })
  }

  //Funcion que cambia de estado registrarS
  handleRegistrarS(){
    this.setState({
      home : false,
      empresas : false,
      registrarS : true,
      registrarE : false,
      puesto : false,
      solicitud : false
    })
  }

  //Funcion para cambiar de estado registrarE
  handleRegistrarE(){
    this.setState({
      home : false,
      empresas : false,
      registrarS : false,
      registrarE : true,
      puesto : false,
      solicitud : false
    })
  }

  //Funcion para cambiar de estado Puesto
  handlePuesto(){
    this.setState({
      home : false,
      empresas : false,
      registrarS : false,
      registrarE : false,
      puesto : true,
      solicitud : false
    })
  }

  //Funcion para cambiar de estado solicitud
  handleSolicitud(){
    this.setState({
      home : false,
      empresas : false,
      registrarS : false,
      registrarE : false,
      puesto : false,
      solicitud : true
    })
  }

  //Funcion para renderizar el contenido que corresponde
  renderContainer(){
    if (this.state.home){
      return (
        <Home />
      )
    }else if (this.state.empresas){
      return (
        <div>Aqui va el componente que se mira todas las empresas</div>
      )
    }else if (this.state.registrarS) {
      return (
        <Solicitud />
      )
    }else if (this.state.registrarE){
      return (
        <CreateEmpresa />
      )
    }else if (this.state.puesto){
      return (
        <FormPuesto />
      )
    }else {
      return (
        <div>Aqui va el Componente que mira todas las solicitudes de la empresa logueada</div>
      )
    }
  }

  render() {
    return (
      <div className="App">
          <Menu event={this.menuExtend} />
          {this.renderContainer()}
          {this.renderMenu()}
      </div>
    );
  }
}

export default App;
