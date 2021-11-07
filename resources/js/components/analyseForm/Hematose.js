import React from 'react'

const Hematose = () => {
    return (
        <>


            <div className="col-lg-12">
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

        </>
    )
}

export default Hematose
