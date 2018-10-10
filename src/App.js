import React from 'react'
import Tracker from './Tracker'
import Square from './Square'
import Circle from './Circle'

const App = () => (
  <Tracker>
  { (data) => (
    <>
    <Square data={data}/>
    <Circle data={data} />
    </>
  )}
  </Tracker>
)

export default App