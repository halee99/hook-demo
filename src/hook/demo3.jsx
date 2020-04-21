import React from "react"
import ContainerProvider from './Container'

import Demo3_1 from "./demo3_1"
import Demo3_2 from "./demo3_2"
import Demo3_3 from "./demo3_3"

function Demo3() {
  return (
    <div>
      <h3>第三个例子 组件间通信</h3>
      <ContainerProvider>
        <Demo3_1/>
        <Demo3_2/>
        <Demo3_3/>
      </ContainerProvider>
    </div>

  )
}

export default Demo3
