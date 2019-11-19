import React, { Component } from 'react';

class CreateItemModal extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
            <div>
                <label for="title">Title of item</label>
                <input type="text" name="title" />
            </div>
                <div>
                    <label for="date">Date of item</label>
                    <input type="date" name="date" />
                </div>
                <div>
                    <label for="amount">Cost of item</label>
                    <input type="number" name="amount" />
                </div>
            </div>
        )
    }
}

export default CreateItemModal;