import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CreateItemModal = () => {
    const [shouldCloseModal, setShouldCloseModal] = useState(true);

    const saveItem = (e) => {
        const itemData = {
            category: e.target.category.value,
            cost: e.target.cost.value,
            title: e.target.title.value
        };

        axios.post('http://localhost:3010/api/createItem', {
            itemData: itemData
        });
    }

    return (
        <>
        {
            shouldCloseModal &&
            <Overlay>
                <ModalContainer>
                    <form onSubmit={(e) => saveItem(e)}>
                        <ModalHeader>
                        <p>Add A New Item</p>
                        <p
                            className="close-btn"
                            onClick={() => setShouldCloseModal(false)}>
                                X
                        </p>
                        </ModalHeader>
                        <InputGroup>
                            <div>
                                <label htmlFor="title">Title of item: </label>
                                <TextInput type="text" name="title" />
                            </div>
                            <div>
                                <label htmlFor="category">Category of item: </label>
                                <TextInput type="text" name="category" />
                            </div>
                            <div>
                                <label htmlFor="cost">Cost of item: </label>
                                <TextInput type="number" step=".01" name="cost" />
                        </div>
                        </InputGroup>
                        <SubmitButton type="submit">Save Item</SubmitButton>
                    </form>
                </ModalContainer>
            </Overlay>
        }
        </>
    )
}

const InputGroup = styled.div`
    width: 100%;
`
const ModalContainer = styled.div`
    background-color: #94ae3f;
    color: #FFF;
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

export default CreateItemModal;
