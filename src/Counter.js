import React, { useState } from 'react'

export function Counter () {

    const [ count, setCount ] = useState(1);

    return (
        <div>
            <h3>{count}</h3>
            <button
            onClick={() => setCount(count - 1)}
            >-</button>

            <button
            onClick={() => setCount(count + 1)}
            >+</button>
            
        </div>
    )
}