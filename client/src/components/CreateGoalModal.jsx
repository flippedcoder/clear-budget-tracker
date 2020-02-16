import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class CreateGoalModal extends Component {
    constructor() {
        super();
        this.state = {
            shouldCloseModal: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.saveGoal = this.saveGoal.bind(this);
    }

    closeModal() {
        this.setState({
            shouldCloseModal: true
        });
    }

    saveGoal(e) {
        let goalData = {
            completeByDate: e.target.completeByDate.value,
            isComplete: false,
            title: e.target.title.value
        };

        axios.post('http://localhost:3010/api/createGoal', {
            goalData: goalData
        });
    }

    render() {
        return (
            <div className={(this.state.shouldCloseModal ? "hidden" : "modal-container")}>
                <form onSubmit={this.saveGoal}>
                    <FontAwesomeIcon icon={faBomb}
                        className="close-btn"
                        onClick={this.closeModal} />
                    <div>
                        <label htmlFor="title">Goal: </label>
                        <input type="text" name="title" />
                    </div>
                    <div>
                        <label htmlFor="completeByDate">Complete By: </label>
                        <input type="date" name="completeByDate" />
                    </div>
                    <button type="submit">Save Goal</button>
                </form>
            </div>
        )
    }
}

export default CreateGoalModal;