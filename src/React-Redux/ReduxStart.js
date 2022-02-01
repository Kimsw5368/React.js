import React, {useState} from "react";
import Left1 from "./Left1";
import Right1 from "./Right1";
import { createStore } from "redux";
import { Provider } from "react-redux";

const reducer = (currentState, action) => {
  if (currentState === undefined) {
    return {
      number : 1
    }
  }
  const newState = {...currentState}
  if (action.type === 'PLUS') {
    newState.number++
  }
  return newState
}

const store = createStore(reducer)

const ReduxStart = (props) => {
  return (
    <div id={'container'}>
      <h1>Root: {}</h1>
      <div id={'grid'}>
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}

export default ReduxStart
