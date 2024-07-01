import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
        return { count: state.count + action.amount };
        case "DECREMENT":
        return { count: state.count - action.amount };
        case "RESET":
        return { count: 0 };
    }
}

export default function PlayingWithUseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <div>
            <br />
            <p>Playing with useReducer: {state.count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT", amount: 1 })}>ADD +1</button>
            <button onClick={() => dispatch({ type: "DECREMENT", amount: 1 })}>Subtract -1</button>
            <button onClick={() => dispatch({ type: "INCREMENT", amount: 5 })}>ADD +5</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
    )
}