import React, {Component} from 'react'
import './Home.css'

export default class Home extends Component {

    render(){
        return(
            <div className="home" >
                <div className="center" >
                    <h1 className="text-center" >Bienvenido a Centro de Empleo</h1>
                    <p className="text-center">
                        Esta aplicación web es exclusivamente para la 
                        clase de Teoría de Base de Datos II de la Universidad 
                        Tecnologica de Honduras (Unitec).
                    </p>
                </div>
            </div>
        )
    }

}