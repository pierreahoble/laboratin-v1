import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import logo from '../../../../public/assets/images/logo.png'


class RecuPatient extends Component {
    render() {
        return (
            <>
                <div className="page-titles">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Reçu </a></li>
                        <li className="breadcrumb-item active"><a href="#">Patient</a></li>
                    </ol>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header border-0 pb-0">
                                    <img src={logo} />
                                    <div className="text-center">
                                        <h5>REPUBLIQUE TOGOLAISE MINISTERE DE LA SANTE</h5>
                                        <h5>ET DE L'HYGIENE</h5>
                                        <h5 className="font-weight-bold">Reçu No 2345677 du 22/12/20 12:24</h5>
                                        <h4 className="font-weight-bold">HOPITAL DE BE ORIGINALE</h4>
                                    </div>
                                    <h5 className="card-title"></h5>
                                </div>
                                <hr />
                                <div className="card-body">
                                    <div className="row  text-center">
                                        <div className="col-xl-6">
                                            <p className="text-decoration-none font-italic">Reçu Client </p>
                                        </div>
                                        <div className="col-xl-6">
                                            <p className="text-decoration-none font-italic">Caissier : Kodjo </p>
                                        </div>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="table table-bordered table-responsive-sm">
                                            {/* <thead>
                                                <p>CLIENT : Kodjo Jean (Tel: 9045689)</p>
                                            </thead> */}
                                            <tbody>
                                                <tr>
                                                    <td className="" colSpan="4">CLIENT : Kodjo Jean (Tel: 9045689)</td>
                                                </tr>
                                                <tr>
                                                    <td className="" colSpan="4">INAM /80%/ Sexe F Age : 23 an (s)</td>
                                                </tr>
                                                <tr>
                                                    <td className="" colSpan="4">Accompagnant : Soglo</td>
                                                </tr>
                                                <tr>
                                                    <td>Montant EMIS</td>
                                                    <td>Montant PEC</td>
                                                    <td>Montant PAYE</td>
                                                </tr>
                                                <tr>
                                                    <td>7000</td>
                                                    <td>5600</td>
                                                    <td>1400</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>


                                    <div className="table-responsive">
                                        <table className="table table-bordered table-responsive-sm">
                                            <thead>
                                                <tr>
                                                    <th>Prestation</th>
                                                    <th>Prix Unitaire</th>
                                                    <th>Mt Brut</th>
                                                    <th>PEC</th>
                                                    <th>Mt NAP</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>1</th>
                                                    <td>Kolor Tea Shirt For Man</td>
                                                    <td><span>Sale</span>
                                                    </td>
                                                    <td>January 22</td>
                                                    <td >$21.56</td>
                                                </tr>
                                                <tr>
                                                    <th>2</th>
                                                    <td>Kolor Tea Shirt For Women</td>
                                                    <td><span >Tax</span>
                                                    </td>
                                                    <td>January 30</td>
                                                    <td >$55.32</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>




                                </div>
                                <div className="card-footer border-0 pt-0">
                                    <p className="card-text d-inline">Ce reçu est valable pour 30 jours, Passer ce delai, toute reclamation est irrecevable </p>
                                    {/* <a href="#" className="card-link float-right">Card link</a> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>





            </>
        )
    }
}

export default RecuPatient;
if (document.getElementById('recupatient')) {
    ReactDOM.render(<RecuPatient />, document.getElementById('recupatient'))
};

