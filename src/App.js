import React, {useState} from 'react'
import './App.css'
import Demo1 from "./hook/demo1"
import Demo2 from "./hook/demo2"
import Demo3 from "./hook/demo3"
import Demo4 from "./hook/demo4"
import Demo5 from "./hook/demo5"

import {log} from "./utils"


function App() {
  let [openDemo1, setOpenDemo1] = useState(false)
  // log('运行 App')
  let demo = openDemo1 ? <Demo1 name={'第一个例子'}/> : null

  return (
    <div className="App">
      <button onClick={() => setOpenDemo1(!openDemo1)}>打开例子 1</button>
      {/*{demo}*/}
      {/*<Demo2/>*/}
      <Demo3/>
      {/*<Demo4/>*/}
      {/*<Demo5/>*/}

    </div>
  )
}

export default App
