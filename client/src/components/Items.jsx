import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateItemModal from './CreateItemModal';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import '../css/Items.css';

class Items extends Component {
    constructor() {
        super();
        this.state = {
            itemList: [],
            showItemModal: false,
            total: 0
        };

        this.getAllItems = this.getAllItems.bind(this);
        this.showAddItemModal = this.showAddItemModal.bind(this);
    }

    componentDidMount() {
        this.getAllItems();
    }

    getAllItems() {
        axios.get('http://localhost:3010/api/getAllItems')
            .then(itemList => {
                this.setState({
                    itemList: itemList.data,
                    //total: itemList
                });
            });
    }

    showAddItemModal() {
        let showItemModal = this.state.showItemModal;
        this.setState({
            showItemModal: !showItemModal
        });
    }

    render() {
        let newItemModal = null;

        if (this.state.showItemModal) {
            newItemModal = <CreateItemModal />
        }
        return (
            <div className="container">
                <div id="item-options">
                    <p>Total: ${this.state.total}</p>
                    <div>
                        <label htmlFor="sortBy">Sort By: </label>
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
                    return <div className="row" key={item._id}>
                        <div className="col-3">{item.title}</div>
                        <div className="col-3">{new Date(item.date).toLocaleDateString()}</div>
                        <div className="col-3">${item.cost}</div>
                    </div>;
                })}
                {newItemModal}
            </div>
        );
    }
}

export default Items;
