import React from 'react'

const CounterOutput = ({value}) => {
    return (
        <div className = "counter-output">
            <p> Current Counter: {value}</p>
        </div>
    )
}

export default CounterOutput
