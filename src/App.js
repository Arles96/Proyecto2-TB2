import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import Solicitud from './components/Solicitud/Solicitud'
import SubMenu from './components/SubMenu/SubMenu'
import FormPuesto from './components/FormPuesto/FormPuesto'
import CreateEmpresa from './components/CreateEmpresa/CreateEmpresa'
import Home from './components/Home/Home'
import {database} from 'firebase'
import ListaSolicitud from './components/ListaSolicitud/ListaSolicitud'
import ListaEmpresas from './components/ListaPuestos/ListaEmpresas'
import ListaPuestos from './components/ListaPuestos/ListaPuestos'


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
      solicitud : false,
      listP : false,
      cif : null
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
    this.registerEmpresa = this.registerEmpresa.bind(this)
    this.loginEmpresa = this.loginEmpresa.bind(this)
    this.handleSingUp = this.handleSingUp.bind(this)
    this.handleListPuesto = this.handleListPuesto.bind(this)
  }

  handleListPuesto(){
    this.setState({
      home : false,
      empresas : false,
      registrarS : false,
      registrarE : false,
      puesto : false,
      listP : true,
      solicitud : false
    })
  }

  handleSingUp(){
    this.setState({
      login : false,
      cif : null
    })
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
          listP={this.handleListPuesto}
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
      listP : false,
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
      listP : false,
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
      listP : false,
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
      listP : false,
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
      listP : false,
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
      listP : false,
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
        <div>
          <ListaEmpresas/>
        </div>
      )
    }else if (this.state.registrarS) {
      return (
        <Solicitud />
      )
    }else if (this.state.registrarE){
      return (
        <CreateEmpresa submit={this.registerEmpresa} />
      )
    }else if (this.state.puesto){
      return (
        <FormPuesto cif={this.state.cif} />
      )
    }else if (this.state.listP){
      return (
        <ListaPuestos checker={true} cif={this.state.cif} />
      )
    }else {
      return (
        <ListaSolicitud cif={this.state.cif} />
      )
    }
  }

  //Funcion para el formulario de inscribir empresa 
  registerEmpresa(e){
    e.preventDefault()
    database().ref(`/empresa/${e.target.cif.value}`).set({
      nombre : e.target.nombre.value,
      ingreso : e.target.ingreso.value,
      director : e.target.director.value,
      fecha : e.target.date.value,
      direccion : e.target.direccion.value
    })
    this.setState({
      login : true
    })
    alert("Se ha creado una empresa")
  }

  //Funcion para el login de la empresa
  loginEmpresa(e) {
    e.preventDefault()
    let cif = e.target.cif.value
    let pass = e.target.pass.value
    database().ref('/empresa').on('value', (snashop)=> {
      snashop.forEach(doc => {
          if (doc.key===cif && doc.val().ingreso===pass){
            this.setState({
              login : true,
              cif : doc.key
            })
            database()
          }
      })
    })
  }

  render() {
    return (
      <div className="App">
          <Menu 
            event={this.menuExtend} 
            login={this.loginEmpresa}
            checker={this.state.login}
            signup={this.handleSingUp}
          />
          {this.renderContainer()}
          {this.renderMenu()}
      </div>
    );
  }
}

export default App;
