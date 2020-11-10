import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/action'

const CounterHook = () => {
    const [number, setNumber] = useState(2);
    const counter = useSelector(state => state.ctr.counter );
    const dispatch = useDispatch();

    const handleUserClicked = {
            onIncrementCounter : () => dispatch({type: actionTypes.INCREMENT}),
            onDecrementCounter : () => dispatch({type: actionTypes.DECREMENT}),
            onResetCounter : () => dispatch({type : actionTypes.RESET}),
            onAddCounter : () => dispatch({type: actionTypes.ADD, number: parseFloat(number)}),
            onSubtractCounter : () => dispatch({type: actionTypes.SUBTRACT, number:  parseFloat(number)}),
            onChangeNumber: (e) => setNumber(e.target.value),
    };
    return (
        <div>
            <CounterOutput value={counter}/>
            <input type="number" name="" id="" value={number} onChange={handleUserClicked.onChangeNumber}/>
            <CounterControl lablel = "Increment" handleClicked = {handleUserClicked.onIncrementCounter} />
            <CounterControl lablel = "Decrement" handleClicked = {handleUserClicked.onDecrementCounter} />
            <CounterControl lablel = "Reset" handleClicked = {handleUserClicked.onResetCounter} />
            <CounterControl lablel = "ADD" handleClicked = {handleUserClicked.onAddCounter} />
            <CounterControl lablel = "Subtract" handleClicked = {handleUserClicked.onSubtractCounter} />
            
        </div>
    )
}


export default CounterHook
