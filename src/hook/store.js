// store 是类似vuex的状态仓库

// defaultState 初始化仓库
const defaultState = {
  name: 'lijuan',
  age: 16,
  sex: 'woman',
  money: 10000,
  status: '吃',
  thing: ['烤箱']
};

// 仓库更新的方法
const reducer = (state, action) => {
  switch (action.type) {
    case 'status': {
      return {...state, status: action.payload};
    }
    case 'work': {
      let {money} = state
      let m = action.payload + money
      return {...state, money: m}
    }
    case 'spend': {
      return {...state, money: state.money - action.payload}
    }
    case 'buy': {
      return {...state, thing: [...state.thing, action.payload]}
    }
    default:
      throw new Error(`mutation type not defined ${action.type}`)
  }
};

export {
  reducer,
  defaultState,
};
