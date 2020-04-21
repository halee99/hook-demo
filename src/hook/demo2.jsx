import React, {useState} from "react"
import useStudentStatus from "./useStudentStatus"

function Demo2() {
  let [id, setId] = useState(0)
  let online = useStudentStatus(id)

  return (
    <div>
      <h3>第二个例子 自定义 hook</h3>
      <input
        type="text"
        onChange={(e) => {
          let d = Number(e.target.value)
          setId(d)
        }}
        value={id}
      />
      <div>
        学生id:{id} {online? '在线': '离线'}
      </div>
    </div>
  )
}

export default Demo2
