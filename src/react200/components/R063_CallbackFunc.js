import React, {useEffect} from "react";

const R063_CallbackFunc = () => {
  const logPrint = (param, callback) => {
    console.log(`logPrint param : ${param}`)
    param += param
    callback(param)
  }

  useEffect(() => {
    logPrint(1, (return1) => {
      console.log(`return1 : ${return1}`)
      logPrint(return1, (return2) => {
        console.log(`return2 : ${return2}`)
      })
    })
  })

  return(
    <h1>Callback Function</h1>
  )
}

export default R063_CallbackFunc
