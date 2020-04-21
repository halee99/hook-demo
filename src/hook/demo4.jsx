// useMemo与useCallback使用
// https://blog.csdn.net/sinat_17775997/article/details/94453167

import React, {useState, useMemo} from "react"
import {log} from "../utils"

const Demo4 = () => {
  let [a, setA] = useState(1000)
  let [b, setB] = useState(1000)
  let [c, setC] = useState(0)

  let sumA = useMemo(()  => {
    log('计算 sumA')
    let cnt = 0
    for (let i = 0; i <= a; i++) {
      cnt += i
    }
    return cnt
  }, [a])

  let sumB = 0
  log('计算 sumB')
  for (let i = 0; i <= b; i++) {
    sumB += i
  }

  return (
    <div>
      <h3>第四个例子：useMemo</h3>
      <div>
        <span>a: {a}</span>
        <button onClick={() => setA(a + 1)}>+1</button>

        <div>1~a({a})的总和：{sumA}</div>
      </div>
      <div>
        <span>b: {b}</span>
        <button onClick={() => setB(b + 1)}>+1</button>

        <div>1~b({b})的总和：{sumB}</div>
      </div>
      <div>
        <span>c: {c}</span>
        <button onClick={() => setC(c + 1)}>+1</button>
      </div>
    </div>
  )
}


export default Demo4
