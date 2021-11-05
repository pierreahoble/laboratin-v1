import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

export class Resultat extends Component {


    constructor(props) {
        super(props)

        this.state = {
            code: '',
            nomPatient: '',
            agePatient: '',
            dateAnalyse: '',
            trouver: false,
            listeAnalyse: [],
            patient: [],
            controleAnalyse: ['']
        }
    }

    componentDidMount() {

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
        var nom = data.patient.nom_patient + ' ' + data.patient.prenom_patient
        var age = data.patient.age_patient
        var dateA = this.dateParse(data.patient.created_at)
        console.log(data)
        this.setState({
            trouver: false,
            nomPatient: nom,
            agePatient: age,
            dateAnalyse: dateA,
            listeAnalyse: data
        })
    }


    listeDesAnalyse() {
        var context = this;
        if (this.state.trouver) {
            return this.state.listeAnalyse.map(function (data, index) {
                return (<div key={index}> <li className="list-group-item alert alert-dark" onClick={context.remplirChamp.bind(context, index)}>{data.code}  {data.patient.nom_patient}  {data.patient.prenom_patient}</li>
                </div>)
                //  <span >{data.patient.nom_patient} {data.patient.prenom_patient}</span>
            })
        }
    }

    //Rendre les analyses avec conditions
    renderAllAnalyse() {

        return this.renderToxo()
    }













    //Les analyse


    renderToxo() {


        return <div className="col-lg-12">
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
                                    <select className="form-control">
                                        <option>Choisr IgM</option>
                                        <option>Positif</option>
                                        <option>Negatif</option>
                                    </select>

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" >IgG Toxoplasmose :</label>
                                    <select className="form-control">
                                        <option>Choisir IgG</option>
                                        <option>Positif</option>
                                        <option>Negatif</option>
                                    </select>

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Dose Toxoplasmose:</label>
                                    <input type="text" className="form-control" placeholder="Dose en IU/ml" autoComplete="off" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-4">
                                    <label className="col-form-label" >IgM Rubéole :</label>
                                    {/* <input type="text" className="form-control" placeholder="IgM" autoComplete="off" /> */}
                                    <select className="form-control">
                                        <option>Choisr IgM</option>
                                        <option>Positif</option>
                                        <option>Negatif</option>
                                    </select>

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" >IgG Rubéole :</label>
                                    <select className="form-control">
                                        <option>Choisir IgG</option>
                                        <option>Positif</option>
                                        <option>Negatif</option>
                                    </select>

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Dose Rubéole :</label>
                                    <input type="text" className="form-control" placeholder="Dose en IU/ml" autoComplete="off" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <button type="button" className="btn btn-primary"  > Ajouter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    }



