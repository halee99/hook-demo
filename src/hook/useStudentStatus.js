import {useState, useEffect} from "react"
import {log} from "../utils"


function useStudentStatus(id) {
  let [online, setOnline] = useState(false)

  useEffect(() => {
    // 在这里做一些请求或者一些规则根据学生 id 来判断学生是否为 在线
    // 这里做个取巧
    log('求学生的网络状态。。。')
    if (id % 2 === 0) {
      setOnline(true)
    } else {
      setOnline(false)
    }
  }, [id])

  return online
}


export default useStudentStatus
