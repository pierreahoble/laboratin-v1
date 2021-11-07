import React from 'react'

const TyrodienForm = () => {
    return (
        <>


            <div className="col-lg-12">
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

        </>
    )
}

export default TyrodienForm