    renderTyrodien() {

        return <div className="col-lg-12">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">BILAN TYRODIEN </h4>
                </div>
                <div className="card-body">
                    <div className="basic-form">
                        <form >
                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label className="col-form-label" >Résultat FT3:</label>
                                    <input type="text" className="form-control" placeholder="4,8" autoComplete="off" />
                                </div>
                                <div className="col-sm-6">
                                    <label className="col-form-label" >Valeur de Référence FT3:</label>
                                    <input type="text" className="form-control" placeholder="Dose en IU/ml" autoComplete="off" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label className="col-form-label" >Résultat FT4:</label>
                                    <input type="text" className="form-control" placeholder="4,8" autoComplete="off" />
                                </div>
                                <div className="col-sm-6">
                                    <label className="col-form-label" >Valeur de Référence FT4:</label>
                                    <input type="text" className="form-control" placeholder="Dose en IU/ml" autoComplete="off" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label className="col-form-label" >Résultat TSH:</label>
                                    <input type="text" className="form-control" placeholder="4,8" autoComplete="off" />
                                </div>
                                <div className="col-sm-6">
                                    <label className="col-form-label" >Valeur de Référence TSH:</label>
                                    <input type="text" className="form-control" placeholder="Dose en IU/ml" autoComplete="off" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-primary btn-block"> Ajouter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }



    renderImmuno() {

        return <div className="col-lg-12">
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
                                    <select className="form-control">
                                        {/* <option>Choisr Les Paramètres</option> */}
                                        <option>Positif</option>
                                        <option>Negatif</option>
                                    </select>

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Kit AgHBs:</label>
                                    <select className="form-control">
                                        {/* <option>Choisr Les Paramètres</option> */}
                                        <option>PRECHECK</option>
                                        <option>Cromatest</option>
                                        <option>Labbit</option>
                                    </select>

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" > Technique AgHBs :</label>
                                    <select className="form-control">
                                        <option>Immunochromatographie</option>
                                        <option>Hémagglutination</option>
                                        <option>Agglutination au Latex</option>
                                    </select>

                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Résultat TPHA :</label>
                                    <select className="form-control">
                                        {/* <option>Choisr Les Paramètres</option> */}
                                        <option>Positif</option>
                                        <option>Negatif</option>
                                    </select>

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Kit TPHA:</label>
                                    <select className="form-control">
                                        {/* <option>Choisr Les Paramètres</option> */}
                                        <option>PRECHECK</option>
                                        <option>Cromatest</option>
                                        <option>Labbit</option>
                                    </select>

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" > Technique TPHA:</label>
                                    <select className="form-control">
                                        <option>Immunochromatographie</option>
                                        <option>Hémagglutination</option>
                                        <option>Agglutination au Latex</option>
                                    </select>

                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Résultat VDRL :</label>
                                    <select className="form-control">
                                        {/* <option>Choisr Les Paramètres</option> */}
                                        <option>Positif</option>
                                        <option>Negatif</option>
                                    </select>

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Kit VDRL:</label>
                                    <select className="form-control">
                                        {/* <option>Choisr Les Paramètres</option> */}
                                        <option>PRECHECK</option>
                                        <option>Cromatest</option>
                                        <option>Labbit</option>
                                    </select>

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" > Technique VDRL:</label>
                                    <select className="form-control">
                                        <option>Immunochromatographie</option>
                                        <option>Hémagglutination</option>
                                        <option>Agglutination au Latex</option>
                                    </select>

                                </div>
                            </div>

                            <div className="col-sm-4">
                                <button type="button" className="btn btn-primary btn-block"> Ajouter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    }


    renderImmunoTp() {

        return <div className="col-lg-12">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">ANALYSE IMMUNO-SEROLOGIE</h4>
                </div>
                <div className="card-body">
                    <div className="basic-form">
                        <form >
                            <div className="form-group row">
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Résultat :</label>
                                    <select className="form-control">
                                        {/* <option>Choisr Les Paramètres</option> */}
                                        <option>Positif</option>
                                        <option>Negatif</option>
                                    </select>

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Kit :</label>
                                    <select className="form-control">
                                        {/* <option>Choisr Les Paramètres</option> */}
                                        <option>PRECHECK</option>
                                        <option>Cromatest</option>
                                        <option>Labbit</option>
                                    </select>

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" > Technique :</label>
                                    <select className="form-control">
                                        <option>Immunochromatographie</option>
                                        <option>Hémagglutination</option>
                                        <option>Agglutination au Latex</option>
                                    </select>

                                </div>
                            </div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-primary btn-block"> Ajouter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    }


    renderImmunoVd() {
        return <div className="col-lg-12">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">ANALYSE IMMUNO-SEROLOGIE  VDRL</h4>
                </div>
                <div className="card-body">
                    <div className="basic-form">
                        <form >
                            <div className="form-group row">
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Résultat :</label>
                                    <select className="form-control">
                                        {/* <option>Choisr Les Paramètres</option> */}
                                        <option>Positif</option>
                                        <option>Negatif</option>
                                    </select>

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Kit :</label>
                                    <select className="form-control">
                                        {/* <option>Choisr Les Paramètres</option> */}
                                        <option>PRECHECK</option>
                                        <option>Cromatest</option>
                                        <option>Labbit</option>
                                    </select>

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" > Technique :</label>
                                    <select className="form-control">
                                        <option>Immunochromatographie</option>
                                        <option>Hémagglutination</option>
                                        <option>Agglutination au Latex</option>
                                    </select>

                                </div>
                            </div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-primary btn-block"> Ajouter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    }



    renderGroupage() {
        return <div className="col-lg-12">
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
                                    <select className="form-control">
                                        {/* <option>Choisr Les Paramètres</option> */}
                                        <option>A</option>
                                        <option>B</option>
                                        <option>AB</option>
                                        <option>O</option>
                                    </select>

                                </div>
                                <div className="col-sm-6">
                                    <label className="col-form-label" >Rhesus :</label>
                                    <select className="form-control">
                                        {/* <option>Choisr Les Paramètres</option> */}
                                        <option>+</option>
                                        <option>-</option>
                                    </select>

                                </div>
                            </div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-primary btn-block"> Ajouter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    }


    renderhemostase() {
        return <div className="col-lg-12">
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
                                    <input className="form-control" />

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Patient sans traitement  :</label>
                                    <input className="form-control" />
                                </div>

                                <div className="col-sm-4">
                                    <label className="col-form-label" >Patient sous traitement  :</label>
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Resultats (TP) :</label>
                                    <input className="form-control" />

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Patient sans traitement  :</label>
                                    <input className="form-control" />
                                </div>

                                <div className="col-sm-4">
                                    <label className="col-form-label" >Patient sous traitement  :</label>
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Resultats (INR) :</label>
                                    <input className="form-control" />

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Patient sans traitement  :</label>
                                    <input className="form-control" />
                                </div>

                                <div className="col-sm-4">
                                    <label className="col-form-label" >Patient sous traitement  :</label>
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Resultats (TS) :</label>
                                    <input className="form-control" />

                                </div>
                                <div className="col-sm-4">
                                    <label className="col-form-label" >Patient sans traitement  :</label>
                                    <input className="form-control" />
                                </div>

                                <div className="col-sm-4">
                                    <label className="col-form-label" >Patient sous traitement  :</label>
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-primary btn-block"> Ajouter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
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

