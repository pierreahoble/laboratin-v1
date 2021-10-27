import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import axios from 'axios';

const AddPatient = () => {

    const data = {
        'nom': '',
        'prenom': '',
        'adresse': '',
        'telephone': '',
        'age': '',
        'nomAccompagnant': '',
        'telAccompagnant': '',
        'observation': ''
    }



    const [patient, setPatient] = useState(data)
    const [success, setSuccess] = useState(false)


    const handleChange = (e) => {
        // e.preventDefault()
        setPatient({ ...patient, [e.target.id]: e.target.value });
        // console.log(patient)
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        const { nom, prenom, adresse, telephone, age, nomAccompagnant, telAccompagnant, observation } = patient

        axios.post('http://localhost:8000/api/ajouter_patient', {
            nom,
            prenom,
            adresse,
            telephone,
            age,
            nomAccompagnant,
            telephone,
            telAccompagnant,
            observation

        }).then((response) => {
            // console.log(response)
            setSuccess(true)
            setPatient(...data)
        })

    }


    const handleAlert = () => {
        setSuccess(false)
    }




    const message =
        success &&
        <div className="container" onClick={handleAlert}>
            <div className="alert alert-primary alert-dismissible fade show">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                <strong>Succes!</strong> Patient enrégistré avec succès .
                <button type="button" className="close h-100" data-dismiss="alert" aria-label="Close"><span><i className="mdi mdi-close"></i></span>
                </button>
            </div>
        </div>;















    return (
        <Fragment>
            <div className="page-titles">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Enrégistré un </a></li>
                    <li className="breadcrumb-item active"><a href="#">Patient</a></li>
                </ol>
            </div>


            <div className="">
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">  Nouveau Patient</h4>
                        </div>

                        {message}
                        <div className="card-body">
                            <div className="basic-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">

                                        <div className="form-group row  col-md-6">
                                            <label className="col-sm-3 col-form-label col-form-label-sm">Nom :</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="nom" placeholder="Nom Du Patient" required onChange={handleChange} />
                                            </div>
                                        </div>



                                        <div className="form-group row col-md-6">
                                            <label className="col-sm-3 col-form-label">Prénom :</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="prenom" placeholder="Prénom Du Patient" required onChange={handleChange} />
                                            </div>
                                        </div>


                                        <div className="form-group row col-md-6">
                                            <label className="col-sm-3 col-form-label">Adresse :</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="adresse" placeholder="Adresse Du Patient" required onChange={handleChange} />
                                            </div>
                                        </div>


                                        <div className="form-group row col-md-6">
                                            <label className="col-sm-3 col-form-label">Tél. Patient :</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="telephone" placeholder="Numéro Du Patient" required onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="form-group row col-md-6">
                                            <label className="col-sm-3 col-form-label">Age Patient :</label>
                                            <div className="col-sm-9">
                                                <input type="number" className="form-control" id="age" placeholder="Numéro Du Patient" required onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="form-group row col-md-6">
                                            <label className="col-sm-3 col-form-label">Accompagnant :</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="nomAccompagnant" placeholder="Numéro Du Patient" required onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="form-group row col-md-6">
                                            <label className="col-sm-3 col-form-label">Tél. Accomp :</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="telAccompagnant" placeholder="Numéro Du Accompagnant" required onChange={handleChange} />
                                            </div>
                                        </div>

                                        <div className="form-group row col-md-6">
                                            <label className="col-sm-3 col-form-label">Observat :</label>
                                            <div className="col-sm-9">
                                                <textarea placeholder="Votre Observation" id="observation" className="form-control" onChange={handleChange} required></textarea>
                                            </div>
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

export default AddPatient;


if (document.getElementById('AddPatient')) {
    ReactDOM.render(<AddPatient />, document.getElementById('AddPatient'));
}

