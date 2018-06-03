import React, {Component} from 'react'
import './SubMenu.css'

export default class SubMenu extends Component {

    constructor(){
        super()
        this.renderButton = this.renderButton.bind(this)
    }

    renderButton(){
        if (!this.props.login){
            return (
                <div>
                    <li className="nav-item link-menu" >
                        <a onClick={this.props.registrarS} className="nav-link">Enviar Solicutud</a>
                    </li>
                    <hr className="hr" />               
                    <li  className="nav-item link-menu" >
                        <a onClick={this.props.registrarE} className="nav-link">Registrar Empresa</a>
                    </li>
                    <hr className="hr" />  
                </div>
            )
        }else {
            return (
                <div>
                    <li className="nav-item link-menu" >
                        <a onClick={this.props.puesto} className="nav-link">Crear Puesto</a>
                    </li>
                    <hr className="hr" />               
                    <li  className="nav-item link-menu" >
                        <a onClick={this.props.solicitud} className="nav-link">Solicitudes</a>
                    </li>
                    <hr className="hr" />  
                </div>
            )
        }
    }

    render(){
        return (
            <nav className="animated bounceInLeft menu-deploy bg-light" >
                <div className="text-right menu-top" >
                    <i onClick={this.props.event} className="menu-button fas fa-times-circle"></i>
                    </div>
                <ul className="nav flex-column nav-color2">
                    <li className="nav-item link-menu" >
                        <a onClick={this.props.home} className="nav-link">Home</a>
                    </li>
                    <hr className="hr" />
                    <li  className="nav-item link-menu" >
                        <a onClick={this.props.empresa} className="nav-link">Empresas</a>
                    </li>
                    <hr className="hr" /> 
                    {this.renderButton()}
                </ul>
            </nav>
        )
    }

}