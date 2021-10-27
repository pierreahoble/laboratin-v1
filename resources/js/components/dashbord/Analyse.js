import React from 'react'
import ReactDOM from 'react-dom';
import { Fragment } from 'react';

const Analyse = () => {

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


            {/* <div className="row">
                <div className="form-group row  col-md-6">
                    <label className="col-sm-3 col-form-label col-form-label-sm">Nom :</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="Nom Du Patient" />
                    </div>
                </div>

            </div> */}




            <div className="row">

                <div className="col-xl-12 col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">ANALYSE - PATIENT</h4>
                        </div>
                        <div className="card-body">
                            <div className="basic-form">
                                <form>

                                    <label className="col-sm-3 col-form-label col-form-label-sm">Patient :</label>
                                    <div className="form-group row  col-md-12">
                                        <div className="col-sm-3">
                                            <input type="text" className="form-control" placeholder="Prénom Du Patient" />
                                        </div>

                                        <div className="col-sm-3">
                                            <input type="text" className="form-control" placeholder="Age Du Patient" />
                                        </div>

                                        <div className="col-sm-3">
                                            <input type="text" className="form-control" placeholder="Tel. Du Patient" />
                                        </div>

                                        <div className="col-sm-3">
                                            <input type="text" className="form-control" placeholder="Adresse Du Patient" />
                                        </div>
                                    </div>


                                    <hr className="mb-5" />




                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label" >Categorie :</label>
                                        <div className="col-sm-4">
                                            <select className="form-control">
                                                <option defaultValue="Option 1">Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" placeholder="Nom" autoComplete="off" />
                                        </div>
                                        <div className="col-sm-2">
                                            <button type="button" className="btn btn-primary">+</button>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title">Tableau Récapitulatif</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-responsive-sm">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Cat</th>
                                                                <th>Analyse</th>
                                                                <th>Date</th>
                                                                <th>Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th>1</th>
                                                                <td>Kolor Tea Shirt For Man</td>
                                                                <td><span className="badge badge-primary light">Sale</span>
                                                                </td>
                                                                <td>January 22</td>
                                                                <td className="color-primary">$21.56</td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </div>






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

