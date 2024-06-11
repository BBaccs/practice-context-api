import React, { useState, useEffect } from 'react';

export default function Clicker() {
    const [ count, setCount ] = useState(0);
    useEffect(() => {
        console.log('something changed')
    })
  return (
    <div>
        "CLICKER" uses useEffect hook to udpate the title
        <button onClick={ () => setCount( count + 1 )}>Click me { count } </button>
    </div>
  )
}
