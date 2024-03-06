import React, { useState } from 'react'

export default function Calculator() {
    const[cal,setcal]=useState('')
    const handleval=()=>{
        setcal(eval(cal))
    }
  return (
    <div>
      <input type="text" value={cal}></input>
      <br></br>
      <button onClick={()=>{setcal(prev=>prev+'1')}}>1</button>
      <button onClick={()=>{setcal(prev=>prev+'2')}}>2</button>
      <button onClick={()=>{setcal(prev=>prev+'3')}}>3</button>
      <button onClick={()=>{setcal(prev=>prev+'+')}}>+</button>
      <button onClick={()=>{setcal(prev=>prev+'-')}}>-</button>
      <button onClick={handleval}>=</button>
      
    </div>
  )
}


