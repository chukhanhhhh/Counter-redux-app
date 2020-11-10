import * as actionTypes from './action'


const initialState = {
    counter : 0
}

export default (state = initialState, action) => {
    switch (action.type) {

    case actionTypes.INCREMENT:
        return { 
            ...state, 
            counter : state.counter + 1 
    }

    case actionTypes.DECREMENT:
        return { 
            ...state, 
            counter : state.counter - 1 
    }

    case actionTypes.ADD:
        return { 
            ...state, 
            counter : state.counter + action.number
    }

    case actionTypes.SUBTRACT:
        return { 
            ...state, 
            counter : state.counter - action.number 
    }

    case actionTypes.RESET:
        return { 
            ...state, 
            counter : 0
    }

    default:
        return state
    }
}
