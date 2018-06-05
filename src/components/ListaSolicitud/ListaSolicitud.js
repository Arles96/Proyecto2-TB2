import React, {Component} from 'react'
import {database} from 'firebase'
import './ListaSolicitud.css'

export default class ListaSolicitudes extends Component {

    constructor(){
        super()
        this.state = {
            list : []
        }
        this.handleRemoveSolicitud = this.handleRemoveSolicitud.bind(this)
        this.handleAcceptSolicitud = this.handleAcceptSolicitud.bind(this)
    }

    handleRemoveSolicitud(e){
        database().ref(`/solicitud/${e}`).remove()
        if (this.state.list.length===1){
            this.setState({
                list : []
            })
        }
        alert("Se ha eliminado la solicitud")
    }

    handleAcceptSolicitud(e){
        database().ref(`/solicitud/${e}/estado`).set(true)
        alert("Ha aceptado la solicitud")
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
            if (!doc.val().estado){
                return (
                    <div className="card card-s" key={i} >
                        <div className="card-body" >
                            <h3 className="card-title text-center" >Solicitud No. {i+1}</h3>
                            <div className="text-left" >
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
                                <div onClick={()=> this.handleAcceptSolicitud(doc.key)} className="btn m-3">Aceptar</div>
                                <div onClick={()=> this.handleRemoveSolicitud(doc.key)} className="btn m-3 btnDel">Eliminar</div>
                            </div>
                        </div>
                    </div>
                )
            }else {
                return (
                    <div className="card card-s" key={i} >
                        <div className="card-body" >
                            <h3 className="card-title text-center" >Solicitud No. {i+1}</h3>
                            <div className="text-left" >
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
                                <p><b>Estado:</b> Ha aceptado esta solicitud</p>
                                <div onClick={()=> this.handleRemoveSolicitud(doc.key) } className="btn m-3 btnDel">Eliminar</div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
        return(
            <div className="text-center" >
                <h2 className="text-center" >Lista de Solicitudes</h2>
                {data}
            </div>
        )
    }

}