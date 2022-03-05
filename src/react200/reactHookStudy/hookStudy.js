import  React, {useEffect, useState} from "react";

const hookStudy = () => {
  const [counter, setCounter] = useState(0)
  const [keyword, setKeyword] = useState('')
  const [showing, setShowing] = useState(false)

  const onClick = () => {
    setCounter((prev) => prev + 1)
  }

  const onHideClick = () => {
    setShowing(!showing)
  }

  const onChange = (event) => {
    setKeyword(event.target.value)
  }

  useEffect(() => {
    console.log('iRunOnlyOnce')
  }, [])

  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('SEARCH FOR', keyword)
    }
  }, [keyword])

  useEffect(() => {
    console.log('I Run Only Counter')
  }, [counter])

  useEffect(() => {
    console.log('I run when keyword and counter changes')
  }, [counter, keyword])

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder='Search here...'
      />
      <h1>{counter}</h1>
      <div>{keyword}</div>
      <button onClick={onClick}>click me</button>
      <button onClick={onHideClick}>{showing ? 'Hide' : 'Show'}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

const Hello = () => {
  useEffect(() => {
    console.log('created')
    return () => {
      console.log('destroy')
    }
  })

  return <h1>hello</h1>
}

export default hookStudy
