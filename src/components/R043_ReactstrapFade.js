import React, {useState} from 'react'
import { Button, Fade } from 'reactstrap'

const R043_ReactstrapFade = (props) => {
  const [state, setState] = useState(true)

  const toggle = (e) => {
    setState(!state)
  }

  return (
    <div>
      <Button color='success' onClick={toggle}>Fade In/Out</Button>
      <Fade in={state} tag='h1'>
        Loren ipsum dolor sit amet, cobsectetur adipiscing elit
      </Fade>
    </div>
  )
}

export default R043_ReactstrapFade
