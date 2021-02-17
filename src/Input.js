import React, { useState } from "react"

export function Input() {

    const [ inputValue, setinputValue ] = useState("")
    
    return (
        <div>
            {inputValue &&
            <h3>{inputValue}</h3>
            }

        <input value={inputValue} 
        onChange={ (e) => setinputValue(e.target.value)  } />
        </div>
          )
}