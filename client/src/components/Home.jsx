import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import CreateItemModal from './CreateItemModal';
import { VictoryArea, VictoryChart, VictoryPie, VictoryTheme } from 'victory';

const AddItem = styled.div`
    font-size: 24px;
    margin: 0 auto;
    text-align: center;
    width: 50%;
`
const AddItemIcon = styled.div`
    font-size: 50px;
    margin: 0;
`
const Container = styled.main`
    margin: 0 auto;
    width: 80%;
`
const Flex = styled.div`
    display: flex;
    margin: 0 auto;
`
const GraphButton = styled.p`
    background-color: #94ae3f;
    border: 1px solid;
    border-radius: 12px;
    color: #fff;
    margin: auto;
    padding: 6px 12px;
    width: 100px;

    &:hover {
        background-color: rgba(148, 174, 63, 0.8);
        cursor: pointer;
    }
`
const GraphContainer = styled.div`
    background-color: #ebebeb;
    margin: 12px auto;
    padding: 12px;
    width: 100%;
`
const GraphDisplay = styled.div`
    margin: 0 auto;
    width: 500px;
`
const GraphStats = styled.div`
    font-size: 24px;
    margin: 0 auto;
    text-align: center;
    width: 50%;
`
const TotalDisplay = styled.div`
    background-color: #94ae3f;
    border-radius: 24px;
    font-size: 36px;
    margin: 0 auto;
    padding: 12px;
    text-align: center;
    width: 250px;

    > p {
        color: #101321;
        font-family: 'Arial sans-serif';
        font-weight: bold;
    }
`

const Home = () => {
    const [total, setTotal] = useState(0);
    const [showItemModal, setShowItemModal] = useState(false);
    const [statsType, setStatsType] = useState('week');
    const [itemList, setItemList] = useState([]);
    
    let billsData = itemList.filter(item => item.category === 'Bills');
    let foodData = itemList.filter(item => item.category === 'Food');
    let stuffData = itemList.filter(item => item.category === 'Stuff');

    let billsTotal = 0;
    let foodTotal = 0;
    let stuffTotal = 0;

    useEffect(() => {
        getAllItems();
    }, []);

    const getAllItems = () => {
        axios.get('http://localhost:3010/api/getAllItems')
            .then(itemList => {
                let total = 0;
                
                itemList.data.forEach(item => {
                    total += item.cost;
                });

                setItemList(itemList.data);
                setTotal(total);
            });
    }
    
    billsData.forEach(bill => {
        billsTotal += bill.cost;
    });
    
    foodData.forEach(food => {
        foodTotal += food.cost;
    });
    
    stuffData.forEach(stuff => {
        stuffTotal += stuff.cost;
    });

    return (
        <Container>
            <TotalDisplay>
                Spent this month: {' '}
                <p>{total.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2})}</p>
            </TotalDisplay>
            <GraphContainer>
                <GraphStats>
                    <p>See Other Stats</p>
                    <Flex>
                        <GraphButton onClick={() => setStatsType('type')}>By Type</GraphButton>
                        <GraphButton onClick={() => setStatsType('week')}>By Week</GraphButton>
                    </Flex>
                </GraphStats>
                <AddItem>
                    Add Item {' '}
                    <AddItemIcon onClick={() => setShowItemModal(!showItemModal)}>
                        <FontAwesomeIcon icon={faPlusSquare} />
                    </AddItemIcon>
                </AddItem>
                <GraphDisplay>
                {
                statsType === 'type' ?
                    <VictoryPie
                        colorScale={["#243754", "#94ae3f", "#ebebeb"]}
                        cornerRadius={7}
                        // TODO: get data array from App.jsx
                        // data={this.props.data}
                        data={[
                            { x: "Food", y: ((foodTotal / total) * 100) },
                            { x: "Bills", y: ((billsTotal / total) * 100) },
                            { x: "Stuff", y: ((stuffTotal / total) * 100) }
                        ]}
                        height={300}
                        innerRadius={50}
                    />
                :
                <VictoryChart
                    theme={VictoryTheme.material}
                    >
                    <VictoryArea
                        style={{ data: { fill: "#243754" } }}
                        data={[
                        { x: "Food", y: foodTotal },
                        { x: "Bills", y: billsTotal },
                        { x: "Stuff", y: stuffTotal }
                    ]}
                    />
                    </VictoryChart>
                }
                </GraphDisplay>
            </GraphContainer>
            {showItemModal ? <CreateItemModal /> : ''}
        </Container>
    );
}

export default Home;
