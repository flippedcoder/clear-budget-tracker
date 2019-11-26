import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import CreateItemModal from './CreateItemModal';
import { VictoryArea, VictoryChart, VictoryPie, VictoryTheme } from 'victory';

import '../css/Home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            itemList: [],
            showItemModal: false,
            statsGraphType: 'week',
            total: 0
        };

        this.getAllItems = this.getAllItems.bind(this);
        this.showAddItemModal = this.showAddItemModal.bind(this);
        this.showStatsByType = this.showStatsByType.bind(this);
        this.showStatsByWeek = this.showStatsByWeek.bind(this);
    }

    componentDidMount() {
        this.getAllItems();
    }

    getAllItems() {
        axios.get('http://localhost:3010/api/getAllItems')
            .then(itemList => {
                let total = 0;
                
                itemList.data.forEach(item => {
                    total += item.cost;
                });

                this.setState(prevState => ({
                    itemList: prevState.itemList.concat(itemList.data),
                    total: total
                }));
            });
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
        let newItemModal = null;
        let statsGraph = null;
        
        let billsData = this.state.itemList.filter(item => item.category === 'Bills');
        let foodData = this.state.itemList.filter(item => item.category === 'Food');
        let stuffData = this.state.itemList.filter(item => item.category === 'Stuff');

        let billsTotal = 0;
        let foodTotal = 0;
        let stuffTotal = 0;
        
        billsData.forEach(bill => {
            billsTotal += bill.cost;
        });
        
        foodData.forEach(food => {
            foodTotal += food.cost;
        });
        
        stuffData.forEach(stuff => {
            stuffTotal += stuff.cost;
        });

        if (this.state.showItemModal) {
            newItemModal = <CreateItemModal />
        }

        if (this.state.statsGraphType === 'type') {
            statsGraph = <VictoryPie
                colorScale={["tomato", "gold", "navy"]}
                cornerRadius={7}
                // TODO: get data array from App.jsx
                // data={this.props.data}
                data={[
                    { x: "Food", y: ((foodTotal / this.state.total) * 100) },
                    { x: "Bills", y: ((billsTotal / this.state.total) * 100) },
                    { x: "Stuff", y: ((stuffTotal / this.state.total) * 100) }
                ]}
                height={300}
                innerRadius={50}
            />
        }
        else {
            statsGraph = <VictoryChart
            theme={VictoryTheme.material}
          >
            <VictoryArea
              style={{ data: { fill: "#c43a31" } }}
              data={[
                { x: "Food", y: foodTotal },
                { x: "Bills", y: billsTotal },
                { x: "Stuff", y: stuffTotal }
            ]}
            />
          </VictoryChart>
        }
        return (
            <div className="container">
                <div id="month-to-date-total">
                    <p>Spent this month</p>
                    <p>${this.state.total}</p>
                </div>
                <div id="month-to-date-graph">
                    <div className="graph-container">
                        {statsGraph}
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
                {newItemModal}
            </div>
        );
    }
}

export default Home;
