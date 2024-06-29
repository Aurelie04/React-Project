import React from 'react'

function MenuItem({image, name, price}) {
  return (
    <div className='menuItem'style={{ background: `url({image})` }} >
        <div></div>
        <h1>{name}</h1>
        <p> R{price}</p>
    </div>
  )
}

export default MenuItem