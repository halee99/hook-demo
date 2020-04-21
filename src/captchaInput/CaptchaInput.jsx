import React, {useEffect, useState} from "react"
import "./captchaInput.css";

function CaptchaInput ({ onChange, initCaptcha }){

  const [activeIndex, setActiveIndex] = useState(0)
  const [captcha, setCaptcha] = useState(initCaptcha)
  const [inputEl, setInputEl] = useState(null)
  const [begin, setBegin] = useState(false)

  // 监听按键事件，主要是实现了退格的时候删除一位验证码
  const inputKeyDown = (event, index) => {
    let keyCode = event.keyCode
    // 输入的是删除键
    if (keyCode === 8) {
      backSpace(index)
    }
  }

  useEffect(() => {
    if (begin) {
      inputEl && inputEl.focus()
    }
  }, [inputEl, begin])

  // 删除键
  const backSpace = index => {
    if (index === 0) {
      setCaptchaByIndex(index, '')
      return
    }

    if (captcha[index] === '') {
      let preIndex = index - 1
      setCaptchaByIndex(preIndex, '')
      setActiveIndex(preIndex)
    } else {
      setCaptchaByIndex(index, '')
    }
  };

  // 只允许输入数字
  const inputAllow = (value) => {
    let allowValue = "0123456789"
    return allowValue.includes(value)
  }

  const inputChange = (event, index) => {
    let value = event.target.value
    if (!inputAllow(value)) {
      return
    }

    let isLast = index === captcha.length - 1
    // 如果是最后一位
    if (isLast) {
      if (captcha[index] === '') {
        setCaptchaByIndex(index, value)
      }
      return
    }

    // 不是最后一位
    let next = index + 1
    if (captcha[index] === '') {
      setCaptchaByIndex(index, value)
    } else {
      setCaptchaByIndex(next, value)
    }

    // 光标下移一位
    setActiveIndex(next)
  };

  const setCaptchaByIndex = (index, value) => {
    let arr = [...captcha]
    if (arr[index] === value) {
      return
    }
    arr[index] = value
    // 夫组件拿到值
    onChange(arr.join(''))

    if (index === arr.length - 1 && arr[index] !== '') {
      inputBlur()
    }
    setCaptcha(arr)
  }

  // 输入框聚焦
  const inputFocus = () => {
    inputEl && inputEl.focus();
  };

  // 输入框失焦
  const inputBlur = () => {
    inputEl && inputEl.blur();
  };

  return (
    <div
      className={`captcha-input-box`}
      onClick={() => {
        setBegin(true)
        inputFocus()
      }}
    >
      {captcha.map((v, index) => {
        let isActive = activeIndex === index
        return (
          <div className="captcha-input-wrap" key={index}>
            <input
              className="captcha-input-item"
              type="tel"
              name="register-form-items"
              autoComplete="off"
              autoCapitalize="off"
              maxLength={1}
              disabled={!isActive}
              value={v}
              onChange={e => inputChange(e, index)}
              onKeyDown={e => inputKeyDown(e, index)}
              ref={el => {
                if (isActive) {
                  setInputEl(el)
                }
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default CaptchaInput;
