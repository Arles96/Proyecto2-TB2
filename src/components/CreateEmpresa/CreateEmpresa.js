import React, {Component} from 'react'
import './CreateEmpresa.css'
export default class CreateEmpresa extends Component{
    render() {
        return(
            <div>
                <form>
                    <div className="form-group text-left">
                        <label for="formGroupExampleInput">Nombre de la Empresa</label>
                        <input type="text" className="form-control FormPuesto" name="nombreFormPuesto" placeholder="Genesis"/>
                    </div>
                    <div className="form-group text-left">
                        <label for="formGroupExampleInput">CIF</label>
                        <input type="number" className="form-control FormPuesto" name="nombreFormPuesto" placeholder="1234"/>
                    </div>
                    <div className="form-group text-left">
                        <label for="formGroupExampleInput">Clave de Ingreso</label>
                        <input type="password" className="form-control FormPuesto" name="nombreFormPuesto"/>
                    </div>
                    <div className="form-group text-left">
                        <label for="formGroupExampleInput">Director de la Empresa</label>
                        <input type="text" className="form-control FormPuesto" name="nombreFormPuesto" placeholder="Phil Collins"/>
                    </div>
                    <div className="form-group text-left">
                        <label for="formGroupExampleInput">Fecha de Constitución</label>
                        <input type="date" className="form-control FormPuesto" name="date"/>
                    </div>
                    <div className="form-group text-left">
                        <label for="formGroupExampleInput">Dirección</label>
                        <input type="text" className="form-control FormPuesto" name="nombreFormPuesto" placeholder="Calle 2, Tegucigalpa M.D.C, FM, Honduras"/>
                    </div>
                    <div className="form-group text-left">
                        <button type="submit" className="btn btn-primary">Inscribirse</button>
                    </div>
                </form>
            </div>
        )
    }
}