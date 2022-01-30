import React, {useEffect, useState} from "react";
import { Progress } from "reactstrap";

const R052_ReactstrapProgress = () => {
  const [state, setState] = useState(1)

  const progress = () => {
    if (state !== 100) {
      setTimeout(() => {
        setState(state + 1)
        console.log(state)
        progress()
      },1000)
    }
  }

  useEffect(() => {
    progress()
  }, [])

  return (
    <>
      <Progress color={'info'} value={state}>
        {state}%
      </Progress> <br />
      <Progress multi>
        <Progress bar color={'warning'} value={25}>25%</Progress>
        <Progress bar color={'success'} value={35}>wow</Progress>
        <Progress bar value={15}>Meh</Progress>
        <Progress bar color={'danger'} value={25}>Look out</Progress>
      </Progress>
    </>
  )
}

export default R052_ReactstrapProgress
