import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faCheck, faBomb } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import '../css/Goals.css';

class Goals extends Component {
    constructor() {
        super();

        this.state = {
            goalList: [],
            isCompleted: false,
            showGoalModal: false
        };

        this.showAddGoalModal = this.showAddGoalModal.bind(this);
        this.updateGoalStatus = this.updateGoalStatus.bind(this);
    }

    componentDidMount() {
        this.setState({
            goalList: [
                {
                    date: '11/03/2019',
                    id: 1,
                    isCompleted: false,
                    name: 'sell something'
                },
                {
                    date: '11/06/2019',
                    id: 2,
                    isCompleted: false,
                    name: 'save $150'
                },
                {
                    date: '11/09/2019',
                    id: 3,
                    isCompleted: false,
                    name: 'only eat out once'
                }
            ],
            isCompleted: true
        });
    }

    showAddGoalModal() {
        let showGoalModal = this.state.showGoalModal;

        this.setState({
            showGoalModal: !showGoalModal
        });
    }

    updateGoalStatus() {
        let isCompleted = this.state.isCompleted;

        this.setState({
            isCompleted: !isCompleted
        });
    }

    render() {
        let goalStatusIcon = null;

        if (this.state.isCompleted) {
            goalStatusIcon = <FontAwesomeIcon id="change-goal-status"
                onClick={this.updateGoalStatus}
                icon={faCheck} />
        }
        else {
            goalStatusIcon = <FontAwesomeIcon id="change-goal-status"
                onClick={this.updateGoalStatus}
                icon={faBomb} />
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
                    return <div className="row" key={goal.id}>
                        <div className="col-3">{goal.name}</div>
                        <div className="col-3">{goal.date}</div>
                        <div className="col-3">{goalStatusIcon}</div>
                    </div>;
                })}
            </div>
        );
    }
}

export default Goals;