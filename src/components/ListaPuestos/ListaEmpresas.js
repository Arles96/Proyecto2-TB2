import React, {Component} from 'react'
import {database} from 'firebase'


export default class ListaEmpresas extends Component{
    constructor(){
        super()
        this.state = {
            list : []
        }
    }

    componentDidMount(){
        database().ref('/empresas').on('value', (snapshot)=> {
            let list = []
            snapshot.forEach(doc => {
                if (doc.val().puesto===this.props.puesto){
                    list.push(doc)
                    this.setState({
                        list : list
                    })
                }
            })
        })
    }

    render() {
        let data = this.state.list.map((doc,i)=> {
            return (
                <div className="card" key={i} >
                    <div className="card-body" >
                        <h3 className="card-title text-center" >Puesto No. {i+1}</h3>
                        <h5>Nombre: {doc.val().nombre}</h5>
                        <p><b>Director:</b> {doc.val().director}</p>
                        <p><b>Fecha Constituida:</b> {doc.val().fecha}</p>
                        <p><b>Direccion:</b> {doc.val().dirrecion}</p>
                        
                    </div>
                </div>
            )
        })
        return(
            <div>
                {data}
            </div>
        )
    }
}