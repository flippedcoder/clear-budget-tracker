import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faCheck, faBomb } from '@fortawesome/free-solid-svg-icons';
import CreateGoalModal from './CreateGoalModal';
import axios from 'axios';

import '../css/Goals.css';

class Goals extends Component {
    constructor() {
        super();

        this.state = {
            goalList: [],
            showGoalModal: false
        };

        this.getAllGoals = this.getAllGoals.bind(this);
        this.showAddGoalModal = this.showAddGoalModal.bind(this);
        this.updateGoalStatus = this.updateGoalStatus.bind(this);
    }

    componentDidMount() {
        this.getAllGoals();
    }

    getAllGoals() {
        axios.get('http://localhost:3010/api/getAllGoals')
            .then(goalList => {
                this.setState({
                    goalList: goalList.data
                });
            });
    }

    showAddGoalModal() {
        let showGoalModal = this.state.showGoalModal;

        this.setState({
            showGoalModal: !showGoalModal
        });
    }

    updateGoalStatus(goalId) {
        return goalId;
    }

    render() {
        let newGoalModal = null;

        if (this.state.showGoalModal) {
            newGoalModal = <CreateGoalModal />
        }

        return (
            <div className="container">
                <div id="goal-overview">
                    <p>Remaining Goals: 5</p>
                    <p>Completed Goals: 2</p>
                    <p>Failed Goals: 3</p>
                    <p className="add-goal-button">
                        <label>Add Goal:</label>
                        <FontAwesomeIcon id="add-goal-icon"
                            onClick={this.showAddGoalModal}
                            icon={faPlusSquare} />
                    </p>
                </div>
                {this.state.goalList.map(goal => {
                    let goalStatusIcon = null;

                    if (this.state.isCompleted) {
                        goalStatusIcon = <FontAwesomeIcon id="change-goal-status"
                            onClick={this.updateGoalStatus}
                            icon={faCheck} />
                    }
                    else {
                        goalStatusIcon = <FontAwesomeIcon id="change-goal-status"
                            icon={faBomb} />
                    }

                    return <div className="row" key={goal._id}>
                        <div className="col-3">{goal.title}</div>
                        <div className="col-3">{new Date(goal.completeByDate).toLocaleDateString()}</div>
                        <div className="col-3">{goalStatusIcon}</div>
                    </div>;
                })}
                {newGoalModal}
            </div>
        );
    }
}

export default Goals;