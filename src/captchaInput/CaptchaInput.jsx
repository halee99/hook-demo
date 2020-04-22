import React, {useEffect, useState} from "react"
import "./captchaInput.css";

const CaptchaInput = ({ onChange, initCaptcha }) => {
  // activeIndex 正要输入的 输入框的 下标索引
  const [activeIndex, setActiveIndex] = useState(0)
  // captcha 多个输入框的值数组
  const [captcha, setCaptcha] = useState(initCaptcha)
  const [inputEl, setInputEl] = useState(null)
  const [begin, setBegin] = useState(false)

  useEffect(() => {
    // 开始输入时，光标聚焦当前 inputEl
    if (begin) {
      inputEl && inputEl.focus()
    }
  }, [inputEl, begin])

  useEffect(() => {
    // 当多输入框的值数组发生变化
    // 把它们组成值传给父组件
    onChange(captcha.join(''))
  }, [captcha, onChange])

  // 监听按键事件，主要是实现了退格的时候删除一位验证码
  const inputKeyDown = (event, index) => {
    let keyCode = event.keyCode
    // 输入的是删除键
    if (keyCode === 8) {
      backSpace(index)
    }
  }

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

    // 如果是最后一位
    if (index === captcha.length - 1) {
      setCaptchaByIndex(index, value)
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

    if (index === arr.length - 1 && arr[index] !== '') {
      // 所以的值输入好了，光标标消失
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
