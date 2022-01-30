import React from "react";

const R072_onSubmit = (props) => {

  const submit = (e) => {
    let inputValue = document.getElementById('inputID').value
    console.log(`inputValue : ${inputValue}`)
    e.preventDefault()
  }

  return (
    <form onSubmit={submit}>
      <input type="text" name={'inputName'} id={'inputID'}/>
      <input type="submit" value={'Submit'}/>
    </form>
  )
}

export default R072_onSubmit
