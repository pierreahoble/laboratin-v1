import React from 'react'

const Groupageaform = () => {
    return (
        <>

            <div className="col-lg-12">
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

        </>
    )
}

export default Groupageaform
