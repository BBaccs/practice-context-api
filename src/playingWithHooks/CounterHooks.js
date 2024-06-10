import React, { useState } from 'react';

export default function CounterHooks() {
    const [count, callMeAnythingPerhapsCallMeSetCount] = useState(0);

    // useState eturns an array with 2 items
    //   1. Reference to a piece of state
    //   2. A function to update that piece of state
    return (
        <div>
            <h1>the count is : {count}</h1>
            <button onClick={() => callMeAnythingPerhapsCallMeSetCount(count + 1)}>Add 1</button>
        </div>
    )
}