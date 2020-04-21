import React, {useReducer, createContext, useContext} from "react"
import {defaultState, reducer} from './store'
import {log} from "../utils"

const StateContext = createContext({})
const MutationContext = createContext({})

// ContainerProvider 是一个对 store 仓库的封装
// 可以让 ContainerProvider 组件的所有子组件拿到仓库的 store 和更新 store 的方法
function ContainerProvider({children}) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  log('children:', children)
  // 仓库更新的封装
  const methods = {
    work: function(money) {
      let action = {
        type: 'work',
        payload: money
      }
      dispatch(action)
    },
    do(x) {
      dispatch({
        type: 'status',
        payload: x
      })
    },
    buy(thing, money) {
      if (thing === '') {
        return
      }
      dispatch({
        type: 'spend',
        payload: money,
      })
      dispatch({
        type: 'buy',
        payload: thing,
      })
    }
  }

  return (
    // 把 state 状态仓库提供给 StateContext 的子孙元素
    // 把 methods 更新仓库的方法提供给 MutationContext 的子孙元素
    <StateContext.Provider value={state}>
      <MutationContext.Provider value={methods}>
        {children}
      </MutationContext.Provider>
    </StateContext.Provider>
  )
}

const useGlobalState = () => {
  return useContext(StateContext)
}

const useGlobalMutation = () => {
  return useContext(MutationContext)
}

export default ContainerProvider

export {
  useGlobalState,
  useGlobalMutation,
}
