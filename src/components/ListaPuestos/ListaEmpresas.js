import React, {Component} from 'react'
import {database} from 'firebase'
import ListaPuestos from './ListaPuestos'

export default class ListaEmpresas extends Component{
    constructor(){
        super()
        this.state = {
            list : []
        }
    }

    componentDidMount(){
        database().ref('/empresa').on('value', (snapshot)=> {
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
            return (
                <div className="card" key={i} >
                    <div className="card-body" >
                        <h3 className="card-title text-center" >Empresa No. {i+1}</h3>
                        <h5>Nombre: {doc.val().nombre}</h5>
                        <p><b>Director:</b> {doc.val().director}</p>
                        <p><b>Fecha Constituida:</b> {doc.val().fecha}</p>
                        <p><b>Direccion:</b> {doc.val().direccion}</p>
                        <p><b>CIF:</b> {doc.key}</p>
                        <ListaPuestos cif={doc.key} />
                    </div>
                </div>
            )
        })
        return(
            <div>
                <h2 className="text-center" >Lista de Empresas Registradas</h2>
                {data}
            </div>
        )
    }
}