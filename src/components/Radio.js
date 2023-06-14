import React from 'react';
import './radio.css'

const Radio = ({title, name, value}) => {
  return (
    <>
      <label className='label'>{title}  </label>
    <input type='radio' name={name} value={value}/>
    </>
  )
}
export default Radio;
