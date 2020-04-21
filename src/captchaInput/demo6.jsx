import React, {useState} from "react"
import CaptchaInput from "./CaptchaInput"
import './demo6.css'

function Demo6() {
  const [code, setCode] = useState('')

  const codeChange = (value) => {
    console.log('code', value)
    setCode(value)
  }

  return (
    <div>
      <h3>第六个例子 格子输入框</h3>
      <div className="input-width">
        <CaptchaInput
          onChange={codeChange}
          initCaptcha={['', '', '', '']}
        />
      </div>
      <h4>{code}</h4>
    </div>
  )
}

export default Demo6
