import React, { useReducer } from 'react';

function reducer(state, action){
    if (action.type === "INCREMENT") {
        return { count: state.count + 1 };
    }
    if (action.type === "DECREMENT") {
        return { count: state.count - 1 };
        
    }

}

export default function PlayingWithUseReducer() {
const [ state, dispatch ] = useReducer(reducer, { count: 0})
    return (
        <div>
            <br />
            <p>Playing with useReducer: {state.count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>ADD +1</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Subtract -1</button>
        </div>
    )
}