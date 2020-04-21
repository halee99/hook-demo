import React, {useState, useEffect} from "react"
import {log} from "../utils"

function Demo1({name}) {
  let [count, setCount] = useState(0)

  useEffect(() => {
    log('更新count: ', count)
    return () => {
      log('下次 count 改动前为: ', count)
    }
  }, [count])

  useEffect(() => {
    log('加载 demo1 成功')
    return () => {
      log('卸载 demo1 成功')
    }
  }, [])

  log('运行了 demo1')

  return (
    // 必须有一个最外层元素包裹
    // 如果只有一个元素，可以只返回该元素
    <div>
      <h3>{name} useState useEffect 的使用</h3>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <div>计数：{count}</div>
    </div>
  )
}

export default Demo1
