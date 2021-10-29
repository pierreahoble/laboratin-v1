import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import axios from 'axios';

const Analyse = () => {


    const montant = ''


    const [keyNom, setkeyNom] = useState('')
    const [age, setAge] = useState('')
    const [telPatient, setTelPatient] = useState('Tel')
    const [patientId, setPatientId] = useState('')
    const [adresse, setAdresse] = useState('Adresse')
    const [listePatient, setListePatient] = useState([])
    const [montantTotal, setMontantTotal] = useState('0')
    const [trouver, setTrouver] = useState(false)
    const [analyse, setAnalyse] = useState([])
    const [analyseId, setAnalyseId] = useState('')
    const [prixAnalyse, setPrixAnalyse] = useState('')
    const [dataTrouver, setDataTrouver] = useState(false)
    const [tableauAnalyse, setTableauAnalyse] = useState([])
    const [afficheTableau, setAfficheTableau] = useState('')
    const [desablebtn, setDesablebtn] = useState(true)
    const [bool, setbool] = useState(false)
    const [tabTemporaire, setTabTemporaire] = useState([1])
    const [succes, setSucces] = useState(false)


    const handleKeyNom = (e) => {
        setkeyNom(e.target.value)
        if (keyNom.length > 4) {
            axios.post('http://localhost:8000/api/recupere_un_patient', {
                'nom_patient': keyNom
            }).then((response) => {
                var data = response.data
                setTrouver(true)
                setListePatient(data)
                // console.log(adresse)
            })
        }
        else {
            setTrouver(false)
            setAge('')
            setAdresse('')
            setTelPatient('')
        }
    }

    const remplirChamp = (data) => {
        setTrouver(false)
        setPatientId(data.id)
        setAge(data.age_patient)
        setAdresse(data.adresse)
        setTelPatient(data.telephone_patient)
        setkeyNom(data.nom_patient)
    }

    const searchFoundPatient = listePatient.map((data) => {
        return <li key={data.id} className="list-group-item alert alert-dark" onClick={() => remplirChamp(data)}>{data.nom_patient}  {data.prenom_patient}</li>
        // <span key={data.id}>{data.nom_patient} {data.prenom_patient}</span>
    })



    //Analyse Categoie

    useEffect(() => {

        axios.get('http://localhost:8000/api/liste_des_analyses')
            .then((response) => {
                var data = response.data
                setAnalyse(data)
            })

    }, [])




    const onChangeSelect = (e) => {
        setAnalyseId(e.target.value)



        analyse.map(data => {
            if (data.id == e.target.value) {
                setPrixAnalyse(data.prix_unitaire)

                axios.post('http://localhost:8000/api/analyse_id_categorie', {
                    'id': data.id
                })
                    .then((response) => {
                        var resp = response.data
                        tabTemporaire.length = 1
                        if (resp.length > 0) {
                            // setTabTemporaire([...tabTemporaire, resp[0]])
                            setTableauAnalyse([...tableauAnalyse, resp[0]])
                            setDesablebtn(false)
                        }


                    })

            }
        })




    }








    const handleAdd = () => {

        const ficheTableau = tableauAnalyse.length > 0 ? (tableauAnalyse).map((data, index) => {
            setMontantTotal((parseInt(montantTotal) + parseInt(data.prix_unitaire)))
            return (

                <tr key={index}> <th>{index}</th><td>{data.libelle_categorie ? data.libelle_categorie : ''}</td>
                    <td>{data.libelle_analyse !== '' ? data.libelle_analyse : ''}
                    </td><td>January 25</td>
                    <td className="color-danger">{data.prix_unitaire ? data.prix_unitaire : ''}</td>
                    <td>
                        <button className="btn btn-danger shadow btn-xs sharp" type="button" onClick={() => suppAnalyse(index, data.prix_unitaire)}><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            )
        }) : ''

        setAfficheTableau(ficheTableau)
    }

    //suppression dans le tableau des analyse 
    const suppAnalyse = (index, mont) => {
        const montant = (parseInt(montantTotal) - parseInt(mont))
        tableauAnalyse.splice(index, 1)
        handleAdd()
        // alert(parseInt(montantTotal))
        setMontantTotal(montant)
        // alert(montant)
    }


    //Envoie des infos formulaire

    const sendInfo = (e) => {
        e.preventDefault()
        if (patientId == null) {
            setSucces(true)
        }
        axios.post('http://localhost:8000/api/add_analyse_categorie', {
            patient_id: patientId,
            montant: montantTotal,
            data: tableauAnalyse
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }




    //Message


    const message =
        succes &&
        <div className="container" onClick={handleAlert}>
            <div className="alert alert-primary alert-dismissible fade show">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                <strong>Succes!</strong> Analyse enrégistré avec succès .
                <button type="button" className="close h-100" data-dismiss="alert" aria-label="Close"><span><i className="mdi mdi-close"></i></span>
                </button>
            </div>
        </div>
        ;







    return (
        <Fragment>
            <div className="row">
                <div className="col-xl-6">
                    <div className="page-titles">
                        <div>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Formulaire</a></li>
                                <li className="breadcrumb-item active"><a href="#">Analyse D'un Patient</a></li>
                            </ol>
                        </div>
                    </div>
                </div>

                {message}

                <div className="col-xl-6">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#basicModal">Ajouter Un Nouveau Patient</button>
                </div>

            </div>

            <div className="row">

                <div className="col-xl-12 col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">ANALYSE - PATIENT</h4>
                        </div>


                        <div className="card-body">
                            <div className="basic-form">
                                <form onSubmit={sendInfo}>
                                    <label className="col-sm-3 col-form-label col-form-label-sm">Patient :</label>
                                    <div className="form-group row  col-md-12">
                                        <div className="col-sm-3">
                                            <input type="text" className="form-control" placeholder="Nom Du Patient" value={keyNom} onChange={handleKeyNom} required/>
                                        </div>

                                        <div className="col-sm-3">
                                            <input type="text" className="form-control" placeholder="Age Du Patient" value={age} onChange={(e) => setAge(e.target.value)} readOnly />
                                        </div>

                                        <div className="col-sm-3">
                                            <input type="text" className="form-control" placeholder="Tel. Du Patient" value={telPatient} onChange={(e) => setTelPatient(e.target.value)} readOnly />
                                        </div>

                                        <div className="col-sm-3">
                                            <input type="text" className="form-control" placeholder="Adresse Du Patient" value={adresse} onChange={(e) => setAdresse(e.target.value)} readOnly />
                                        </div>
                                    </div>

                                    <div className="form-group row col-sm-12">
                                        <ul className="list-group  list-group-flush col-sm-8 ">
                                            {trouver && searchFoundPatient}
                                        </ul>
                                    </div>


                                    <hr className="mb-5" />


                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label" >Analyse :</label>
                                        <div className="col-sm-4">
                                            <select className="form-control" value={analyseId} onChange={(e) => onChangeSelect(e)}>
                                                <option>Choisir l'analyse</option>
                                                {
                                                    analyse.map((data) => {
                                                        return <option key={data.id} value={data.id}>{data.libelle_analyse}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="col-sm-4">
                                            <input type="text" value={prixAnalyse} className="form-control" placeholder="Prix" autoComplete="off" onChange={(e) => setPrixAnalyse(e.target.value)} readOnly />
                                        </div>
                                        <div className="col-sm-2">
                                            <button type="button" className="btn btn-primary" disabled={desablebtn} onClick={handleAdd}>+</button>
                                        </div>
                                    </div>



                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title">RECAPITULATIF DE L'ANALYSE</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-responsive-sm">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Catégorie</th>
                                                                <th>Analyse</th>
                                                                <th>Date</th>
                                                                <th>Prix</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="idTab">
                                                            {tableauAnalyse.length > 0 ? afficheTableau : ''}
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <td colSpan="4"></td>
                                                                <td>Montant Total : </td>
                                                                <td>{montantTotal + '  FCFA'}</td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="col-sm-10"><button type="submit" className="btn btn-primary">Enrégistré</button></div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="modal fade bd-example-modal-lg" id="basicModal">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Ajout D'un Nouveau Patient</h5>
                            <button type="button" className="close" data-dismiss="modal"><span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="col-xl-12 col-lg-12">
                                <div className="card-body">
                                    <div className="basic-form">
                                        <form>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Nom :</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" placeholder="Nom Du Patient" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label"> Prénom :</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" placeholder=" Prénom Du Patient" />
                                                </div>
                                            </div>


                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label"> Adresse :</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" placeholder=" Adresse Du Patient" />
                                                </div>
                                            </div>



                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label"> Tel :</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" placeholder=" Tel Du Patient" />
                                                </div>
                                            </div>


                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label"> Age  :</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" placeholder=" Age Du Patient" />
                                                </div>
                                            </div>


                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label"> Accompagnant  :</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" placeholder=" Accompagnant Du Patient" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Tel. Accompagnant  :</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" placeholder=" Tel Accompagnant Du Patient" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Obserrvation  :</label>
                                                <div className="col-sm-8">
                                                    <textarea className="form-control" placeholder="Observation"></textarea>                                                </div>
                                            </div>


                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-danger light" data-dismiss="modal">Fermer</button>
                                                <button type="button" className="btn btn-primary">Sauvegarder</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Analyse;


if (document.getElementById('Analyse')) {
    ReactDOM.render(<Analyse />, document.getElementById('Analyse'));
}

