import React from 'react'
import "./ConuterControl.scss";
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
