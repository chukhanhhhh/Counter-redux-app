import React, { Component } from 'react'
import { connect } from 'react-redux'
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import ConterControl from '../../components/CounterControl/CounterControl'
import * as actionTypes from '../../store/action'

export class Counter extends Component {
    render() {
        return (
            <div className="counter-class-component">
                <ConterControl lablel = "Increment" handleClicked = {this.props.onIncrementCounter} />
                <ConterControl lablel = "Decrement" handleClicked = {this.props.onDecrementCounter} />
                <ConterControl lablel = "ADD" handleClicked = {this.props.onAddCounter} />
                <ConterControl lablel = "Subtract" handleClicked = {this.props.onSubtractCounter} />
                <ConterControl lablel = "Reset" handleClicked = {this.props.onResetCounter} />
                <CounterOutput value={this.props.counter}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        counter : state.ctr.counter,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter : () => dispatch({type: actionTypes.DECREMENT}),
        onResetCounter : () => dispatch({type : actionTypes.RESET}),
        onAddCounter : () => dispatch({type: actionTypes.ADD, number: 10}),
        onSubtractCounter : () => dispatch({type: actionTypes.SUBTRACT, number:  10})
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
