import { Box } from '@mui/system';
import React from 'react'
import './MyInput.css'
const MyInput = ({placeholder,name,value, className, onChange}) => {
  return (
    <Box>
        <input onChange={onChange} className={className} placeholder={placeholder} name={name} value={value}/>
    </Box>
  )
}
export default MyInput;