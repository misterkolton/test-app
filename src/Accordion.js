import React, { useState } from 'react'

export function Accordion() {

  const [isToggled, setIsToggled] = useState(false)

    return (
        <div>
            { isToggled && 
            <h3>Show me</h3>
            }
            
            <button
              onClick={ () => setIsToggled(!isToggled)}
            >Toggle</button>
        </div>
    )
}