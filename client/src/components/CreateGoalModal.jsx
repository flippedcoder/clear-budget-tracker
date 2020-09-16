import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const CreateGoalModal = () => {
  const [shouldCloseModal, setShouldCloseModal] = useState(true)

  const saveGoal = (e) => {
    const goalData = {
      completeByDate: e.target.completeByDate.value,
      isComplete: e.target.isComplete.checked,
      title: e.target.title.value,
    }

    axios.post('http://localhost:3010/api/createGoal', {
      goalData: goalData,
    })
  }

  return (
    <>
      {shouldCloseModal && (
        <Overlay>
          <ModalContainer>
            <form onSubmit={(e) => saveGoal(e)}>
              <ModalHeader>
                <p>Add A New Goal</p>
                <p onClick={() => setShouldCloseModal(false)}>X</p>
              </ModalHeader>
              <InputGroup>
                <div>
                  <label htmlFor="title">Title of goal: </label>
                  <TextInput type="text" name="title" />
                </div>
                <div>
                  <label htmlFor="completeByDate">Complete by date: </label>
                  <TextInput type="date" name="completeByDate" />
                </div>
                <div>
                  <label htmlFor="isComplete">Has been completed: </label>
                  <TextInput type="checkbox" name="isComplete" />
                </div>
              </InputGroup>
              <SubmitButton type="submit">Save Goal</SubmitButton>
            </form>
          </ModalContainer>
        </Overlay>
      )}
    </>
  )
}

const InputGroup = styled.div`
  width: 100%;
`
const ModalContainer = styled.div`
  background-color: #94ae3f;
  color: #fff;
  font-family: sans-serif;
  font-size: 18px;
  height: 300px;
  margin-left: -150px !important;
  padding: 24px;
  left: 50%;
  position: relative;
  width: 300px;
  z-index: 100;
`
const ModalHeader = styled.div`
  display: flex;
  font-size: 24px;
  width: 100%;

  > p {
    padding: 0 12px;
  }

  > p:nth-child(2) {
    margin-left: 4rem;
  }
`
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: -webkit-fill-available;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 99;
`
const SubmitButton = styled.button`
  background-color: #243754;
  border: unset;
  color: #fff;
  font-size: 18px;
  margin-top: 24px;
  padding: 6px 12px;
`
const TextInput = styled.input`
  font-size: 18px;
  margin: 6px 0;
`

export default CreateGoalModal
