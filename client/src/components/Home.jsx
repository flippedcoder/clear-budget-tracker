import React, { Component } from 'react';

class Home extends Component {

    rows = this.props.records.map((record) =>
        <div className="row">
            <div>
                <input type="date" id="spend-date" name="spend-date" value={record.date} />
            </div>
            <div>
                <input type="text" id="name" name="name" value={record.name} />
            </div>
            <div>
                <input type="number" id="amount" name="amount" value={record.amount} />
            </div>
        </div>
    );

    render() {
        return (
            <div className="grid container">
                {this.rows}
            </div>
        );
    }
}

export default Home;