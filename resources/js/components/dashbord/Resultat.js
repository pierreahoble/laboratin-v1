import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { toast } from 'react-toastify'




export class Resultat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false,
            code: '',
            analyseId: '',
            nomPatient: '',
            agePatient: '',
            dateAnalyse: '',
            trouver: false,
            resultatAg: '',
            kitAg: '',
            techAg: '',
            resultatTph: '',
            kitTph: '',
            techTph: '',
            resultatVdr: '',
            kitVdr: '',
            techVdr: '',
            resultatTCA: '',
            patientTCASA: '',
            patientTCASO: '',
            resultatTP: '',
            patientTPSA: '',
            patientTPSO: '',
            resultatINR: '',
            patientINRSA: '',
            patientINRSO: '',
            resultatTS: '',
            patientTSSA: '',
            patientTSSO: '',
            resultatFT3: '',
            valeurFT3: '',
            resultatFT4: '',
            valeurFT4: '',
            resultatTSH: '',
            valeurTSH: '',
            groupe: '',
            rhesus: '',
            igmT: '',
            iggT: '',
            doseT: '',
            igmR: '',
            iggR: '',
            doseR: '',
            listeAnalyse: [],
            patient: [],
            userAnalyse: []
        }

        this.renderAllAnalyse = this.renderAllAnalyse.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/init_user_analyse')
            .then((response) => {
                console.log(response)
                var data = response.data
                this.setState({
                    userAnalyse: data
                })
            })
    }

    componentDidUpdate() {
        if (this.state.show) {
            this.showMessage()
            this.setState({ show: false })
        }
    }

    //Message succes
    showMessage() {
        toast.success('Resultat analyse enregistrer avec success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        });
    }





    seachPatient(e) {

        // console.log(e.target.value)
        this.setState({ code: e.target.value })

        if (this.state.code > 3) {
            axios.post('http://localhost:8000/api/analyse_patient_resultat', {
                'code': this.state.code
            }).then((response) => {
                var data = response.data
                console.log(data)
                this.setState({
                    trouver: true,
                    listeAnalyse: data
                })
            })
        }

    }

    //Formater une date
    dateParse = (dateP) => {
        let newDate = new Date(dateP).toLocaleDateString('fr-FR', {
            month: "short",
            year: "numeric",
            day: "numeric"

        })
        return newDate
    }

    remplirChamp(index) {
        // alert(index)
        var data = this.state.listeAnalyse[index]
        var code = data.code
        var id = data.id
        var nom = data.patient.nom_patient + ' ' + data.patient.prenom_patient
        var age = data.patient.age_patient
        var dateA = this.dateParse(data.patient.created_at)
        console.log(data)
        this.setState({
            trouver: false,
            analyseId: id,
            code: code,
            nomPatient: nom,
            agePatient: age,
            dateAnalyse: dateA,
            listeAnalyse: data
        })
    }


    //Liste de la recherche
    listeDesAnalyse() {
        var context = this;
        if (this.state.trouver) {
            return this.state.listeAnalyse.map(function (data, index) {
                return (<div key={index}> <li className="list-group-item alert alert-success" onClick={context.remplirChamp.bind(context, index)}>{data.code}  {data.patient.nom_patient}  {data.patient.prenom_patient}</li>
                </div>)
                //  <span >{data.patient.nom_patient} {data.patient.prenom_patient}</span>
            })
        }
    }


    //Submit info analyse 
    submitH() {

        if (this.state.code === '') {
            alert('Choisissez le code analyse')
        } else {

            axios.post('http://localhost:8000/api/add_hemostase', {
                'code': this.state.code,
                'analyse_id': this.state.analyseId,
                'resultatTCA': this.state.resultatTCA,
                'patientTCASA': this.state.patientTCASA,
                'patientTCASO': this.state.patientTCASO,
                'resultatTP': this.state.resultatTP,
                'patientTPSA': this.state.patientTPSA,
                'patientTPSO': this.state.patientTPSO,
                'resultatINR': this.state.resultatINR,
                'patientINRSA': this.state.patientINRSA,
                'patientINRSO': this.state.patientINRSO,
                'resultatTS': this.state.resultatTS,
                'patientTSSA': this.state.patientTSSA,
                'patientTSSO': this.state.patientTSSO,
            }).then((response) => {
                this.setState({
                    resultatTCA: '',
                    patientTCASA: '',
                    patientTCASO: '',
                    resultatTP: '',
                    patientTPSA: '',
                    patientTPSO: '',
                    resultatINR: '',
                    patientINRSA: '',
                    patientINRSO: '',
                    resultatTS: '',
                    patientTSSA: '',
                    patientTSSO: '',
                    show: true
                })
            })



        }



    }


    submitI() {
        if (this.state.code === '') {
            alert('Choisissez le code analyse')
        } else {
            axios.post('http://localhost:8000/api/add_immuno', {
                'code': this.state.code,
                'analyse_id': this.state.analyseId,
                'resultatAg': this.state.resultatAg,
                'kitAg': this.state.kitAg,
                'techAg': this.state.techAg,
                'resultatTph': this.state.resultatTph,
                'kitTph': this.state.kitTph,
                'resultatVdr': this.state.resultatVdr,
                'kitVdr': this.state.kitVdr,
                'techVdr': this.state.techVdr,
                'techTph': this.state.techTph,
            }).then((response) => {
                this.setState({
                    show: true
                })
            })
        }
    }


    submitT() {
        if (this.state.code === '') {
            alert('Choisissez le code analyse')
        } else {
            axios.post('http://localhost:8000/api/add_tyrod', {
                'code': this.state.code,
                'analyse_id': this.state.analyseId,
                'resultatFT3': this.state.resultatFT3,
                'valeurFT3': this.state.valeurFT3,
                'resultatFT4': this.state.resultatFT4,
                'valeurFT4': this.state.valeurFT4,
                'resultatTSH': this.state.resultatTSH,
                'valeurTSH': this.state.valeurTSH,
            }).then((response) => {

                this.setState({
                    resultatFT3: '',
                    valeurFT3: '',
                    resultatFT4: '',
                    valeurFT4: '',
                    resultatTSH: '',
                    valeurTSH: '',
                    show: true
                })
            })
        }




    }

    submitG() {

        if (this.state.code === '') {
            alert('Choisissez le code analyse')
        } else {
            axios.post('http://localhost:8000/api/add_groupe', {
                'code': this.state.code,
                'analyse_id': this.state.analyseId,
                'groupe': this.state.groupe,
                'rhesus': this.state.rhesus,
            }).then((reponse) => {
                this.setState({
                    show: true
                })
            })
        }

    }

    submitR() {

        if (this.state.code === '') {
            alert('Choisissez le code analyse')
        } else {
            axios.post('http://localhost:8000/api/add_rub', {
                'code': this.state.code,
                'analyse_id': this.state.analyseId,
                'igmT': this.state.igmT,
                'iggT': this.state.iggT,
                'doseT': this.state.doseT,
                'igmR': this.state.igmR,
                'iggR': this.state.iggR,
                'doseR': this.state.doseR,

            }).then((reponse) => {
                this.setState({
                    show: true
                })
            })
        }

    }























    //Rendre les analyses avec conditions
    renderAllAnalyse() {

        var context = this
        return this.state.userAnalyse.map((data, index) => {
            if (data.nature_analyse.libelle_analyse === "IMMUNO_SEROLOGIE") {

                return <div key={data.nature_analyse.id}>
                    <div className="col-lg-12" >
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">ANALYSE IMMUNO-SEROLOGIE</h4>
                            </div>
                            <div className="card-body">
                                <div className="basic-form">
                                    <form >
                                        <div className="form-group row">
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Résultat AgHBs :</label>
                                                <select className="form-control" value={this.state.resultatAg} onChange={(e) => this.setState({ resultatAg: e.target.value })} >
                                                    <option>Choisir</option>
                                                    <option>Positif</option>
                                                    <option>Negatif</option>
                                                </select>

                                            </div>
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Kit AgHBs:</label>
                                                <select className="form-control" value={this.state.kitAg} onChange={(e) => this.setState({ kitAg: e.target.value })} >
                                                    <option>Choisir</option>
                                                    <option>PRECHECK</option>
                                                    <option>Cromatest</option>
                                                    <option>Labbit</option>
                                                </select>

                                            </div>
                                            <div className="col-sm-4">
                                                <label className="col-form-label" > Technique AgHBs :</label>
                                                <select className="form-control" value={this.state.techAg} onChange={(e) => this.setState({ techAg: e.target.value })}>
                                                    <option>Choisir</option>
                                                    <option>Immunochromatographie</option>
                                                    <option>Hémagglutination</option>
                                                    <option>Agglutination au Latex</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Résultat TPHA :</label>
                                                <select className="form-control" value={this.state.resultatTph} onChange={(e) => this.setState({ resultatTph: e.target.value })} >
                                                    <option>Choisir</option>
                                                    <option>Positif</option>
                                                    <option>Negatif</option>
                                                </select>

                                            </div>
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Kit TPHA:</label>
                                                <select className="form-control" value={this.state.kitTph} onChange={(e) => this.setState({ kitTph: e.target.value })} >
                                                    <option>Choisir</option>
                                                    <option>PRECHECK</option>
                                                    <option>Cromatest</option>
                                                    <option>Labbit</option>
                                                </select>

                                            </div>
                                            <div className="col-sm-4">
                                                <label className="col-form-label" > Technique TPHA:</label>
                                                <select className="form-control" value={this.state.techTph} onChange={(e) => this.setState({ techTph: e.target.value })}>
                                                    <option>Choisir</option>
                                                    <option>Immunochromatographie</option>
                                                    <option>Hémagglutination</option>
                                                    <option>Agglutination au Latex</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Résultat VDRL :</label>
                                                <select className="form-control" value={this.state.resultatVdr} onChange={(e) => this.setState({ resultatVdr: e.target.value })}>
                                                    <option>Choisir</option>
                                                    <option>Positif</option>
                                                    <option>Negatif</option>
                                                </select>

                                            </div>
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Kit VDRL:</label>
                                                <select className="form-control" value={this.state.kitVdr} onChange={(e) => this.setState({ kitVdr: e.target.value })}>
                                                    <option>Choisir</option>
                                                    <option>PRECHECK</option>
                                                    <option>Cromatest</option>
                                                    <option>Labbit</option>
                                                </select>

                                            </div>
                                            <div className="col-sm-4">
                                                <label className="col-form-label" > Technique VDRL:</label>
                                                <select className="form-control" value={this.state.techVdr} onChange={(e) => this.setState({ techVdr: e.target.value })}>
                                                    <option>Choisir</option>
                                                    <option>Immunochromatographie</option>
                                                    <option>Hémagglutination</option>
                                                    <option>Agglutination au Latex</option>
                                                </select>

                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <button type="button" className="btn btn-primary btn-block" onClick={this.submitI.bind(this)}> Ajouter</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }
            else if (data.nature_analyse.libelle_analyse === "TOXOPLASMOSE") {
                return <div key={data.nature_analyse.id}>
                    <div className="col-lg-12" key={data.nature_analyse.id}>
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">ANALYSE - TOXOPLASMOSE RUBEOLE </h4>
                            </div>
                            <div className="card-body">
                                <div className="basic-form">
                                    <form >
                                        <div className="form-group row">
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >IgM Toxoplasmose :</label>
                                                {/* <input type="text" className="form-control" placeholder="IgM" autoComplete="off" /> */}
                                                <select className="form-control" value={this.state.igmT} onChange={(e) => this.setState({ igmT: e.target.value })} >
                                                    <option>Choisr IgM</option>
                                                    <option>Positif</option>
                                                    <option>Negatif</option>
                                                </select>

                                            </div>
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >IgG Toxoplasmose :</label>
                                                <select className="form-control" value={this.state.iggT} onChange={(e) => this.setState({ iggT: e.target.value })}>
                                                    <option>Choisir IgG</option>
                                                    <option>Positif</option>
                                                    <option>Negatif</option>
                                                </select>

                                            </div>
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Dose Toxoplasmose:</label>
                                                <input type="text" className="form-control" placeholder="Dose en IU/ml" autoComplete="off" value={this.state.doseT} onChange={(e) => this.setState({ doseT: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >IgM Rubéole :</label>
                                                {/* <input type="text" className="form-control" placeholder="IgM" autoComplete="off" /> */}
                                                <select className="form-control" value={this.state.igmR} onChange={(e) => this.setState({ igmR: e.target.value })}>
                                                    <option>Choisr IgM</option>
                                                    <option>Positif</option>
                                                    <option>Negatif</option>
                                                </select>

                                            </div>
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >IgG Rubéole :</label>
                                                <select className="form-control" value={this.state.iggR} onChange={(e) => this.setState({ iggR: e.target.value })}>
                                                    <option>Choisir IgG</option>
                                                    <option>Positif</option>
                                                    <option>Negatif</option>
                                                </select>

                                            </div>
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Dose Rubéole :</label>
                                                <input type="text" className="form-control" placeholder="Dose en IU/ml" autoComplete="off" value={this.state.doseR} onChange={(e) => this.setState({ doseR: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <button type="button" className="btn btn-primary" onClick={this.submitR.bind(this)}  > Ajouter</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            else if (data.nature_analyse.libelle_analyse === "TYRODIEN") {
                return <div key={data.nature_analyse.id}>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">ANALYSE TYRODIEN </h4>
                            </div>
                            <div className="card-body">
                                <div className="basic-form">
                                    <form >
                                        <div className="form-group row">
                                            <div className="col-sm-6">
                                                <label className="col-form-label" >Résultat FT3:</label>
                                                <input type="text" className="form-control" placeholder="4,8" autoComplete="off" value={this.state.resultatFT3} onChange={(e) => this.setState({ resultatFT3: e.target.value })} />
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="col-form-label" >Valeur de Référence FT3:</label>
                                                <input type="text" className="form-control" placeholder="Dose en IU/ml" autoComplete="off" value={this.state.valeurFT3} onChange={(e) => this.setState({ valeurFT3: e.target.value })} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-6">
                                                <label className="col-form-label" >Résultat FT4:</label>
                                                <input type="text" className="form-control" placeholder="4,8" autoComplete="off" value={this.state.resultatFT4} onChange={(e) => this.setState({ resultatFT4: e.target.value })} />
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="col-form-label" >Valeur de Référence FT4:</label>
                                                <input type="text" className="form-control" placeholder="Dose en IU/ml" autoComplete="off" value={this.state.valeurFT4} onChange={(e) => this.setState({ valeurFT4: e.target.value })} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-sm-6">
                                                <label className="col-form-label" >Résultat TSH:</label>
                                                <input type="text" className="form-control" placeholder="4,8" autoComplete="off" value={this.state.resultatTSH} onChange={(e) => this.setState({ resultatTSH: e.target.value })} />
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="col-form-label" >Valeur de Référence TSH:</label>
                                                <input type="text" className="form-control" placeholder="Dose en IU/ml" autoComplete="off" value={this.state.valeurTSH} onChange={(e) => this.setState({ valeurTSH: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <button type="button" className="btn btn-primary btn-block" onClick={this.submitT.bind(this)}> Ajouter</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            else if (data.nature_analyse.libelle_analyse === "GROUPAGE SANGUIN") {
                return <div key={data.nature_analyse.id}>
                    <div className="col-lg-12" >
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">ANALYSE GROUPAGE SANGUIN-RHESUS</h4>
                            </div>
                            <div className="card-body">
                                <div className="basic-form">
                                    <form >
                                        <div className="form-group row">
                                            <div className="col-sm-6">
                                                <label className="col-form-label" >Groupage :</label>
                                                <select className="form-control" value={this.state.groupe} onChange={(e) => this.setState({ groupe: e.target.value })}>
                                                    <option>Choisr Les Paramètres</option>
                                                    <option>A</option>
                                                    <option>B</option>
                                                    <option>AB</option>
                                                    <option>O</option>
                                                </select>

                                            </div>
                                            <div className="col-sm-6">
                                                <label className="col-form-label" >Rhesus :</label>
                                                <select className="form-control" value={this.state.rhesus} onChange={(e) => this.setState({ rhesus: e.target.value })}>
                                                    <option>Choisr Les Paramètres</option>
                                                    <option>+</option>
                                                    <option>-</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <button type="button" className="btn btn-primary btn-block" onClick={this.submitG.bind(this)}> Ajouter</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }

            else if (data.nature_analyse.libelle_analyse === "HOSMOTASE") {
                return <div key={data.nature_analyse.id}>
                    <div className="col-lg-12" >
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">ANALYSE HEMOSTASE</h4>
                            </div>
                            <div className="card-body">
                                <div className="basic-form">
                                    <form >
                                        <div className="form-group row">
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Resultats (TCA) :</label>
                                                <input className="form-control" value={this.state.resultatTCA} onChange={(e) => this.setState({ resultatTCA: e.target.value })} />

                                            </div>
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Patient sans traitement  :</label>
                                                <input className="form-control" value={this.state.patientTCASA} onChange={(e) => this.setState({ patientTCASA: e.target.value })} />
                                            </div>

                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Patient sous traitement  :</label>
                                                <input className="form-control" value={this.state.patientTCASO} onChange={(e) => this.setState({ patientTCASO: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Resultats (TP) :</label>
                                                <input className="form-control" value={this.state.resultatTP} onChange={(e) => this.setState({ resultatTP: e.target.value })} />

                                            </div>
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Patient sans traitement  :</label>
                                                <input className="form-control" value={this.state.patientTPSA} onChange={(e) => this.setState({ patientTPSA: e.target.value })} />
                                            </div>

                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Patient sous traitement  :</label>
                                                <input className="form-control" value={this.state.patientTPSO} onChange={(e) => this.setState({ patientTPSO: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Resultats (INR) :</label>
                                                <input className="form-control" value={this.state.resultatINR} onChange={(e) => this.setState({ resultatINR: e.target.value })} />

                                            </div>
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Patient sans traitement  :</label>
                                                <input className="form-control" value={this.state.patientINRSA} onChange={(e) => this.setState({ patientINRSA: e.target.value })} />
                                            </div>

                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Patient sous traitement  :</label>
                                                <input className="form-control" value={this.state.patientINRSO} onChange={(e) => this.setState({ patientINRSO: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Resultats (TS) :</label>
                                                <input className="form-control" value={this.state.resultatTS} onChange={(e) => this.setState({ resultatTS: e.target.value })} />

                                            </div>
                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Patient sans traitement  :</label>
                                                <input className="form-control" value={this.state.patientTSSA} onChange={(e) => this.setState({ patientTSSA: e.target.value })} />
                                            </div>

                                            <div className="col-sm-4">
                                                <label className="col-form-label" >Patient sous traitement  :</label>
                                                <input className="form-control" value={this.state.patientTSSO} onChange={(e) => this.setState({ patientTSSO: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <button type="button" className="btn btn-primary btn-block" onClick={this.submitH.bind(this)} > Ajouter</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        })


    }






























    render() {
        return (
            <>

                <div className="page-titles">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Ajouter </a></li>
                        <li className="breadcrumb-item active"><a href="#">Un Utilisateur </a></li>
                    </ol>
                </div>


                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Formulaire Analyse </h4>
                            </div>
                            <div className="card-body">
                                <div className="basic-form">
                                    <div className="form-group row col-md-12">
                                        <div className="col-sm-3">
                                            <label className="col-form-label col-form-label-sm">Code Reçu :</label>
                                            <input type="text" className="form-control" placeholder="code" value={this.state.code} onChange={this.seachPatient.bind(this)} />
                                        </div>

                                        <div className="col-sm-3">
                                            <label className="col-form-label col-form-label-sm">Nom Du Patient :</label>
                                            <input type="text" className="form-control" placeholder="Nom du Patient" readOnly value={this.state.nomPatient} />
                                        </div>
                                        <div className="col-sm-3">
                                            <label className="col-form-label col-form-label-sm">Age Du Patient:</label>
                                            <input type="email" className="form-control" placeholder="Age du pateint" readOnly value={this.state.agePatient} />
                                        </div>
                                        <div className="col-sm-3">
                                            <label className="col-form-label col-form-label-sm">Date Analyse :</label>
                                            <input type="text" className="form-control" placeholder="Date Analyse" required value={this.state.dateAnalyse} />
                                        </div>
                                    </div>

                                    {this.listeDesAnalyse()}

                                    <div className="mt-5 mt-5">
                                        <hr />
                                    </div>

                                    {this.renderAllAnalyse()}







                                </div>
                            </div>
                        </div>
                    </div>





                </div>

            </>
        )
    }
}

export default Resultat


if (document.getElementById('resultatAnalyse')) {
    ReactDOM.render(<Resultat />, document.getElementById('resultatAnalyse'))
};

