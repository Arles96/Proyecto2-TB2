import React, {Component} from 'react'
import './Solicitud.css'
export default class Solicitud extends Component {
    constructor(){
        super();
        this.state = {};
    }
    render() {
        return(
            <form action="/action_page.php" id="formSolicitud">
                <div class="form-group">
                    <h2>Solicitud de empleo</h2>
                    <label for="numId">Numero de Identidad</label>
                    <input type="text" class="form-control" id="numId"/>
                </div>
                <div class="form-group">
                    <label for="name">Nombre Completo:</label>
                    <input type="text" class="form-control" id="name"/>
                </div>
                <div class="form-group">
                    <label for="direccion">Direccion:</label>
                    <input type="text" class="form-control" id="direccion"/>
                </div>
                <div class="form-group">
                    <label for="celular">Celular:</label>
                    <input type="number" class="form-control" id="celular"/>
                </div>
                <div class="form-group">
                    <label for="referencia">Referencia:</label>
                    <input type="text" class="form-control" id="referencia"/>
                </div>
                <div class="form-group">
                    <label for="">Puestos a los que aspira:</label><br/>
                    <label for="tipoContrato">Tipo de contrato:</label>
                    <input type="text" class="form-control" id="tipoContrato"/>
                    <label for="salarioDeseado">Salario deseado:</label>
                    <input type="number" class="form-control" id="salarioDeseado"/>
                    <label for="empleosSimilares">Empleos similares:</label>
                    <textarea rows="3" class="form-control" id="empleosSimilares"/>
                </div>
                <div class="form-group">
                    <label for="experiencia">Años de experiencia:</label>
                    <input type="number" class="form-control" id="experiencia"/>
                </div>
                <div class="form-group">
                    <label for="">Universidad:</label>
                    <label for="nomUniversidad">Nombre:</label>
                    <input type="text" class="form-control" id="nomUniversidad"/>
                    <label for="carrera">Carrera:</label>
                    <input type="number" class="form-control" id="carrera"/>
                </div>
                <div class="form-group">
                    <label for="servMilitar">Servicio militar:</label>
                    <input type="text" class="form-control" id="servMilitar"/>
                </div>
                <div class="form-group">
                    <label for="antPenales">Antecedentes penales:</label>
                    <input type="text" class="form-control" id="antPenales"/>
                </div>
                <div class="form-group">
                    <label for="empresaActual">Empresa en la que trabaja actualmente:</label>
                    <input type="text" class="form-control" id="empresaActual"/>
                </div>
                <div class="form-group">
                    <label for="puestoActual">Puesto actual:</label>
                    <input type="text" class="form-control" id="puestoActual"/>
                </div>
                <div class="form-group">
                    <label for="familiares">Familiares:</label>
                    <textarea rows="3" class="form-control" id="familiares"/>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        )
    }
}