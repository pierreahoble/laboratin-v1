import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

class Example extends Component {

    constructor(props) {
        super(props)
        this.state =
        {
            message: '',
            items: []
        }
    }


    updateMessage(event) {
        this.setState({
            message: event.target.value
        });
    }


    handleClick() {
        var items = this.state.items;

        items.push(this.state.message);

        this.setState({
            items: items
        });
    }


    renderRows() {
        var context = this;

        return this.state.items.map(function (o, i) {
            return (
                <tr key={"item-" + i}>
                    <td>
                        <input
                            type="text"
                            value={o}
                        />
                    </td>
                    <td>
                        <button>
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
    }





    handleItemChanged(i, event) {
        var items = this.state.items;

        items[i] = event.target.value;

        this.setState({
            items: items
        });
    }



    renderRows() {
        var context = this;

        return this.state.items.map(function (data, i) {
            return (
                <tr key={i}>
                    <th scope="row">1</th>
                    <td>{data}</td>
                    <td>{data}</td>
                    <td>{data}</td>
                </tr>
            );
        });
    }



    render() {
        return (
            <Fragment>
                <div className="container">
                    <h2>Ajouter a un tableau</h2>
                </div>


                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>

                <hr />

                <div>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="text" className="form-control" placeholder="Message" value={this.state.message} onChange={this.updateMessage.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.handleClick.bind(this)}>add</button>
                    </form>
                </div>

            </Fragment>

        );
    }
}

export default Example;

if (document.getElementById('Example')) {
    ReactDOM.render(<Example />, document.getElementById('Example'));
}
