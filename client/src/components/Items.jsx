import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import '../css/Items.css';

class Items extends Component {
    constructor() {
        super();
        this.state = {
            itemList: [],
            showItemModal: false
        };
        this.showAddItemModal = this.showAddItemModal.bind(this);
    }

    componentDidMount() {
        this.setState({
            itemList: [
                {
                    amount: 12.34,
                    category: 'food',
                    date: '11/03/2019',
                    id: 1,
                    name: 'pizza'
                },
                {
                    amount: 2.34,
                    category: 'food',
                    date: '11/06/2019',
                    id: 2,
                    name: 'fries'
                },
                {
                    amount: 22.34,
                    category: 'food',
                    date: '11/09/2019',
                    id: 3,
                    name: 'pasta'
                }
            ]
        })
    }

    showAddItemModal() {
        let showItemModal = this.state.showItemModal;
        this.setState({
            showItemModal: !showItemModal
        });
    }

    showItems() {

    }

    render() {
        return (
            <div className="container">
                <div id="item-options">
                    <p>Total: $123.45</p>
                    <div>
                        <label for="sortBy">Sort By: </label>
                        <select name="sortBy">
                            <option value="type">Type</option>
                            <option value="date">Date</option>
                        </select>
                    </div>
                    <p className="add-item-button">
                        <label>Add Item:</label>
                        <FontAwesomeIcon id="add-item-icon" onClick={this.showAddItemModal} icon={faPlusSquare} />
                    </p>
                </div>
                {this.state.itemList.map(item => {
                    return <div className="row" key={item.id}>
                        <div className="col-3">{item.name}</div>
                        <div className="col-3">{item.date}</div>
                        <div className="col-3">${item.amount}</div>
                    </div>;
                })}
            </div>
        );
    }
}

export default Items;