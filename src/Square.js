import React from 'react'

const Square = ({ data }) => (
  <div 
    style={{
      position: 'absolute',
      height: '50px',
      width: '50px',
      top: data.y,
      left: data.x,
      border: 'solid 1px black'
    }}
  >
    {data.x}, {data.y}
  </div>
)

export default Square