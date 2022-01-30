import React from "react";

const R067_onChange = (props) => {

  const change = (e) => {
    let event = e.target.value
    console.log(event)
  }

  return (
    <>
      <input type="text" onChange={change}/>
      <select onChange={change}>
        <option value="react">react</option>
        <option value="200">200</option>
      </select>
    </>
  )
}

export default R067_onChange
