import React, {useState} from "react";

const R073_ReactRef = (props) => {

  const [inputRef, setInputRef] = useState(React.createRef)

  const refFocus = (e) => {
    inputRef.current.focus()
  }

  return (
    <>
      <input type="text" ref={refFocus}/>
      <input type={'button'} value={'Ref Focus'} onClick={refFocus} />
    </>
  )
}

export default R073_ReactRef
