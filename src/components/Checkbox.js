import React from 'react';
import './checkbox.css';

const Checkbox = ({title, name, value}) => {
  return (
    <>
    <label className='label'>{title}  </label>
    <input type='checkbox' name={name} value={value}/>
    </>
  )
}
export default Checkbox;
