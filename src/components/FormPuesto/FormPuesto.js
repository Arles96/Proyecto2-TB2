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
        <div className="create-comp">
        <h2 className="text-center font-weight-bold">Creando Puesto</h2>
            <form onSubmit={this.registerPuesto} className="form-comp" >
            <div className="form-group text-left">
                <label className="font-weight-bold">Nombre</label>
                <input type="text" className="form-control FormPuesto input-comp" name="nombre" placeholder="Ingrese el nombre"/>
            </div>
            <div className="form-group text-left">
                <label className="font-weight-bold">Requisitos legales</label>
                <textarea className="form-control FormPuesto input-comp" name="legales" rows="2"></textarea>
            </div>
            <div className="form-group text-left">
                <label className="font-weight-bold">Requisitos Personales</label>
                <textarea className="form-control FormPuesto input-comp" name="personales" rows="2"></textarea>
            </div>
            <div className="form-group text-left">
                <label className="font-weight-bold">Requisitos Academicos</label>
                <textarea className="form-control FormPuesto input-comp" name="academicos" rows="2"></textarea>
            </div>
            <div className="form-group text-left">
                <label className="font-weight-bold">Requisitos Sanitarios</label>
                <textarea className="form-control FormPuesto input-comp" name="sanitarios" rows="2"></textarea>
            </div>
            <div className="form-group text-left">
                <label className="font-weight-bold">Requisitos Profesionales</label>
                <textarea className="form-control FormPuesto input-comp" name="profesionales" rows="2"></textarea>
            </div>
            <div className="form-group text-left">
                <label className="font-weight-bold">Lugar Empleo</label>
                <input type="text" className="form-control FormPuesto input-comp" name="lugar" placeholder="Ingrese el lugar del empleo"/>
            </div>
            <div className="form-group text-left">
                <label className="font-weight-bold">Sueldo</label>
                <input type="text" className="form-control FormPuestoinput-comp " name="sueldo" placeholder="Ingrese el sueldo"/>
            </div>
            <button className="btn btn-primary btn-block"type="submit">Registrar</button>
            </form>
        </div>
        )  
    }
}