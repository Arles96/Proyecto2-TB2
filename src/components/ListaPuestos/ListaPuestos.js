import React, {Component} from 'react'
import {database} from 'firebase'
import './ListaPuesto.css'

export default class ListaPuestos extends Component{
    constructor(){
        super()
        this.state = {
            list : []
        }
        this.handleRemovePuesto = this.handleRemovePuesto.bind(this)
        this.renderSearch = this.renderSearch.bind(this)
        this.handleFind = this.handleFind.bind(this)
    }

    handleFind(e){
        e.preventDefault()
        let name = e.target.find.value
        database().ref(`/empresa/${this.props.cif}/puesto`).on('value', (snapshot)=> {
            let list = []
            snapshot.forEach(doc => {
                if (name===doc.val().nombre) {
                    list.push(doc)
                    this.setState({
                        list : list
                    })
                }
            })
        })
    }

    handleRemovePuesto(e){
        database().ref(`empresa/${this.props.cif}/puesto/${e}`).remove()
        if (this.state.list.length===1){
            this.setState({
                list : []
            })
        }
    }

    renderSearch(){
        if (this.props.checker){
            return (
                <form onSubmit={this.handleFind} className="form-inline mx-auto form-find">
                    <input className="form-control form-find" name="find" placeholder="Ingrese nombre del puesto" />
                    <button className="m-5 btn btn" type="submit">Buscar</button>
                </form>
            )
        }
    }

    componentDidMount(){
        database().ref(`/empresa/${this.props.cif}/puesto`).on('value', (snapshot)=> {
            let list = []
            snapshot.forEach(doc => {
                list.push(doc)
                this.setState({
                    list : list
                })
            })
        })
    }

    render() {
        let data = this.state.list.map((doc,i)=> {
            if (!this.props.checker){
                return (
                    <div className="card" key={i} >
                        <div className="card-body" >
                            <h3 className="card-title text-center" >Puesto No. {i+1}</h3>
                            <h5>Nombre: {doc.val().nombre}</h5>
                            <p><b>Lugar:</b> {doc.val().lugar}</p>
                            <p><b>Requisitos Académicos:</b> {doc.val().requisitosAcademicos}</p>
                            <p><b>Requisitos Legales:</b> {doc.val().requisitosLegales}</p>
                            <p><b>Requisitos Personales:</b> {doc.val().requisitosPersonales}</p>
                            <p><b>Requisitos Profesionales:</b> {doc.val().requisitosProfesionales}</p>
                            <p><b>sueldo:</b> {doc.val().sueldo}</p>
                        </div>
                    </div>
                )
            }else {
                return (
                    <div className="card" key={i} >
                        <div className="card-body" >
                            <h3 className="card-title text-center" >Puesto No. {i+1}</h3>
                            <h5>Nombre: {doc.val().nombre}</h5>
                            <p><b>Lugar:</b> {doc.val().lugar}</p>
                            <p><b>Requisitos Académicos:</b> {doc.val().requisitosAcademicos}</p>
                            <p><b>Requisitos Legales:</b> {doc.val().requisitosLegales}</p>
                            <p><b>Requisitos Personales:</b> {doc.val().requisitosPersonales}</p>
                            <p><b>Requisitos Profesionales:</b> {doc.val().requisitosProfesionales}</p>
                            <p><b>sueldo:</b> {doc.val().sueldo}</p>
                            <button onClick={()=>this.handleRemovePuesto(doc.key)} className="btn btnDel btn-block m-3" >Eliminar</button>
                        </div>
                    </div>
                )
            }
        })
        return(
            <div className="container" >
                <h2 className="text-center m-5" >Lista de Puestos de la Empresa</h2>
                <div className="text-center row" >
                    <div className="col-6 pb-4" >
                        {this.renderSearch()}
                    </div>
                    <div className="col-6 text-left pt-4" >
                        <button className="btn btn-primary m-3">Todos</button>
                    </div>                    
                </div>
                {data}
            </div>
        )
    }
}