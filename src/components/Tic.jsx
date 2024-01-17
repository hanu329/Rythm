import React, { useState, useRef } from "react"
import styled from "styled-components"
let arr=[]
for(let i=0; i<3; i++){
    arr.push([0,0,0])
}
let temp= JSON.parse(JSON.stringify(arr))
//let temp=arr.slice();


export const Tic=()=>{
   const [sqr, setSqr]=useState(temp)
   const [w, setW]=useState('')
  const c= useRef(0)
  const res=useRef("")
 const func=(a,b)=>{

    if(c.current>0 && w ==''){
        if(c.current%2==0){
          
            const newArray = [...sqr];
            newArray[a][b] = 1;
            setSqr(newArray);
            c.current++
            win()
            if(res.current=='win'){
                setW('a is winner')
            }
          }else{
            
            const newArray = [...sqr];
            newArray[a][b] = 2;
            setSqr(newArray);
            c.current++
            win()
            if(res.current=='win'){
                setW('b is winner')
            }
          }
    }
 

 }

 const btnFun=(v)=>{
    if(c.current==0){
        if(v==0){
            c.current=2
         }
         else{
           c.current=1
         }
    }
     
 }
 
 const win=()=>{
   

        for(let i=0; i<3; i++){
          const [m,n,o]=[0,1,2]
        
            if(sqr[i][m]==sqr[i][n] && sqr[i][n]==sqr[i][o] && sqr[i][m]!= 0){
                res.current='win'
                return 'win'
             
              }
        }
            for(let i=0; i<3; i++){
                const [m,n,o]=[0,1,2]
                if(sqr[m][i]==sqr[n][i] && sqr[n][i]==sqr[o][i] && sqr[m][i]!= 0){
                    res.current='win'
                    return 'win'
                 
                }
              }
              if(sqr[0][0]==sqr[1][1] && sqr[1][1]==sqr[2][2] && sqr[0][0]!=0){
                res.current='win'
                return 'win'
             
              }
              if(sqr[0][2]==sqr[1][1] && sqr[1][1]==sqr[2][0] && sqr[0][2]!=0){
                res.current='win'
                return 'win'
                
              }
          
        }
   
        const startFun=()=>{
          let temp2= JSON.parse(JSON.stringify(arr))
          //let temp2=arr.slice();
          setSqr(temp2)
          setW("")
          c.current=0;
          res.current=""
        }

    return (
        <>
          <h3>winner: {w}</h3>
  
          {
            
            sqr.map((elem,i)=>(
               <React.Fragment key={i}>
               {console.log(i)}
               <div > 
                 {elem.map((el,j)=>(
                    <TicSpan key={j} onClick={()=>func(i,j)}>

                     <span >
                    
                        {el==1?"X ":el==2?"O ":"- "}
                        </span>
                    </TicSpan>
                 ))}
                 </div>
               </React.Fragment>
            ))
          }
          <button onClick={startFun} style={{padding:'15px', margin:'10px'}}>Start</button>
          <button onClick={()=>btnFun(0)} style={{padding:'15px', margin:'10px'}}>A</button>
          <button onClick={()=>btnFun(1)} style={{padding:'15px',margin:'10px'}}>B</button>
        </>
    )
}
 
const TicSpan=styled.span`
  padding:10px;
 border:1px solid grey ;
 display:inline-block;
 width:30px;
 height:30px;
`;
