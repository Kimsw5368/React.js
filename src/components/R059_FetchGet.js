import React, {useEffect} from "react";

const R059_FetchGet = () => {
  useEffect(async () => {
    const response = await fetch('http://date.jsontest.com/')
    const body = await response.json()
    alert(body.date)
  }, [])

  return (
    <h1>fetch get</h1>
  )
}

export default R059_FetchGet
