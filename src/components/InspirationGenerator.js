import React from 'react'
import quotes from './quotes';
import { useState } from 'react';
export default function InspirationGenerator() {
    const [index, setIndex] = useState(0);
    const quote = quotes[index];
    const handleClick=()=>{setIndex((index+1)%quotes.length)};
   
  return (
    <div>
      <p>My inspiration is :{quote.type}</p>
      <p>{quote.value}</p>
      <button onClick={handleClick}>MyInspiraton</button>
    </div>
  )
}
