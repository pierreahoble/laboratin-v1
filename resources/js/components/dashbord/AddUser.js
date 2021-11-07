import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


export class AddUser extends Component {


    constructor(props) {
        super(props)
        this.state = {
            nomUser: '',
            prenomUser: '',
            telUser: '',
            emailUser: '',
            pseudoUser: '',
            analyseId: '',
            showMessage: '',
            champ: false,
            successMessage: false,
            analyses: [],
            tabEditer: []
        }
    }

    //message d'erreur

    showMessageSucces() {
        toast.success(this.state.showMessage, {
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

    showMessageError() {
        toast.error(this.state.showMessage, {
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


    componentDidMount() {

        axios.get('http://localhost:8000/api/liste_des_analyses')
            .then((response) => {
                var data = response.data
                this.setState({
                    analyses: data
                })
            }).catch((errors) => {
                console.log(errors)
            })

    }


    componentDidUpdate() {
        if (this.state.champ) {
            this.showMessageError()
            this.setState({
                champ: false
            })
        }


        if (this.state.successMessage) {
            this.showMessageSucces()
            this.setState({
                successMessage: false
            })
        }




    }

    //Au changement du select 

    onChangeSelect(e) {
        var data = this.state.tabEditer

        if (!data.includes(this.state.analyses[e.target.value])) {
            data.push(this.state.analyses[e.target.value])
            this.setState({
                tabEditer: data,
                analyseId: e.target.value
            })
        }

    }

    //Suppression dans le tableau
    suppAnalyse(index) {
        var data = this.state.tabEditer
        data.splice(index, 1)
        this.setState({
            tabEditer: data
        })
    }

    //Verification des champs
    verifierChamp() {
        if (_.isEmpty(this.state.nomUser.trim())) {
            this.setState({
                champ: true,
                showMessage: 'Veiullez renseigner le nom utilisateur obligatoire',
            })
            return 0
        }

        else if (_.isEmpty(this.state.prenomUser.trim())) {
            this.setState({
                champ: true,
                showMessage: 'Veiullez renseigner le prenom utilisateur obligatoire',
            })
            return 0
        }


        else if (_.isEmpty(this.state.emailUser.trim())) {
            this.setState({
                champ: true,
                showMessage: "Veiullez renseigner l'adresse email utilisateur obligatoire",
            })
            return 0
        }

        else if (_.isEmpty(this.state.telUser.trim())) {
            this.setState({
                champ: true,
                showMessage: 'Veiullez renseigner le Téléphone utilisateur obligatoire',
            })
            return 0
        }


        else if (_.isEmpty(this.state.pseudoUser.trim())) {
            this.setState({
                champ: true,
                showMessage: 'Veiullez renseigner le Pseudo utilisateur obligatoire',
            })
            return 0
        }

        // else if (_.isEmpty(this.state.tabEditer.length)) {
        //     this.setState({
        //         champ: true,
        //         showMessage: 'Veiullez renseigner une analyse pour cet utilisateur',
        //     })
        //     return 0
        // }



    }

    //Envoi du formulaire

    sendInfo(e) {
        e.preventDefault()
        var context = this

        this.verifierChamp()

        axios.post('http://localhost:8000/api/add_user', {
            'nom_user': this.state.nomUser,
            'prenom_user': this.state.prenomUser,
            'email': this.state.emailUser,
            'tel_user': this.state.telUser,
            'pseudo': this.state.pseudoUser,
            'data': this.state.tabEditer
        }).then((response) => {
            console.log(response)
            if (response.data === 'SUCCESS') {
                console.log(response)
                this.setState({
                    nomUser: '',
                    prenomUser: '',
                    telUser: '',
                    emailUser: '',
                    pseudoUser: '',
                    tabEditer: [],
                    successMessage: true,
                    showMessage: 'Utilisateur ajouter avec success'
                })
            }
        }).catch((errors) => {
            // console.log(errors.message)
            if (errors.message) {
                this.setState({
                    champ: true,
                    showMessage: 'Cet utilisateur existe deja"  '
                })
            }

        })



    }








    //Rendu du tableau 

    renderRows() {

        var context = this

        return this.state.tabEditer.map(function (data, index) {
            return (
                <tr key={data.id}>
                    <th>{index}</th>
                    <td>{data.libelle_analyse}</td>
                    <td>
                        <button type="button" className="btn btn-danger shadow btn-xs sharp mr-1" onClick={context.suppAnalyse.bind(context, index)} ><i className="fa fa-trash"></i></button>
                    </td>

                </tr>

            )
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
                                <h4 className="card-title">Remplir le formulaire </h4>
                            </div>
                            <div className="card-body">
                                <div className="basic-form">
                                    <form onSubmit={this.sendInfo.bind(this)}>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Nom</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Nom utilisateur" required value={this.state.nomUser} onChange={(e) => this.setState({ nomUser: e.target.value })} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Prenom :</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Prenom utilisateur" required value={this.state.prenomUser} onChange={(e) => this.setState({ prenomUser: e.target.value })} />
                                            </div>
                                        </div>


                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Email:</label>
                                            <div className="col-sm-9">
                                                <input type="email" className="form-control" placeholder="Email utilisateur" required value={this.state.emailUser} onChange={(e) => this.setState({ emailUser: e.target.value })} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Téléphone:</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Téléphone utilisateur" required value={this.state.telUser} onChange={(e) => this.setState({ telUser: e.target.value })} />
                                            </div>
                                        </div>


                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Pseudo :</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" placeholder="Pseudo utilisateur" required value={this.state.pseudoUser} onChange={(e) => this.setState({ pseudoUser: e.target.value })} />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Analyse à Editer :</label>
                                            <div className="col-sm-9">
                                                <select className="form-control" value={this.state.analyseId} onChange={this.onChangeSelect.bind(this)}>
                                                    {this.state.analyses.map(function (data, index) {
                                                        return <option key={data.id} value={index}> {data.libelle_analyse}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>


                                        <div className="col-lg-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h4 className="card-title">Les analyse </h4>
                                                </div>
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-responsive-sm">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Analyse</th>
                                                                    <th>Enlever</th>
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






                                        <div className="form-group row">
                                            <div className="col-sm-10">
                                                <button type="submit" className="btn btn-primary">Enrégistrer</button>
                                            </div>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>

            </>
        )
    }
}

export default AddUser

if (document.getElementById('adduser')) {
    ReactDOM.render(<AddUser />, document.getElementById('adduser'));
}
