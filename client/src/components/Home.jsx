import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { VictoryPie } from 'victory';

import '../css/Home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            showItemModal: false,
            statsGraphType: 'week'
        };
        this.showAddItemModal = this.showAddItemModal.bind(this);
        this.showStatsByType = this.showStatsByType.bind(this);
        this.showStatsByWeek = this.showStatsByWeek.bind(this);
    }

    showAddItemModal() {
        let showItemModal = this.state.showItemModal;
        this.setState({
            showItemModal: !showItemModal
        });
    }

    showStatsByType() {
        this.setState({
            statsGraphType: 'type'
        });
    }

    showStatsByWeek() {
        this.setState({
            statsGraphType: 'week'
        });
    }

    render() {
        return (
            <div className="container">
                <div id="month-to-date-total">
                    <p>Spent this month</p>
                    <p>$123.45</p>
                </div>
                <div id="month-to-date-graph">
                    <div className="graph-container">
                        <VictoryPie
                            colorScale={["tomato", "gold", "navy"]}
                            cornerRadius={7}
                            // TODO: get data array from App.jsx
                            // data={this.props.data}
                            data={[
                                { x: "Food", y: 27 },
                                { x: "Bills", y: 42 },
                                { x: "Stuff", y: 31 }
                            ]}
                            height={300}
                            innerRadius={50}
                        />
                    </div>
                </div>
                <footer className="flex-2">
                    <div className="add-item center-content">
                        <p>Add Item</p>
                        <p id="add-item-icon" onClick={this.showAddItemModal}>
                            <FontAwesomeIcon icon={faPlusSquare} />
                        </p>
                    </div>
                    <div className="graph-stats center-content">
                        <p>See Other Stats</p>
                        <div className="flex-2">
                            <p onClick={this.showStatsByType}>By Type</p>
                            <p onClick={this.showStatsByWeek}>By Week</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;
