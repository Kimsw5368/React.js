import React, {useEffect} from "react";
import axios from 'axios'

const R062_AxiosPost = () => {
  useEffect(() => {
    axios.post('http://jsontest.com/', {
      a: 'react', b: 200
    })
      .then( response => {alert(response.data.date)} )
      .catch((e) => {
        alert(e)
      })
  }, [])

  return(
    <h1>axios post</h1>
  )
}

export default R062_AxiosPost
