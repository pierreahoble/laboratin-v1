import React, { useState } from 'react'
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const AddCategorie = () => {

    const [libelle, setLibelle] = useState('')
    const [succes, setSucces] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(libelle)
        axios.post('http://localhost:8000/api/ajouter_categorie', { libelle })
            .then((response) => {
                setLibelle(' ')
                setSucces(true)
                // console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleAlert = (e) => {
        setSucces(false)
    }






    const message =
        succes &&
        <div className="container" onClick={handleAlert}>
            <div className="alert alert-primary alert-dismissible fade show">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                <strong>Succes!</strong> Catégorie enrégistré avec succès .
                <button type="button" className="close h-100" data-dismiss="alert" aria-label="Close"><span><i className="mdi mdi-close"></i></span>
                </button>
            </div>
        </div>
        ;



    return (
        <Fragment>

            <div className="page-titles">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Enrégistré une </a></li>
                    <li className="breadcrumb-item active"><a href="#">Catégorie</a></li>
                </ol>
            </div>


            {message}

            <div className="">
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">  Nouvelle Catégorie</h4>
                        </div>
                        <div className="card-body">
                            <div className="basic-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-sm-3 col-form-label">Libelle Catégorie</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" placeholder="Libelle Catégorie" value={libelle} onChange={(e) => setLibelle(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-10">
                                            <button type="submit" className="btn btn-primary">Enrégistré</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>









            </div>





        </Fragment>
    )
}

export default AddCategorie;


if (document.getElementById('AddCategorie')) {
    ReactDOM.render(<AddCategorie />, document.getElementById('AddCategorie'));
}
