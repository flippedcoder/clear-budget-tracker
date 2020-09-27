import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import CreateItemModal from './CreateItemModal'
import Container from './common/Container'

const Items = () => {
  const [itemList, setItemList] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    getAllItems()
  }, [])

  const getAllItems = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/getAllItems`).then((itemList) => {
      let total = 0

      itemList.data.forEach((item) => {
        total += item.cost
      })

      setItemList(itemList.data)
      setTotal(total)
    })
  }

  const sortItems = (e) => {
    const sortBy = e.target.value

    if (sortBy === 'date') {
      const sortedList = [...itemList].sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)

        return dateB - dateA
      })
      setItemList(sortedList)
    }

    if (sortBy === 'type') {
      const sortedList = [...itemList].sort((a, b) =>
        a.category.localeCompare(b.category)
      )
      setItemList(sortedList)
    }

    if (sortBy === 'cost') {
      const sortedList = [...itemList].sort((a, b) => b.cost - a.cost)
      setItemList(sortedList)
    }
  }

  return (
    <Container>
      <ItemOptions>
        <p>
          Total:{' '}
          {total.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2,
          })}
        </p>
        <div>
          <label htmlFor="sortBy">Sort By: </label>
          <Select name="sortBy" onChange={(e) => sortItems(e)}>
            <option value="date">Date</option>
            <option value="type">Type</option>
            <option value="cost">Cost</option>
          </Select>
        </div>
        <AddItem>
          Add Item{' '}
          <AddItemIcon onClick={() => setShowModal(!showModal)}>
            <FontAwesomeIcon icon={faPlusSquare} />
          </AddItemIcon>
        </AddItem>
      </ItemOptions>
      <RowHeader>
        <Column>Item Title</Column>
        <Column>Category</Column>
        <Column>Spend Date</Column>
        <Column>Cost</Column>
      </RowHeader>
      {itemList.map((item) => (
        <Row key={item._id}>
          <Column>{item.title}</Column>
          <Column>{item.category}</Column>
          <Column>{new Date(item.date).toLocaleDateString()}</Column>
          <Column>
            {item.cost.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 2,
            })}
          </Column>
        </Row>
      ))}
      {showModal && <CreateItemModal />}
    </Container>
  )
}

const AddItem = styled.div`
  font-size: 24px;
  margin: 24px auto 0 auto;
  text-align: center;
  width: 50%;
`
const AddItemIcon = styled.div`
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
const ItemOptions = styled.div`
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
const Select = styled.select`
  font-size: 18px;
`

export default Items
