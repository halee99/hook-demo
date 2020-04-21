import React, {useReducer} from "react"

const initialState = {count: 0, name: 'juan'};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1};
    case 'decrement':
      return {...state, count: state.count - 1};
    default:
      throw new Error();
  }
}

function Demo5() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>第五个例子</h3>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}

export default Demo5
