import React, {Component} from 'react'
import './Solicitud.css'
import {database} from 'firebase'

export default class Solicitud extends Component {
    constructor(){
        super();
        this.state = {};
        this.registerSolicitud = this.registerSolicitud.bind(this)
    }
    
    //Funcion que envia solicitud
    registerSolicitud(e){
        e.preventDefault()
        database().ref(`/solicitud/${e.target.identidad.value}`).set({
            nombre : e.target.nombre.value,
            direccion : e.target.direccion.value,
            celular : e.target.celular.value,
            referencia : e.target.referencia.value,
            contrato : e.target.contrato.value,
            salario : e.target.salario.value,
            similares : e.target.similares.value,
            experiencia : e.target.experiencia.value,
            universidad : e.target.universidad.value,
            carrera : e.target.carrera.value,
            militar : e.target.militar.value,
            antecedentes : e.target.antecedentes.value,
            empresaActual : e.target.empresaActual.value,
            puesto : e.target.puesto.value,
            familiares : e.target.familiares.value,
            cif : e.target.cif.value
        })
        alert("Se ha enviado la solicitud")
    }

    render() {
        return(
            <form className="pt-3" onSubmit={this.registerSolicitud} id="formSolicitud">
                <div className="form-group">
                    <h2>Solicitud de empleo</h2>
                    <label>Numero de Identidad</label>
                    <input name="identidad" type="text" className="form-control" id="numId"/>
                </div>
                <div className="form-group">
                    <label>Nombre Completo:</label>
                    <input name="nombre" type="text" className="form-control" id="name"/>
                </div>
                <div className="form-group">
                    <label>Direccion:</label>
                    <input name="direccion" type="text" className="form-control" id="direccion"/>
                </div>
                <div className="form-group">
                    <label>Celular:</label>
                    <input name="celular" type="number" className="form-control" id="celular"/>
                </div>
                <div className="form-group">
                    <label>Referencia:</label>
                    <input name="referencia" type="text" className="form-control" id="referencia"/>
                </div>
                <div className="form-group">
                    <label>Puestos a los que aspira:</label><br/>
                    <label>Tipo de contrato:</label>
                    <input name="contrato"  type="text" className="form-control" id="tipoContrato"/>
                    <label >Salario deseado:</label>
                    <input name="salario" type="number" className="form-control" id="salarioDeseado"/>
                    <label>Empleos similares:</label>
                    <textarea name="similares" rows="3" className="form-control" id="empleosSimilares"/>
                </div>
                <div className="form-group">
                    <label>Años de experiencia:</label>
                    <input name="experiencia" type="number" className="form-control" id="experiencia"/>
                </div>
                <div className="form-group">
                    <label>Universidad:</label>
                    <label>Nombre:</label>
                    <input name="universidad" type="text" className="form-control" id="nomUniversidad"/>
                    <label>Carrera:</label>
                    <input name="carrera" type="text" className="form-control" id="carrera"/>
                </div>
                <div className="form-group">
                    <label>Servicio militar:</label>
                    <input name="militar" type="text" className="form-control" id="servMilitar"/>
                </div>
                <div className="form-group">
                    <label>Antecedentes penales:</label>
                    <input name="antecedentes" type="text" className="form-control" id="antPenales"/>
                </div>
                <div className="form-group">
                    <label>Empresa en la que trabaja actualmente:</label>
                    <input name="empresaActual" type="text" className="form-control" id="empresaActual"/>
                </div>
                <div className="form-group">
                    <label>Puesto actual:</label>
                    <input name="puesto" type="text" className="form-control" id="puestoActual"/>
                </div>
                <div className="form-group">
                    <label>Familiares:</label>
                    <textarea name="familiares"  rows="3" className="form-control" id="familiares"/>
                </div>
                <div className="form-group">
                    <label>CIF de la empresa que desea trabajar:</label>
                    <input name="cif" type="number" className="form-control" id="puestoActual1"/>
                </div>
                <button type="submit" className="btn btn-default">Enviar</button>
            </form>
        )
    }
}