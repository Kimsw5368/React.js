import React, {useEffect} from "react";

const withComponent = (InComponent, InComponentName) => {
  const OutComponent = props => {
    useEffect(() => {
      console.log('useEffect')
    }, [])
    return <InComponent {...props} />
  }
  return OutComponent
}

export default withComponent
