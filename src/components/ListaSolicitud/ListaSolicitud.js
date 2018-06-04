import React, {Component} from 'react'
import {database} from 'firebase'

export default class ListaSolicitudes extends Component {

    constructor(){
        super()
        this.state = {
            list : []
        }
    }

    componentDidMount(){
        database().ref('/solicitud').on('value', (snapshot)=> {
            let list = []
            snapshot.forEach(doc => {
                if (doc.val().cif===this.props.cif){
                    list.push(doc)
                    this.setState({
                        list : list
                    })
                }
            })
        })
    }

    render(){
        let data = this.state.list.map((doc,i)=> {
            return (
                <div className="card" key={i} >
                    <div className="card-body" >
                        <h3 className="card-title text-center" >Solicitud No. {i+1}</h3>
                        <h5>Nombre: {doc.val().nombre}</h5>
                        <p><b>Carrera:</b> {doc.val().carrera}</p>
                        <p><b>Antecedentes:</b> {doc.val().antecedentes}</p>
                        <p><b>Celular:</b> {doc.val().celular}</p>
                        <p><b>Direccion:</b> {doc.val().direccion}</p>
                        <p><b>Universidad:</b> {doc.val().universidad}</p>
                        <p><b>Carrera:</b> {doc.val().carrera}</p>
                        <p><b>Contrato:</b> {doc.val().contrato}</p>
                        <p><b>Empresa Actual:</b> {doc.val().empresaActual}</p>
                        <p><b>Experiencia</b>: {doc.val().experiencia} años</p>
                        <p><b>puesto:</b> {doc.val().puesto}</p>
                        <p><b>Referencia:</b> {doc.val().referencia}</p>
                        <p><b>Salario:</b> {doc.val().salario}</p>
                        <p><b>Familiares:</b> {doc.val().familiares}</p>
                        <p><b>Servicio Militar:</b> {doc.val().militar}</p>
                        <p><b>Salario:</b> {doc.val().salario}</p>
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