
import { Chart } from "chart.js/auto";
import { PieController,BarController } from "chart.js/auto";
import { useEffect, useState } from "react";


const data = {
    labels: ['Key1', 'Key2', 'Key3'],
    datasets: [{
      data: [30, 40, 30], 
      backgroundColor: ['red', 'green', 'blue'], 
    }]
  };
  

/////

 

  const ChartData=()=>{
    const [d, setD]= useState("")

   
   const fun=()=>{
  
    const ctx = document.getElementById("myChart1").getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar', 
      data: data,
      options:{
        responsive: false,  
      },
  
    });
  
console.log(myChart)
    }

   
    useEffect(()=>{
     fun();
    
    },[])
    
    
    return (
        <>
        <canvas id="myChart1" width="250" height="250">
          
         </canvas>
        {/* {myChart} */}
        </>
    )
  }

  export default ChartData