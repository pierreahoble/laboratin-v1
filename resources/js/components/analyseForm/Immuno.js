import React,{useState} from 'react'

const Immuno = () => {



    return (
        <>

            <div className="col-lg-12">
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

        </>
    )
}

export default Immuno
