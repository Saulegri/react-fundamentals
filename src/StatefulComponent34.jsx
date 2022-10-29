import React, {useState} from 'react';

export function StatefulComponent34(){
    const[count,setCount]=useState(0);

function Increment(){
   setCount(count +1);
} 
function Decrement(){
    if(count>0){
        setCount(count -1);
    }
}    
return(

<div>
      <button onClick = {Increment}> Increment</button>
      <button onClick = {Decrement}>Decrement</button>
      <p>
        <span>Result:{count} </span>
      </p>
    </div>
)
}
