import React, {Component} from 'react'
import './FormPuesto.css'
import { database } from 'firebase';

export default class FormPuesto extends Component{

    constructor(){
        super()
        this.registerPuesto = this.registerPuesto.bind(this)
    }

    registerPuesto(e){
        e.preventDefault()
        if (this.props.cif){
            database().ref(`/empresa/${this.props.cif}/puesto`).push({
                nombre : e.target.nombre.value,
                requisitosLegales : e.target.legales.value,
                requisitosPersonales : e.target.personales.value,
                requisitosAcademicos : e.target.academicos.value,
                requisitosSanitarios : e.target.sanitarios.value,
                requisitosProfesionales : e.target.profesionales.value,
                lugar : e.target.lugar.value,
                sueldo : e.target.sueldo.value
            })
            alert("Se ha agregado un puesto")
        }else  {
            alert("No ha iniciado sesion")
        }
    }

    render(){
        return(
        <div>
            <form onSubmit={this.registerPuesto} >
            <div className="form-group text-left">
                <label>Nombre</label>
                <input type="text" className="form-control FormPuesto" name="nombre" placeholder="Ingrese el nombre"/>
            </div>
            <div className="form-group text-left">
                <label>Requisitos legales</label>
                <textarea className="form-control FormPuesto" name="legales" rows="2"></textarea>
            </div>
            <div className="form-group text-left">
                <label>Requisitos Personales</label>
                <textarea className="form-control FormPuesto" name="personales" rows="2"></textarea>
            </div>
            <div className="form-group text-left">
                <label>Requisitos Academicos</label>
                <textarea className="form-control FormPuesto" name="academicos" rows="2"></textarea>
            </div>
            <div className="form-group text-left">
                <label>Requisitos Sanitarios</label>
                <textarea className="form-control FormPuesto" name="sanitarios" rows="2"></textarea>
            </div>
            <div className="form-group text-left">
                <label>Requisitos Profesionales</label>
                <textarea className="form-control FormPuesto" name="profesionales" rows="2"></textarea>
            </div>
            <div className="form-group text-left">
                <label>Lugar Empleo</label>
                <input type="text" className="form-control FormPuesto" name="lugar" placeholder="Ingrese el lugar del empleo"/>
            </div>
            <div className="form-group text-left">
                <label>Sueldo</label>
                <input type="text" className="form-control FormPuesto" name="sueldo" placeholder="Ingrese el sueldo"/>
            </div>
            <button type="submit">Registrar</button>
            </form>
        </div>
        )  
    }
}