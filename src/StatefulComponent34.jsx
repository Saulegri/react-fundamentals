import React, {useState} from 'react';

export function StatefulComponent34(){
    const[count,setCount]=useState(0);

function increment(){
   setCount(count +1);
} 
function decrement(){
    if(count>0){
        setCount(count -1);
    }
}    
return(

<div>
      <button onClick = {increment}> Increment</button>
      <button onClick = {decrement}>Decrement</button>
      <p>
        <span>Result:{count} </span>
      </p>
    </div>
)
}
