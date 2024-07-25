import React from 'react'
import { createContext, useContext } from 'react'


function GrandParent() {
  const ColorContext = useContext(Style);
    
  return (
      <div>
        <h1 style={{ color: ColorContext.color, backgroundColor: ColorContext.backgroundColor }}>Grand Parent</h1>
      </div>
  )
}

export const Style = createContext({color: 'yellow', backgroundColor: 'blue'});
export default GrandParent;
