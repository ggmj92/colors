import { useState, useRef } from 'react';
import BoxColor from './BoxColor';

function MyForm() {
  const [value, setValue] = useState('');
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
    <input type="text" value={value} onChange={handleChange} placeholder='Enter a color'/>
    <div className='container'>
    {colors.map((color, index) => {
      return (
      <BoxColor key={index} color={color} value={value} />
      )
    })}
    </div>
    </>
  );
}

export default MyForm;