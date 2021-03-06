import React, {Component} from 'react'
import './Menu.css'
export default class Menu extends Component {

    constructor(){
        super()
        this.renderLogin = this.renderLogin.bind(this)
    }

    renderLogin(){
        if (!this.props.checker){
            return (
                <div className="collapse navbar-collapse col-6">
                    <form onSubmit={this.props.login} className="form-inline my-2 my-lg-0">
                        <input name="cif" className="form-control mr-sm-2" type="number" placeholder="CIF" aria-label="Search"/>
                        <input name="pass" className="form-control mr-sm-2" type="password" placeholder="Clave" aria-label="Search"/>
                        <button className="btn btn-outline-success login my-2 my-sm-0" type="submit">Sig In</button>
                    </form>
                </div>
            )
        }else {
            return (
                <div className="collapse navbar-collapse col-6 text-right" >
                    <button onClick={this.props.signup} className="btn btn-danger sign-up" >Sign Up</button>
                </div>
            )
        }
    }
  
    render() {
        return(
            <div>
                <nav className="navbar-top navbar navbar-expand-lg navbar-light bg-light row">
                    <div className = "col-6 text-left">
                        <a onClick={this.props.event} className="navbar-brand"><i className="fas fa-bars"></i> Centro de Empleo</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    {this.renderLogin()}
                </nav>                
            </div>
        )
    }
}