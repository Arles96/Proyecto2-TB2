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
                <div class="form-group">
                    <h2>Solicitud de empleo</h2>
                    <label for="numId">Numero de Identidad</label>
                    <input name="identidad" type="text" class="form-control" id="numId"/>
                </div>
                <div class="form-group">
                    <label for="name">Nombre Completo:</label>
                    <input name="nombre" type="text" class="form-control" id="name"/>
                </div>
                <div class="form-group">
                    <label for="direccion">Direccion:</label>
                    <input name="direccion" type="text" class="form-control" id="direccion"/>
                </div>
                <div class="form-group">
                    <label for="celular">Celular:</label>
                    <input name="celular" type="number" class="form-control" id="celular"/>
                </div>
                <div class="form-group">
                    <label for="referencia">Referencia:</label>
                    <input name="referencia" type="text" class="form-control" id="referencia"/>
                </div>
                <div class="form-group">
                    <label for="">Puestos a los que aspira:</label><br/>
                    <label for="tipoContrato">Tipo de contrato:</label>
                    <input name="contrato"  type="text" class="form-control" id="tipoContrato"/>
                    <label for="salarioDeseado">Salario deseado:</label>
                    <input name="salario" type="number" class="form-control" id="salarioDeseado"/>
                    <label for="empleosSimilares">Empleos similares:</label>
                    <textarea name="similares" rows="3" class="form-control" id="empleosSimilares"/>
                </div>
                <div class="form-group">
                    <label for="experiencia">Años de experiencia:</label>
                    <input name="experiencia" type="number" class="form-control" id="experiencia"/>
                </div>
                <div class="form-group">
                    <label for="">Universidad:</label>
                    <label for="nomUniversidad">Nombre:</label>
                    <input name="universidad" type="text" class="form-control" id="nomUniversidad"/>
                    <label for="carrera">Carrera:</label>
                    <input name="carrera" type="text" class="form-control" id="carrera"/>
                </div>
                <div class="form-group">
                    <label for="servMilitar">Servicio militar:</label>
                    <input name="militar" type="text" class="form-control" id="servMilitar"/>
                </div>
                <div class="form-group">
                    <label for="antPenales">Antecedentes penales:</label>
                    <input name="antecedentes" type="text" class="form-control" id="antPenales"/>
                </div>
                <div class="form-group">
                    <label for="empresaActual">Empresa en la que trabaja actualmente:</label>
                    <input name="empresaActual" type="text" class="form-control" id="empresaActual"/>
                </div>
                <div class="form-group">
                    <label for="puestoActual">Puesto actual:</label>
                    <input name="puesto" type="text" class="form-control" id="puestoActual"/>
                </div>
                <div class="form-group">
                    <label for="familiares">Familiares:</label>
                    <textarea name="familiares"  rows="3" class="form-control" id="familiares"/>
                </div>
                <div class="form-group">
                    <label for="familiares">CIF de la empresa que desea trabajar:</label>
                    <input name="cif" type="number" class="form-control" id="puestoActual"/>
                </div>
                <button type="submit" class="btn btn-default">Enviar</button>
            </form>
        )
    }
}