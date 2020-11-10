import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import './CounterHook.scss';
import * as actionTypes from '../../store/action'

const CounterHook = () => {
    const [number, setNumber] = useState(2);
    const counter = useSelector(state => state.ctr.counter);
    const dispatch = useDispatch();

    const handleUserClicked = {
        handleUserDispatch : {
            onIncrementCounter : () => dispatch({type: actionTypes.INCREMENT}),
            onDecrementCounter : () => dispatch({type: actionTypes.DECREMENT}),
            onAddCounter : () => dispatch({type: actionTypes.ADD, number: parseFloat(number)}),
            onSubtractCounter : () => dispatch({type: actionTypes.SUBTRACT, number:  parseFloat(number)}),
            onResetCounter : () => dispatch({type : actionTypes.RESET}),
        },

        handleUserChange: {
            onChangeNumber: (e) => setNumber(e.target.value),
        }
    };
    return (
        <div className="counter-hook">
            <CounterOutput value={counter}/>
            <input type="number" value={number} onChange={handleUserClicked.handleUserChange.onChangeNumber}/>
            <CounterControl lablel = "Increment" handleClicked = {handleUserClicked.handleUserDispatch.onIncrementCounter} />
            <CounterControl lablel = "Decrement" handleClicked = {handleUserClicked.handleUserDispatch.onDecrementCounter} />
            <CounterControl lablel = "ADD" handleClicked = {handleUserClicked.handleUserDispatch.onAddCounter} />
            <CounterControl lablel = "Subtract" handleClicked = {handleUserClicked.handleUserDispatch.onSubtractCounter} />
            <CounterControl lablel = "Reset" handleClicked = {handleUserClicked.handleUserDispatch.onResetCounter} />
            
        </div>
    )
}


export default CounterHook
