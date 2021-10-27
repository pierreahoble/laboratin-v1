import React from 'react'
import ReactDOM from 'react-dom';
import { Fragment } from 'react';

const ListePatient = () => {
    return (
        <Fragment>
            <div className="page-titles">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Tableau Des </a></li>
                    <li className="breadcrumb-item active"><a href="#">Patients</a></li>
                </ol>
            </div>


            <div className="row">
                <div className="col-12">

                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Patient</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="example5" className="display min-w850">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="checkAll" required="" />
                                                    <label className="custom-control-label" htmlFor="checkAll"></label>
                                                </div>
                                            </th>
                                            <th>Order ID</th>
                                            <th>Date Check in</th>
                                            <th>Name</th>
                                            <th>Assgined</th>
                                            <th>Disease</th>
                                            <th>Status</th>
                                            <th>Table no</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox2" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox2"></label>
                                                </div>
                                            </td>
                                            <td>#P-00001</td>
                                            <td>26/02/2020, 12:42 AM</td>
                                            <td>Tiger Nixon</td>
                                            <td>Dr. Cedric</td>
                                            <td>Cold & Flu</td>
                                            <td>
                                                <span className="badge light badge-danger">
                                                    <i className="fa fa-circle text-danger mr-1"></i>
                                                    New Patient
                                                </span>
                                            </td>
                                            <td>AB-001</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox3" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox3"></label>
                                                </div>
                                            </td>
                                            <td>#P-00002</td>
                                            <td>28/02/2020, 12:42 AM</td>
                                            <td>Garrett Winters</td>
                                            <td>Dr. Cedric</td>
                                            <td>Sleep Problem</td>
                                            <td>
                                                <span className="badge light badge-warning">
                                                    <i className="fa fa-circle text-warning mr-1"></i>
                                                    In Treatment
                                                </span>
                                            </td>
                                            <td>AB-002</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox4" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox4"></label>
                                                </div>
                                            </td>
                                            <td>#P-00003</td>
                                            <td>26/02/2020, 12:42 AM</td>
                                            <td>Ashton Cox</td>
                                            <td>Dr. Rhona</td>
                                            <td>Cold & Flu</td>
                                            <td>
                                                <span className="badge light badge-success">
                                                    <i className="fa fa-circle text-success mr-1"></i>
                                                    Recovered
                                                </span>
                                            </td>
                                            <td>AB-003</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox5" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox5"></label>
                                                </div>
                                            </td>
                                            <td>#P-00004</td>
                                            <td>29/02/2020, 12:42 AM</td>
                                            <td>Ashton Cox</td>
                                            <td>Dr. Cedric</td>
                                            <td>Cold & Flu</td>
                                            <td>
                                                <span className="badge light badge-warning">
                                                    <i className="fa fa-circle text-warning mr-1"></i>
                                                    In Treatment
                                                </span>
                                            </td>
                                            <td>AB-004</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox6" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox6"></label>
                                                </div>
                                            </td>
                                            <td>#P-00005</td>
                                            <td>28/02/2020, 12:42 AM</td>
                                            <td>Ashton Cox</td>
                                            <td>Dr. Cedric</td>
                                            <td>Cold & Flu</td>
                                            <td>
                                                <span className="badge light badge-warning">
                                                    <i className="fa fa-circle text-warning mr-1"></i>
                                                    In Treatment
                                                </span>
                                            </td>
                                            <td>AB-005</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox7" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox7"></label>
                                                </div>
                                            </td>
                                            <td>#P-00006</td>
                                            <td>28/02/2020, 12:42 AM</td>
                                            <td>Ashton Cox</td>
                                            <td>Dr. Rhona</td>
                                            <td>Sleep Problem</td>
                                            <td>
                                                <span className="badge light badge-warning">
                                                    <i className="fa fa-circle text-warning mr-1"></i>
                                                    In Treatment
                                                </span>
                                            </td>
                                            <td>AB-006</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox8" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox8"></label>
                                                </div>
                                            </td>
                                            <td>#P-00007</td>
                                            <td>26/02/2020, 12:42 AM</td>
                                            <td>Airi Satou</td>
                                            <td>Dr. Rhona</td>
                                            <td>Cold & Flu</td>
                                            <td>
                                                <span className="badge light badge-danger">
                                                    <i className="fa fa-circle text-danger mr-1"></i>
                                                    New Patient
                                                </span>
                                            </td>
                                            <td>AB-007</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox9" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox9"></label>
                                                </div>
                                            </td>
                                            <td>#P-00008</td>
                                            <td>29/02/2020, 12:42 AM</td>
                                            <td>Airi Satou</td>
                                            <td>Dr. Garrett </td>
                                            <td>Sleep Problem</td>
                                            <td>
                                                <span className="badge light badge-warning">
                                                    <i className="fa fa-circle text-warning mr-1"></i>
                                                    In Treatment
                                                </span>
                                            </td>
                                            <td>AB-008</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox10" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox10"></label>
                                                </div>
                                            </td>
                                            <td>#P-00009</td>
                                            <td>25/02/2020, 12:42 AM</td>
                                            <td>Airi Satou</td>
                                            <td>Dr. Rhona</td>
                                            <td>Cold & Flu</td>
                                            <td>
                                                <span className="badge light badge-danger">
                                                    <i className="fa fa-circle text-danger mr-1"></i>
                                                    New Patient
                                                </span>
                                            </td>
                                            <td>AB-009</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox11" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox11"></label>
                                                </div>
                                            </td>
                                            <td>#P-00010</td>
                                            <td>26/02/2020, 12:42 AM</td>
                                            <td>Airi Satou</td>
                                            <td>Dr. Rhona</td>
                                            <td>Sleep Problem</td>
                                            <td>
                                                <span className="badge light badge-danger">
                                                    <i className="fa fa-circle text-danger mr-1"></i>
                                                    New Patient
                                                </span>
                                            </td>
                                            <td>AB-010</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox12" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox12"></label>
                                                </div>
                                            </td>
                                            <td>#P-00011</td>
                                            <td>28/02/2020, 12:42 AM</td>
                                            <td>Airi Satou</td>
                                            <td>Dr. Rhona</td>
                                            <td>Cold & Flu</td>
                                            <td>
                                                <span className="badge light badge-warning">
                                                    <i className="fa fa-circle text-warning mr-1"></i>
                                                    In Treatment
                                                </span>
                                            </td>
                                            <td>AB-011</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox13" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox13"></label>
                                                </div>
                                            </td>
                                            <td>#P-00012</td>
                                            <td>29/02/2020, 12:42 AM</td>
                                            <td>Sonya Frost</td>
                                            <td>Dr. Garrett</td>
                                            <td>Sleep Problem</td>
                                            <td>
                                                <span className="badge light badge-danger">
                                                    <i className="fa fa-circle text-danger mr-1"></i>
                                                    New Patient
                                                </span>
                                            </td>
                                            <td>AB-012</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox14" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox14"></label>
                                                </div>
                                            </td>
                                            <td>#P-00013</td>
                                            <td>25/02/2020, 12:42 AM</td>
                                            <td>Sonya Frost</td>
                                            <td>Dr. Rhona</td>
                                            <td>Cold & Flu</td>
                                            <td>
                                                <span className="badge light badge-danger">
                                                    <i className="fa fa-circle text-danger mr-1"></i>
                                                    New Patient
                                                </span>
                                            </td>
                                            <td>AB-013</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox15" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox15"></label>
                                                </div>
                                            </td>
                                            <td>#P-00014</td>
                                            <td>26/02/2020, 12:42 AM</td>
                                            <td>Sonya Frost</td>
                                            <td>Dr. Garrett</td>
                                            <td>Sleep Problem</td>
                                            <td>
                                                <span className="badge light badge-warning">
                                                    <i className="fa fa-circle text-warning mr-1"></i>
                                                    In Treatment
                                                </span>
                                            </td>
                                            <td>AB-014</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox16" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox16"></label>
                                                </div>
                                            </td>
                                            <td>#P-00015</td>
                                            <td>28/02/2020, 12:42 AM</td>
                                            <td>Sonya Frost</td>
                                            <td>Dr. Rhona</td>
                                            <td>Cold & Flu</td>
                                            <td>
                                                <span className="badge light badge-danger">
                                                    <i className="fa fa-circle text-danger mr-1"></i>
                                                    New Patient
                                                </span>
                                            </td>
                                            <td>AB-015</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox17" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox17"></label>
                                                </div>
                                            </td>
                                            <td>#P-00016</td>
                                            <td>29/02/2020, 12:42 AM</td>
                                            <td>Sonya Frost</td>
                                            <td>Dr. Garrett</td>
                                            <td>Sleep Problem</td>
                                            <td>
                                                <span className="badge light badge-danger">
                                                    <i className="fa fa-circle text-danger mr-1"></i>
                                                    New Patient
                                                </span>
                                            </td>
                                            <td>AB-016</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox18" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox18"></label>
                                                </div>
                                            </td>
                                            <td>#P-00017</td>
                                            <td>25/02/2020, 12:42 AM</td>
                                            <td>Sonya Frost</td>
                                            <td>Dr. Rhona</td>
                                            <td>Cold & Flu</td>
                                            <td>
                                                <span className="badge light badge-warning">
                                                    <i className="fa fa-circle text-warning mr-1"></i>
                                                    In Treatment
                                                </span>
                                            </td>
                                            <td>AB-017</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox19" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox19"></label>
                                                </div>
                                            </td>
                                            <td>#P-00018</td>
                                            <td>26/02/2020, 12:42 AM</td>
                                            <td>Sonya Frost</td>
                                            <td>Dr. Rhona</td>
                                            <td>Sleep Problem</td>
                                            <td>
                                                <span className="badge light badge-danger">
                                                    <i className="fa fa-circle text-danger mr-1"></i>
                                                    New Patient
                                                </span>
                                            </td>
                                            <td>AB-018</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox20" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox20"></label>
                                                </div>
                                            </td>
                                            <td>#P-00019</td>
                                            <td>28/02/2020, 12:42 AM</td>
                                            <td>Sonya Frost</td>
                                            <td>Dr. Rhona</td>
                                            <td>Cold & Flu</td>
                                            <td>
                                                <span className="badge light badge-danger">
                                                    <i className="fa fa-circle text-danger mr-1"></i>
                                                    New Patient
                                                </span>
                                            </td>
                                            <td>AB-019</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheckBox21" required="" />
                                                    <label className="custom-control-label" htmlFor="customCheckBox21"></label>
                                                </div>
                                            </td>
                                            <td>#P-00020</td>
                                            <td>25/02/2020, 12:42 AM</td>
                                            <td>Sonya Frost</td>
                                            <td>Dr. Garrett</td>
                                            <td>Sleep Problem</td>
                                            <td>
                                                <span className="badge light badge-warning">
                                                    <i className="fa fa-circle text-warning mr-1"></i>
                                                    In Treatment
                                                </span>
                                            </td>
                                            <td>AB-020</td>
                                            <td>
                                                <div className="dropdown ml-auto text-right">
                                                    <div className="btn-link" data-toggle="dropdown">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" fillRule="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Accept Patient</a>
                                                        <a className="dropdown-item" href="#">Reject Order</a>
                                                        <a className="dropdown-item" href="#">View Details</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>












                </div>
            </div>

        </Fragment>
    )
}

export default ListePatient;


if (document.getElementById('idListe')) {
    ReactDOM.render(<ListePatient />, document.getElementById('idListe'))
};