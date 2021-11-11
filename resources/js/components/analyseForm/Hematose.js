import React from 'react'

const Hematose = () => {
    return (
        <>
            <div className="mt-1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            MINISTRRE DE LA SANTE ET DE L'HYGIENE PUBLIQUE <br />
                                            Direction Régionale de la Santé Lomé Commune
                                            <h5>Service des Laboratoires</h5>
                                        </th>
                                        <th scope="col">
                                            <h3>RESULTATS D'ANALYSE</h3>
                                        </th>
                                        <th scope="col">
                                            Conditions E5-16 <br />
                                            Indice de Révision :00 <br />
                                            Date d'expiration : 01/01/2020

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>


                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">N 27</th>
                                        <th scope="col">Hemostase</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Nom et Prenoms : <br />
                                            Age / sexe <br />
                                            Prescripteur / Service <br />
                                            Diagnostic <br />
                                            Date de prélèvement <br />
                                        </td>
                                        <td>
                                            GANKEY Akpene <br />
                                            28 ans / Feminin <br />
                                            ... /.... <br />
                                            08/01/2021
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Appareil / Technique : Humaclot Junior</th>
                                </tr>
                            </thead>

                        </table>
                    </div>
                </div>



                <div className="row">
                    <div className="col-xl-12">

                        <h4 className="text-center">RESULTATS</h4>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>PARAMETRES</td>
                                    <td>RESULTATS</td>
                                    <td colSpan="1"></td>
                                    <td>VALEURS DE REFERENCE</td>
                                </tr>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td>Patient sans traitement anticoagulant</td>
                                    <td>Patient sous traitement anticoagulant</td>
                                </tr>
                                <tr>
                                    <td>Temps de Cephaline Activée (TCA)</td>
                                    <td>29,2 sec</td>
                                    <td>28-38 sec</td>
                                    <td>28-38 sec</td>
                                </tr>
                                <tr>
                                    <td>Temps de Prothombrine (TP)</td>
                                    <td>100%</td>
                                    <td>{`>=70%`}</td>
                                    <td>25 - 40 %</td>
                                </tr>
                                <tr>
                                    <td>Ratio Normalisé International (INR)</td>
                                    <td>0,97</td>
                                    <td>0,8 - 12</td>
                                    <td>2 - 3</td>
                                </tr>
                                <tr>
                                    <td>Temps de saignement (TS)</td>
                                    <td>3 min 30 s</td>
                                    <td>2 - 4 min</td>
                                    <td>2 - 4 min</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>


            </div>



            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Kit : Snibe</th>
                                </tr>
                                <tr>
                                    <th scope="col"> Technique : Chimilumescence Immunoassay (CLIA)</th>
                                </tr>
                                <tr>
                                    <th scope="col"> Appareil : MAGLUMI 600 Seuil :{` >= `}2 UI/ ml pour IgG {'>=3'} AU/ml pourIgM
                                    </th>
                                </tr>
                            </thead>

                        </table>
                    </div>
                </div>



                <div className="row">
                    <div className="col-xl-12">
                        <table className="table">
                            <th>
                                <tr>
                                    <th>PARAMETRES</th>
                                    <th colSpan="2"></th>
                                    <th>RESULTATS</th>
                                </tr>

                            </th>
                            <tbody>


                                <tr>
                                    <td></td>
                                    <td>IgM</td>
                                    <td>IgG</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Toxoplasmose</td>
                                    <td>Negatif</td>
                                    <td>Positif</td>
                                    <td>11 IU/ml</td>
                                </tr>

                                <tr>
                                    <td>Rubéol</td>
                                    <td>Negatif</td>
                                    <td>Positif</td>
                                    <td>21 IU/ml</td>
                                </tr>



                            </tbody>
                        </table>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Hematose

if (document.getElementById('idhosmotase')) {
    ReactDOM.render(<Hematose />, document.getElementById('idhosmotase'));
}
