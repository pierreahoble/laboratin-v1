import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';







export class ListeResultat extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listeResultat: [],
            tabNatureAnalyse: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/liste_resultat')
            .then((response) => {
                var data = response.data
                console.log(data)
                this.setState({
                    listeResultat: data,
                })
            })
    }


    renderRows() {
        if (this.state.listeResultat.length > 0) {

            return this.state.listeResultat.map((data, index) => {
                return <tr key={index}>
                    <th>{index}</th>
                    <td>{data.code}</td>
                    <td>
                        <table>
                            {data.nature_analyse.map((item,i)=>{
                              return <tr key={i} >{item.libelle_analyse}</tr>
                            })}
                        </table>
                    </td>
                    <td>
                        {/* <button className="btn btn-primary shadow btn-xs sharp mr-1"  ><i className="fa fa-pencil"></i></button>
                        <button className="btn btn-danger shadow btn-xs sharp mr-1" ><i className="fa fa-trash"></i></button> */}
                        <button className="btn btn-info shadow btn-xs sharp mr-1" ><i className="fa fa-print"></i></button>
                        {/* <button className="btn btn-dark shadow btn-xs sharp mr-1"  ><i className="fa fa-check"></i></button> */}
                    </td>
                </tr>
            })

        }


    }






    render() {
        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Liste des Resultas Analyses</h4>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table header-border table-hover verticle-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Code</th>
                                        <th scope="col">Analyse</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderRows()}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListeResultat

if (document.getElementById('listeDesresultats')) {
    ReactDOM.render(<ListeResultat />, document.getElementById('listeDesresultats'));
}

