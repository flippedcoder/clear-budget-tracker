import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import '../css/Modal.css';

class CreateItemModal extends Component {
    constructor() {
        super();
        this.state = {
            shouldCloseModal: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    closeModal() {
        this.setState({
            shouldCloseModal: true
        });
    }

    saveItem(e) {
        let itemData = {
            category: e.target.category.value,
            cost: e.target.cost.value,
            title: e.target.title.value
        };

        axios.post('http://localhost:3010/api/createItem', {
            itemData: itemData
        });
    }

    render() {
        return (
            <div className={(this.state.shouldCloseModal ? "hidden" : "modal-container")}>
                <form onSubmit={this.saveItem}>
                    <FontAwesomeIcon icon={faBomb}
                        className="close-btn"
                        onClick={this.closeModal} />
                    <div>
                        <label htmlFor="title">Title of item: </label>
                        <input type="text" name="title" />
                    </div>
                    <div>
                        <label htmlFor="category">Category of item: </label>
                        <input type="text" name="category" />
                    </div>
                    <div>
                        <label htmlFor="cost">Cost of item: </label>
                        <input type="number" step=".01" name="cost" />
                    </div>
                    <button type="submit">Save Item</button>
                </form>
            </div>
        )
    }
}

export default CreateItemModal;