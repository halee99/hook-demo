import React from "react"

import {useGlobalMutation, useGlobalState} from './Container'

const Demo3_2 = () => {
  // 拿到 Container 组件的 state
  // 拿到 Container 组件的 method
  let stateCtx = useGlobalState()
  let mutationCtx = useGlobalMutation()

  return (
    <div>
      <h4>demo3-2</h4>
      <div>
        <span>在干嘛：</span>
        <input
          type="text"
          onChange={(e) => {
            mutationCtx.do(e.target.value)
          }}
          value={stateCtx.status}
        />
      </div>

      <ul>
        <li>名字: {stateCtx.name}</li>
        <li>年龄：{stateCtx.age}</li>
        <li>在：{stateCtx.status}</li>
        <li>积蓄：{stateCtx.money}</li>
        <li>物品：{stateCtx.thing.join(',')}</li>
      </ul>
    </div>
  )
}

export default Demo3_2
