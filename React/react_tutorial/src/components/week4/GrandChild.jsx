import React from 'react'
import { Style } from './GrandParent'
import { useContext } from 'react'

function GrandChild() {

  const style = useContext(Style);

  return (
    <div>
        <h1 style={{color:style.color, background:style.backgroundColor}}>Grand Child</h1>
    </div>
  )
}

export default GrandChild
