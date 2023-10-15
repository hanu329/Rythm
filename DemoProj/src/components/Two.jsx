import { memo, useEffect, useState } from "react";



 const Two = ({arr,v}) => {
    const [ar, setAr]=useState([])
   
  //  console.log(arr)
   console.log(33)
    return (
       <div>
           {
          ar.map((el)=>(
                <h3>{el}</h3>
            ))
           } 
              <button onClick={ ()=>{
 v("n")
console.log(arr)
setAr(arr)
       }
                
                }>click</button>
        </div>
        );
};
export default memo(Two)