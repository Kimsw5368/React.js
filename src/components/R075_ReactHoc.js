import React from "react";
import withComponent from "./withComponent";

const R075_ReactHoc = (props) => {
  console.log('HocComponent render')
  return (
    <h2>props.name : {props.name}</h2>
  )
}

export default withComponent(R075_ReactHoc, 'R075')
