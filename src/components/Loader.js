import React from 'react'

const Loader = ({height, width}) => {
  return (
<div className='d-flex flex-column aligin-items-end'>
<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="Loding..." height={height} width={width}/>
</div>
  )
}

export default Loader