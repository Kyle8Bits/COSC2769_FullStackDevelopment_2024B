import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

function UseRef() {
    const valueRef = useRef(0);
    const [state,setStage] = useState(0);

    console.log(valueRef.current.innerText);

    useEffect(()=>{
      console.log('A')
    },[state])

  return (
    <div>
      <h1 ref={valueRef} >Heloo</h1>
      <button onClick={(e)=> setStage(state+1)}>Click</button>
    </div>
  )
}

export default UseRef
