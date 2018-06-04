import React, {Component} from 'react'
import {database} from 'firebase'

export default class ListaPuestos extends Component{
    constructor(){
        super()
        this.state = {
            list : []
        }
    }

    componentDidMount(){
        database().ref('/puestos').on('value', (snapshot)=> {
            let list = []
            snapshot.forEach(doc => {
                if (doc.val().puesto===this.props.puesto){
                    list.push(doc)
                    this.setState({
                        list : list
                    })
                }
            })
        })
    }

    render() {
        let data = this.state.list.map((doc,i)=> {
            return (
                <div className="card" key={i} >
                    <div className="card-body" >
                        <h3 className="card-title text-center" >Puesto No. {i+1}</h3>
                        <h5>Nombre: {doc.val().nombre}</h5>
                        <p><b>Lugar:</b> {doc.val().lugar}</p>
                        <p><b>Requisitos Académicos:</b> {doc.val().requisitosAcademicos}</p>
                        <p><b>Requisitos Legales:</b> {doc.val().requisitosLegales}</p>
                        <p><b>Requisitos Personales:</b> {doc.val().requisitosPersonales}</p>
                        <p><b>Requisitos Profresionales:</b> {doc.val().requisitosProfesionales}</p>
                        <p><b>sueldo:</b> {doc.val().sueldo}</p>
                    </div>
                </div>
            )
        })
        return(
            <div>
                {data}
            </div>
        )
    }
}