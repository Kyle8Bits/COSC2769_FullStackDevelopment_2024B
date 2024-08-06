import React from 'react'
import { useEffect, useState } from 'react'


function MesseageForYou({initialvalue}){

    const [mess, setMess] = useState(initialvalue);

    useEffect(()=>{
        if(mess > 0){
            setTimeout(()=>
                setMess(mess-1)
            ,1000);
        }
    },[mess]);

    return(
        <>
            <h1>Count: {mess}</h1>
        </>
    );
}

export default function EffectUse() {
  return (
    <div>
        <MesseageForYou initialvalue={10}/>
    </div>
  )
}


