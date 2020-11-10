import React from 'react'
import './CounterOutput.scss';

const CounterOutput = ({value}) => {
    return (
        <div className = "counter-output">
            <p> Current Counter : <span>{value}</span></p>
        </div>
    )
}

export default CounterOutput
