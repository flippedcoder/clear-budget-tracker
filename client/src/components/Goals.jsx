import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlusSquare,
  faCheck,
  faBomb,
} from '@fortawesome/free-solid-svg-icons'

import CreateGoalModal from './CreateGoalModal'
import Container from './common/Container'

const Goals = () => {
  const [goalList, setGoalList] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [hasBeenUpdated, setHasBeenUpdated] = useState(false)

  useEffect(() => {
    getAllGoals()
  }, [hasBeenUpdated])

  const getAllGoals = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/getAllGoals`)
      .then((goalList) => {
        setGoalList(goalList.data)
      })
  }

  const updateGoalStatus = (goalId, currentStatus) => {
    const goalData = {
      _id: goalId,
      isComplete: !currentStatus,
    }

    axios.post(`${process.env.REACT_APP_API_URL}/updateGoalStatus`, {
      goalData: goalData,
    })

    setHasBeenUpdated(!hasBeenUpdated)
  }

  return (
    <Container>
      <GoalInfo>
        <p>Remaining Goals: 5</p>
        <p>Completed Goals: 2</p>
        <p>Failed Goals: 3</p>
        <AddGoal>
          Add Goal{' '}
          <AddGoalIcon onClick={() => setShowModal(!showModal)}>
            <FontAwesomeIcon icon={faPlusSquare} />
          </AddGoalIcon>
        </AddGoal>
      </GoalInfo>
      <RowHeader>
        <Column>Goal Title</Column>
        <Column>Complete Goal By</Column>
        <Column>Is Completed</Column>
      </RowHeader>
      {goalList.map((goal) => (
        <Row key={goal._id}>
          <Column>{goal.title}</Column>
          <Column>{new Date(goal.completeByDate).toLocaleDateString()}</Column>
          <Column>
            {goal.isComplete ? (
              <FontAwesomeIcon
                icon={faCheck}
                onClick={() => {
                  updateGoalStatus(goal._id, goal.isComplete)
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBomb}
                onClick={() => {
                  updateGoalStatus(goal._id, goal.isComplete)
                }}
              />
            )}
          </Column>
        </Row>
      ))}
      {showModal && <CreateGoalModal />}
    </Container>
  )
}

const AddGoal = styled.div`
  font-size: 24px;
  margin: 24px auto 0 auto;
  text-align: center;
  width: 50%;
`
const AddGoalIcon = styled.div`
  font-size: 50px;
  margin: 0 auto;
  max-width: fit-content;

  &:hover {
    cursor: pointer;
    font-size: 60px;
  }
`
const Column = styled.div`
  margin: 0 auto;
  width: 250px;
`
const GoalInfo = styled.div`
  font-size: 24px;
  text-align: center;
`
const Row = styled.div`
  border-bottom: 1px solid #ababab;
  display: flex;
  font-size: 24px;
  padding: 25px 0;
  width: 100%;
`
const RowHeader = styled(Row)`
  font-weight: bold;
`

export default Goals
