import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Button.css';

const Button = ({label, className, onClick, startIcon, endIcon}) => {
  return (
    <>
    <button startIcon={startIcon} endIcon={endIcon} className={className ? className : 'outlined'} onClick={onClick}>{label}</button>
    </>
  )
}
export default Button;