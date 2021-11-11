import React from 'react'
import Pdf from 'react-to-pdf'

const ref = React.createRef()

const PDFCaisse = (props) => {


    // comeBack = () => {
    //     this.props.print = 0
    // }


    return (
        <>
            <div className="pdfcaisse" ref={ref}>

                <div className="mt-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card" style={{ width: '45rem', height: '50rem' }}>
                                    <div className="card-header border-0 pb-0">
                                        <img src='assets/images/logo.png' />
                                        <div className="text-center">
                                            <h5>REPUBLIQUE TOGOLAISE MINISTERE DE LA SANTE</h5>
                                            <h5>ET DE L'HYGIENE</h5>
                                            <h5 className="font-weight-bold">Reçu No 2345677 du 22/12/20 12:24</h5>
                                            <h4 className="font-weight-bold">HOPITAL DE BE ORIGINALE</h4>
                                        </div>
                                        <h5 className="card-title"></h5>
                                    </div>
                                    <hr />
                                    <div className="card-body" style={{ width: '45rem' }}>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <p className="text-decoration-none font-italic">Reçu Client </p>
                                            </div>
                                            <div className="col-xl-6 float-left">
                                                <p className="text-decoration-none font-italic">Caissier : Kodjo </p>
                                            </div>
                                        </div>


                                        <table className="table table-bordered table-responsive-sm">

                                            <tbody>
                                                <tr>
                                                    <td style={{ fontSize: '12px' }} colSpan="4">CLIENT : Kodjo Jean (Tel:
                                                        9045689)</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: '12px' }} colSpan="4">INAM /80%/ Sexe F Age : 23 an
                                                        (s)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: "12px" }} colSpan="4">Accompagnant : Soglo</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: "12px" }}>Montant EMIS</td>
                                                    <td style={{ fontSize: "12px" }}>Montant PEC</td>
                                                    <td style={{ fontSize: "12px" }}>Montant PAYE</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: "12px" }}>7000</td>
                                                    <td style={{ fontSize: "12px" }}>5600</td>
                                                    <td style={{ fontSize: "12px" }}>1400</td>
                                                </tr>

                                            </tbody>
                                        </table>


                                        <div className="">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th style={{ fontSize: "12px" }}>Prestation</th>
                                                        <th style={{ fontSize: "12px" }}>Prix Unitaire</th>
                                                        <th style={{ fontSize: "12px" }}>MT Brut</th>
                                                        <th style={{ fontSize: "12px" }}>PEC</th>
                                                        <th style={{ fontSize: "12px" }}>Mt NAP</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th style={{ fontSize: "12px" }}>1</th>
                                                        <td style={{ fontSize: "12px" }}>Kolor Tea Shirt For Man</td>
                                                        <td style={{ fontSize: "12px" }}><span>Sale</span>
                                                        </td>
                                                        <td style={{ fontSize: "12px" }}>January 22</td>
                                                        <td style={{ fontSize: "12px" }}>$21.56</td>
                                                    </tr>
                                                    <tr>
                                                        <th style={{ fontSize: "12px" }}>2</th>
                                                        <td style={{ fontSize: "12px" }}>Kolor Tea Shirt For Women</td>
                                                        <td style={{ fontSize: "12px" }}><span>Tax</span>
                                                        </td>
                                                        <td style={{ fontSize: "12px" }}>January 30</td>
                                                        <td style={{ fontSize: "12px" }}>$55.32</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>




                                    </div>
                                    <div className="card-footer border-0 pt-0">
                                        <p className="card-text d-inline">Ce reçu est valable pour 30 jours, Passer ce delai, toute
                                            reclamation est irrecevable </p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <Pdf targetRef={ref} fileane="recupatient.pdf">
                {({ toPdf }) => <button onClick={toPdf} className="btn btn-primary">IMPRESSION</button>}
            </Pdf>
            <div>
                <button className="btn btn-primary" >Retour</button>
            </div>
        </>
    )
}

export default PDFCaisse
