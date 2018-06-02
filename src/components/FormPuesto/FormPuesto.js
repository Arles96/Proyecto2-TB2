import React, {Component} from 'react'
import './FormPuesto.css'
export default class FormPuesto extends Component{
    render(){
        return(
        <div>
            <form>
            <div className="form-group text-left">
                <label for="formGroupExampleInput">Nombre</label>
                <input type="text" className="form-control FormPuesto" name="nombreFormPuesto" placeholder="Ingrese el nombre"/>
            </div>
            <div class="form-group text-left">
                <label for="exampleFormControlTextarea1">Requisitos legales</label>
                <textarea class="form-control FormPuesto" name="legalesFormPuesto" rows="2"></textarea>
            </div>
            <div class="form-group text-left">
                <label for="exampleFormControlTextarea1">Requisitos Personales</label>
                <textarea class="form-control FormPuesto" name="personalesFormPuesto" rows="2"></textarea>
            </div>
            <div class="form-group text-left">
                <label for="exampleFormControlTextarea1">Requisitos Academicos</label>
                <textarea class="form-control FormPuesto" name="academicosFormPuesto" rows="2"></textarea>
            </div>
            <div class="form-group text-left">
                <label for="exampleFormControlTextarea1">Requisitos Sanitarios</label>
                <textarea class="form-control FormPuesto" name="sanitariosFormPuesto" rows="2"></textarea>
            </div>
            <div class="form-group text-left">
                <label for="exampleFormControlTextarea1">Requisitos Profesionales</label>
                <textarea class="form-control FormPuesto" name="profesionalesFormPuesto" rows="2"></textarea>
            </div>
            <div className="form-group text-left">
                <label for="formGroupExampleInput2">Lugar Empleo</label>
                <input type="text" className="form-control FormPuesto" name="lugarFormPuesto" placeholder="Ingrese el lugar del empleo"/>
            </div>
            <div className="form-group text-left">
                <label for="formGroupExampleInput2">Sueldo</label>
                <input type="text" className="form-control FormPuesto" name="sueldoFormPuesto" placeholder="Ingrese el sueldo"/>
            </div>
            </form>
        </div>
        )  
    }
}