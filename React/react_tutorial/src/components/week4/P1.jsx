import React from 'react'
import GrandChild from './GrandChild'
import GrandParent from './GrandParent'
import Children from './Children'
import Parent from './Parent'

import { Style } from './GrandParent'

function P1() {
    return (
        <div>
        <Style.Provider value={{ color: 'red', backgroundColor: 'yellow' }}>
           <GrandParent/>
           <Parent/>
           <Children/>

           <Style.Provider value={{color: 'green', backgroundColor: 'gray'}}>
            <GrandChild/>
           </Style.Provider>
        </Style.Provider>
        
        <GrandParent/>
        </div>
    );
}

export default P1
