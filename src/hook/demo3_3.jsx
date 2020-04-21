import React, {useState} from "react"

import {useGlobalMutation} from './Container'

const Demo3_3 = () => {
  // 拿到 Container 组件的 state
  // 拿到 Container 组件的 method
  let mutationCtx = useGlobalMutation()

  let [money, setMoney] = useState(0)
  let [thing, setThing] = useState('')

  return (
    <div>
      <h4>demo3-3</h4>
      <div>
        <span>购买：</span>
        <input
          type="text"
          onChange={(e) => {
            setThing(e.target.value)
          }}
          value={thing}
        />
        <span>花了：</span>
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
          mutationCtx.buy(thing, money)
          // 重置输入框的值
          setMoney(0)
          setThing('')
        }}>确认</button>
      </div>
    </div>
  )
}

export default Demo3_3
