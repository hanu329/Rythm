

import React, { useCallback, useEffect, useState,useRef } from 'react';
import  Two  from './Two';
    

export const One = () => {
    const [d, setD]=useState([])
    const [t,setT]=useState(null)
    const [i,setI]=useState(1)

    const ref=useRef(null)
    useEffect(()=>{
       
    },[])
    const cb=useCallback((a)=>{setD([...d,a])},[d])
   
    return (        
        <div> 
            {i}
            {d.map((el)=>(el))}
            <input type="text" refs={t} onChange={(e)=>setT(e.target.value)} />
            <button onClick={()=>setI(i+1)}>change</button>
     <Two arr={d} v={cb}/>
        </div>
        )
}
