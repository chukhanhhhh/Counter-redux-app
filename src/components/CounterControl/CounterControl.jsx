import React from 'react'

const CounterControl = ({handleClicked, lablel}) => {
    return (
        <button className="counter-control"
             onClick = {handleClicked}
        >
            {lablel}
        </button>
    )
}

export default CounterControl
