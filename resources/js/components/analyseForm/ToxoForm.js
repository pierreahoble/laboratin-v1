import React from 'react'

const ToxoForm = () => {
    return (
        <>
            <div className="col-lg-12">
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

        </>
    )
}

export default ToxoForm
