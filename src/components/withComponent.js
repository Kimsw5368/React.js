import React, {useEffect} from "react";

const withComponent = (InComponent, InComponentName) => {
  const OutComponent = props => {
    useEffect(() => {
      console.log('useEffect')
    }, [])
    props = {
      ...props,
      InComponentName
    }
    return <InComponent {...props} />
  }
  return OutComponent
}

export default withComponent
