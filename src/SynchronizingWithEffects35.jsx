import { useState, useEffect } from 'react';

export function SynchronizingWithEffects35(){
    const[count,setCount]=useState(0); 
    
    
function Increment(){
        setCount(count +1);
    }   
useEffect(()=>{
    if (count===5){
   alert("Hight FIVE!")}
    }, [count]);

return(
<div>
      <button onClick = {Increment}>Increment </button>
      <p>
        <span>Result:{count} </span>
      </p>
    </div>
)
    }

