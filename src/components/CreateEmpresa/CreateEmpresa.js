import React, {Component} from 'react'
import './CreateEmpresa.css'
export default class CreateEmpresa extends Component{
    render() {
        return(
            <div>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                        <label for="inputNumber">CIF</label>
                        <input type="number" className="form-control" id="inputNumber" placeholder="CIF"/>
                        </div>
                        <div className="form-group col-md-4">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputAddress">Dirección</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputAddress2"> Nombre de Empresa </label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Genesis"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="nombreEmpresa"> Director </label>
                        <input type="text" className="form-control" id="nombreEmpresa" placeholder="Phil Collins"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputDate">Fecha de Constitución: </label>
                        <input id="date" type="date"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Inscribirse</button>
                </form>
            </div>
        )
    }
}