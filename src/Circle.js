import React from 'react'

const Circle = ({ data }) => (
  <div 
    style={{
      position: 'absolute',
      height: '50px',
      borderRadius: '50px',
      width: '50px',
      top: data.y -100,
      left: data.x -100,
      border: 'solid 2px blue'
    }}
  >
    {data.x}, {data.y}
  </div>
)

export default Circle