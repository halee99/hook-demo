import React, {useState} from "react"

import {useGlobalMutation} from './Container'

const Demo3_1 = () => {
  // 拿到 Container 组件的 state
  // 拿到 Container 组件的 method
  let mutationCtx = useGlobalMutation()

  let [money, setMoney] = useState(0)
  return (
    <div>
      <h4>demo3-1</h4>
      <div>
        <span>工作赚了：</span>
        <input
          type="text"
          onChange={(e) => {
            let m = Number(e.target.value)
            if(isNaN(m)) {
              setMoney(0)
            } else {
              setMoney(m)
            }
          }}
          value={money}
        />
        <button onClick={() => {
          mutationCtx.work(money)
          // 重置输入框内容
          setMoney(0)
        }}>确认</button>
      </div>
    </div>
  )
}

export default Demo3_1
