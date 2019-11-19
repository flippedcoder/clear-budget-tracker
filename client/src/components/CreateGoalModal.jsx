import React, { Component } from 'react';

class CreateGoalModal extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            <div>
                <label for="title">Goal</label>
                <input type="text" name="title" />
            </div>
                <div>
                    <label for="date">Goal</label>
                    <input type="date" name="date" />
                </div>
            </div>
        )
    }
}

export default CreateGoalModal;