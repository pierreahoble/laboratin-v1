import React, { Component } from 'react'
import ReactDOM from 'react-dom';

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
            </>
        )
    }
}

export default RecuPatient;
if (document.getElementById('recupatient')) {
    ReactDOM.render(<RecuPatient />, document.getElementById('recupatient'))
};

