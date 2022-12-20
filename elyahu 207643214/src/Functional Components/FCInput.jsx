import React, { useState } from 'react'

export default function FCInput(props) {
  const [num1, setNum] = useState('')

  const chgNum1 = (e) =>{
    setNum(e.target.value);
    props.firstNum(e.target.value);
  } 

  return (
    <div>
      <div><input onChange={chgNum1} type="text" /></div>
    </div>
  )
}

