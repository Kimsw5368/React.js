import React, { useState } from 'react'
import { Button, ButtonGroup } from 'reactstrap'

function R038_ReactstrapButtonGroup(props) {
  const [state, setState] = useState(10)

  const move = (type, e) => {
    if (type === 'Left') {
      setState(state - 1)
    } else if (type === 'Right') {
      setState(state + 1)
    } else if (type === 'Middle') {
      setState(state * 2)
    }
  }

  return (
    <div style={{padding: '0px'}}>
      <ButtonGroup style={{padding: '0px'}}>
        <Button onClick={e => move('Left')}>Left</Button>
        <Button onClick={e => move('Middle')}>Middle</Button>
        <Button onClick={e => move('Right')}>Right</Button>
      </ButtonGroup>
      <br /> {state}
    </div>
  )
}

export default R038_ReactstrapButtonGroup
