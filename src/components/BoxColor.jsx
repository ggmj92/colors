import React, { useEffect, useRef } from 'react';

function boxColor ({color, value}) {
const boxRef = useRef();

useEffect(() => {
  if (value === color) {
    boxRef.current.style.backgroundColor = color;
    boxRef.current.style.color = 'black';
  } else {
    boxRef.current.style.backgroundColor = '';
    boxRef.current.style.borderColor = color;
    boxRef.current.style.color = color;
    
  }

  const boxText = value === color ? `Yes, I am the color ${color}!` : `I am not the color ${value}`;
  boxRef.current.textContent = boxText;
}, [value, color]);


  return (
    <>
    <div ref={boxRef} className={`box ${color}`}></div>
    </> 
  )
}

export default boxColor;