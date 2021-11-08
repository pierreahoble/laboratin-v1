import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PDFCaisse from '../PDFCaisse';

toast.configure()

class AnalysePatient extends Component {
    constructor(props) {
        super(props)

        this.state = {
            analyseId: '',
            prixUnnitaire: '',
            montantTotal: 0,
            nomPatient: '',
            agePatient: '',
            telPatient: '',
            adressePatient: '',
            patientId: '',
            prenomPatient: '',
            nomAccompagant: '',
            telAccompagnant: '',
            observation: '',
            analyseIdUpdate: '',
            trouver: false,
            success: false,
            btnBool: false,
            btnValider: false,
            analyses: [],
            message: '',
            showMessage: '',
            tabOne: [],
            tabAnalyse: [],
            tabRecapAnalyse: [],
            listePatient: [],
        }
    }



    componentDidMount() {



        axios.get('http://localhost:8000/api/liste_des_analyses')
            .then((response) => {
                var data = response.data
                this.setState({
                    analyses: data
                })
            })



        // axios.get()
    }
    //methode pour afficher un messsage de succes

    showMessage() {
        toast.success('Analyse ajouté avec success', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    //Message de modification
    showMessageUpdate() {
        toast.success(this.state.showMessage, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.success) {
            this.showMessage()
            this.setState({
                success: false
            })
        }

        if (this.state.showMessage) {
            this.showMessageUpdate()
            this.setState({
                showMessage: ''
            })
        }
    }






    //Checker a la modfication du select

    onChangeSelect(e) {

        if (e.target.value != "Choisir l'analyse") {
            this.setState({
                analyseId: e.target.value,
                prixUnnitaire: this.state.analyses[e.target.value].prix_unitaire,
                tabOne: this.state.analyses[e.target.value]
            })

        }

        // console.log(this.state.tabOne)
    }



    //Ajouter dans le tableau
    handleClick() {
        var monT = this.state.montantTotal
        var data = this.state.tabAnalyse
        monT = parseInt(monT) + parseInt(this.state.prixUnnitaire)


        if (!_.isEmpty(this.state.tabOne) && !data.includes(this.state.tabOne)) {
            data.push(this.state.tabOne)
            this.setState({
                tabAnalyse: data,
                montantTotal: parseInt(monT),
                tabOne: []
            })
        } else {
            alert('Vous devez selectionner une autre analyse ou cet analyse existe deja dans votre selection')
            this.setState({
                tabOne: []
            })
        }
    }

    //Suppression
    suppAnalyse(index) {
        var monT = this.state.montantTotal
        var prix = this.state.tabAnalyse[index].prix_unitaire
        monT = parseInt(monT) - parseInt(prix)
        var data = this.state.tabAnalyse
        data.splice(index, 1)
        this.setState({
            tabAnalyse: data,
            montantTotal: parseInt(monT)
        })

    }

    //Changer le nom
    onChangeNom(e) {

        this.setState({
            nomPatient: e.target.value
        })

        if (this.state.nomPatient.length > 1) {
            axios.post('http://localhost:8000/api/recupere_un_patient', {
                'nom_patient': this.state.nomPatient
            }).then((response) => {
                var data = response.data
                this.setState({
                    trouver: true,
                    listePatient: data
                })
            })
        }
    }

    //Formater la date 
    dateParse = (dateP) => {
        let newDate = new Date(dateP).toLocaleDateString('fr-FR', {
            month: "short",
            year: "numeric",
            day: "numeric"
        })
        return newDate
    }

    //Remplir les champs de façon automatique
    remplirChamp = (index) => {
        var data = this.state.listePatient[index]
        var nom = data.nom_patient + ' ' + data.prenom_patient
        // console.log(data)
        this.setState({
            agePatient: data.age_patient,
            telPatient: data.telephone_patient,
            adressePatient: data.adresse,
            nomPatient: nom,
            patientId: data.id,
            trouver: false
        })
    }


    //Liste des patient trouves

    listeDesPatients() {
        var context = this;
        if (this.state.trouver) {
            return this.state.listePatient.map(function (data, index) {
                return <li key={data.id} className="list-group-item alert alert-dark" onClick={context.remplirChamp.bind(context, index)}>{data.nom_patient}  {data.prenom_patient}</li>
                // <span key={data.id}>{data.nom_patient} {data.prenom_patient}</span>
            })
        }
    }

    //Envoyer les informations
    sendInfo(e) {
        e.preventDefault()
        if (this.state.nomPatient == "") {
            alert('Vous deviez choisir le nom du patient')
        }
        else
            if (this.state.nomPatient !== null && this.state.tabAnalyse.length > 0) {
                var data = this.state.tabAnalyse

                axios.post('http://localhost:8000/api/add_analyse_categorie', {
                    'patient_id': this.state.patientId,
                    'montant': this.state.montantTotal,
                    'data': this.state.tabAnalyse
                }).then((response) => {
                    console.log(response.data)
                    var dataR = response.data
                    if (dataR.success == 'SUCCESS') {
                        this.setState({
                            agePatient: '',
                            telPatient: '',
                            adressePatient: '',
                            // nomPatient: '',
                            // patientId: '',
                            success: true,
                            tabRecapAnalyse: data,
                            tabAnalyse: [],
                            analyseIdUpdate: dataR.id_analyse

                        })
                    }

                }).catch((error) => {
                    console.log(error)
                })
            }
            else {
                alert("Verifiez que vous avez saisi un patient et que la liste  du tableau n'est pas vide ")
            }
    }


    //Enregistre un nouveau patient

    submitpatient(e) {
        e.preventDefault()
        axios.post('http://localhost:8000/api/ajouter_patient', {
            'nom': this.state.nomPatient,
            'prenom': this.state.prenomPatient,
            'adresse': this.state.adressePatient,
            'telephone': this.state.telPatient,
            'age': this.state.agePatient,
            'nomAccompagnant': this.state.nomAccompagant,
            'telAccompagnant': this.state.telAccompagnant,
            'observation': this.state.observation
        }).then((response) => {
            var data = response.data

            this.setState({
                agePatient: data.age_patient,
                observation: '',
                telAccompagnant: '',
                nomAccompagant: '',
                telPatient: data.telephone_patient,
                adressePatient: data.adresse,
                nomPatient: data.nom_patient,
                patientId: data.id,

            })

        })
    }













    //Modifier une analyse

    modifierAnalyse() {
        var data = this.state.tabRecapAnalyse
        this.setState({
            btnBool: true,
            tabAnalyse: data,
            tabRecapAnalyse: []
        })
    }

    //Enregistre les modifications
    updatedListeAnalyse(e) {
        var data = this.state.tabAnalyse
        e.preventDefault()

        axios.post('http://localhost:8000/api/update_analyse', {
            'patient_id': this.state.patientId,
            'montant': this.state.montantTotal,
            'analyse_id': this.state.analyseIdUpdate,
            'data': this.state.tabAnalyse
        }).then((response) => {
            console.log(response)
            if (response.data == 'SUCCESS') {
                this.setState({
                    btnBool: false,
                    montantTotal: 0,
                    showMessage: 'Analyse modfié avec success',
                    tabRecapAnalyse: data,
                    tabAnalyse: []
                })
            }
        })

    }


    //Suppression de l'analyse entier 
    supptabAnalyse() {

        axios.post('http://localhost:8000/api/suppanalyse', {
            'patient_id': this.state.patientId,
            'montant': this.state.montantTotal,
            'data': this.state.tabRecapAnalyse,
            'analyse_id': this.state.analyseIdUpdate,
        }).then((response) => {
            if (response.data == 'SUCCESS') {
                this.setState({
                    tabAnalyse: [],
                    montantTotal: 0,
                    tabRecapAnalyse: [],
                    showMessage: 'Analyse supprimé avec success',

                })
            }
        })
    }


    //Valider l'analyse
    validerAnalyse() {

        axios.post('http://localhost:8000/api/mise_a_jour', {
            'patient_id': this.state.patientId,
            'montant': this.state.montantTotal,
            'analyse_id': this.state.analyseIdUpdate,
            'data': this.state.tabRecapAnalyse
        }).then((response) => {
            console.log(response.data)
            this.setState({
                btnValider: true,
                showMessage: 'Analyse validé avec success'
            })

        })

    }










    //Liste des analyse choisir dans le tableau
    renderRows() {
        var context = this;

        return this.state.tabAnalyse.map(function (data, index) {
            return (
                <tr key={index}> <th>{index}</th><td>{data.libelle_categorie}</td>
                    <td>{data.libelle_analyse} </td>
                    {/* <td>January 25</td> */}
                    <td className="color-danger">{data.prix_unitaire}</td>
                    <td>
                        <button className="btn btn-danger shadow btn-xs sharp" type="button" onClick={context.suppAnalyse.bind(context, index)}><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            );
        });
    }


    //Liste des analyses faits
    renderRowsP() {
        var context = this
        var dateAnalyse = ''

        return this.state.tabRecapAnalyse.length > 0 ? (
            <tr>
                <td><div className="d-flex align-items-center">
                    <span className="w-space-no">{this.state.nomPatient}</span></div></td>
                <td>
                    <table>
                        {this.state.tabRecapAnalyse.map(function (data, index) {
                            dateAnalyse = data.created_at
                            return <tr key={index} >{data.libelle_analyse}</tr>
                        })}

                    </table>
                </td>
                <td>{this.dateParse(dateAnalyse)}</td>
                {/* <td><div className="d-flex align-items-center"><i className="fa fa-circle text-success mr-1"></i> Successful</div></td> */}
                <td>
                    <div className="d-flex">
                        <button className="btn btn-primary shadow btn-xs sharp mr-1" onClick={this.modifierAnalyse.bind(this)} disabled={this.state.btnValider} ><i className="fa fa-pencil"></i></button>
                        <button className="btn btn-danger shadow btn-xs sharp mr-1" onClick={this.supptabAnalyse.bind(this)} disabled={this.state.btnValider}><i className="fa fa-trash"></i></button>
                        <button className="btn btn-info shadow btn-xs sharp mr-1" ><i className="fa fa-print"></i></button>
                        <button className="btn btn-dark shadow btn-xs sharp mr-1" onClick={this.validerAnalyse.bind(this)} ><i className="fa fa-check"></i></button>
                    </div>
                </td>
            </tr>
        ) : ''

    }











    render() {
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
                                    <form >
                                        <label className="col-sm-3 col-form-label col-form-label-sm">Patient :</label>
                                        <div className="form-group row  col-md-12">
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control" placeholder="Nom Du Patient" required value={this.state.nomPatient} onChange={this.onChangeNom.bind(this)} />
                                            </div>

                                            <div className="col-sm-3">
                                                <input type="text" className="form-control" placeholder="Age Du Patient" readOnly value={this.state.agePatient} />
                                            </div>

                                            <div className="col-sm-3">
                                                <input type="text" className="form-control" placeholder="Tel. Du Patient" readOnly value={this.state.telPatient} />
                                            </div>

                                            <div className="col-sm-3">
                                                <input type="text" className="form-control" placeholder="Adresse Du Patient" readOnly value={this.state.adressePatient} />
                                            </div>
                                        </div>

                                        <div className="form-group row col-sm-12">
                                            <ul className="list-group  list-group-flush col-sm-8 ">
                                                {this.listeDesPatients()}
                                            </ul>
                                        </div>


                                        <hr className="mb-5" />


                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" >Analyse :</label>
                                            <div className="col-sm-4">
                                                <select className="form-control" value={this.state.analyseId} onChange={this.onChangeSelect.bind(this)}>
                                                    <option>Choisir l'analyse</option>
                                                    {
                                                        this.state.analyses.map((data, index) => {
                                                            return <option key={data.id} value={index}>{data.libelle_analyse}</option>
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="col-sm-4">
                                                <input type="text" className="form-control" placeholder="Prix" autoComplete="off" readOnly value={this.state.prixUnnitaire} />
                                            </div>
                                            <div className="col-sm-2">
                                                <button type="button" className="btn btn-primary" onClick={this.handleClick.bind(this)} >+</button>
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
                                                                    {/* <th>Date</th> */}
                                                                    <th>Prix</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="idTab">
                                                                {this.renderRows()}
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <td colSpan="3"></td>
                                                                    <td>Montant Total : </td>
                                                                    <td>{this.state.montantTotal + '  FCFA'}</td>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {this.state.btnBool == false ?
                                            <div className="col-sm-10"><button type="button" className="btn btn-primary" onClick={this.sendInfo.bind(this)}>Enrégistré</button></div> :
                                            <div className="col-sm-10"><button type="button" className="btn btn-primary" onClick={this.updatedListeAnalyse.bind(this)}>Modifié</button></div>
                                        }

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




                {/* showmoal pour inserrer un nouveau patient */}

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
                                            <form onSubmit={this.submitpatient.bind(this)}>
                                                <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label">Nom :</label>
                                                    <div className="col-sm-8">
                                                        <input type="text" className="form-control" placeholder="Nom Du Patient" required value={this.state.nomPatient} onChange={(e) => this.setState({ nomPatient: e.target.value })} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label"> Prénom :</label>
                                                    <div className="col-sm-8">
                                                        <input type="text" className="form-control" placeholder=" Prénom Du Patient" required value={this.state.prenomPatient} onChange={(e) => this.setState({ prenomPatient: e.target.value })} />
                                                    </div>
                                                </div>


                                                <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label"> Adresse :</label>
                                                    <div className="col-sm-8">
                                                        <input type="text" className="form-control" placeholder=" Adresse Du Patient" required value={this.state.adressePatient} onChange={(e) => this.setState({ adressePatient: e.target.value })} />
                                                    </div>
                                                </div>



                                                <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label"> Tel :</label>
                                                    <div className="col-sm-8">
                                                        <input type="number" className="form-control" placeholder=" Tel Du Patient" required value={this.state.telPatient} onChange={(e) => this.setState({ telPatient: e.target.value })} />
                                                    </div>
                                                </div>


                                                <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label"> Age  :</label>
                                                    <div className="col-sm-8">
                                                        <input type="text" className="form-control" placeholder=" Age Du Patient" required value={this.state.agePatient} onChange={(e) => this.setState({ agePatient: e.target.value })} />
                                                    </div>
                                                </div>


                                                <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label"> Accompagnant  :</label>
                                                    <div className="col-sm-8">
                                                        <input type="text" className="form-control" placeholder=" Accompagnant Du Patient" required value={this.state.nomAccompagant} onChange={(e) => this.setState({ nomAccompagant: e.target.value })} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label">Tel. Accompagnant  :</label>
                                                    <div className="col-sm-8">
                                                        <input type="text" className="form-control" placeholder=" Tel Accompagnant Du Patient" required value={this.state.telAccompagnant} onChange={(e) => this.setState({ telAccompagnant: e.target.value })} />
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label">Obserrvation  :</label>
                                                    <div className="col-sm-8">
                                                        <textarea className="form-control" placeholder="Observation" value={this.state.observation} onChange={(e) => this.setState({ observation: e.target.value })} ></textarea>
                                                    </div>
                                                </div>


                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-danger light" data-dismiss="modal">Fermer</button>
                                                    <button type="submit" className="btn btn-primary" >Sauvegarder</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>




                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Liste des Analyses</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-responsive-md">
                                    <thead>
                                        <tr>
                                            {/* <th><strong>NO.</strong></th> */}
                                            <th><strong>Patient</strong></th>
                                            <th><strong>Analyse</strong></th>
                                            <th><strong>Date</strong></th>
                                            {/* <th><strong>Status</strong></th> */}
                                            <th><strong>Actions</strong></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderRowsP()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <PDFCaisse /> */}





            </Fragment>






        )
    }
}



export default AnalysePatient

if (document.getElementById('analysePatient')) {
    ReactDOM.render(<AnalysePatient />, document.getElementById('analysePatient'));
}

