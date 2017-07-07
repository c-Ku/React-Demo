# Redux 笔记

Tags： ReactJS JavaScript cNotes

---

>本文参考：http://www.jianshu.com/p/7a71181a7aa0 (by.jack_lo)

首先要引入 ``Redux`` 
```
import { createStore } from 'redux';
```
##Store
>是redux提供的唯一数据源，它存储了整个应用的state，并且提供了获取state的方法，即store.getState()。

>store是只读的。

>redux没有提供直接修改数据的方法，改变 state 的唯一方法就是 触（dispatch）发 action 。

比如：
```
let store = createStore(counter); 
store.dispatch({ type: 'CHANGE', res: '911' });
```

##Action
>action 是一个用于描述已发生事件的普通对象。

>即「你干了一件什么事」

>但是单单讲了你干的事情，我们并不知道你干的这件事产生了什么牛逼效果，于是有了一个专门负责描述某个行动对应产生某种效果的机构，叫做 reducer 。

##Reducer
>reducer 只是一个接收 state 和 action，并返回新的 state 的函数

>它根据你所做的事情，提供对应的后果，这个后果直接对数据源起作用。

>它应尽可能覆盖所有的事件类型

一个例子：
```
function counter(state=0, action) {
    let {st} = action;

    switch (st) {
        case 'hehe':
            let ret = ++state;
            return ret;
        default:
            return state;
    }
}
```

---
以下是一个Store的state树：
```
// store.getState()
{
  card: {
    name: '潘壮实',
    photo: 'Person_250.jpg'
  },
  dialog: {
    status: false
  }
}
```

---
**action** 本质上是一个普通的js对象，因为它只是一个用来描述事件的对象。
以下是两个现成的action：
```
{
  type: 'CHANGE_NAME',
  name: '琉璃殇·葬爱'
}

{
  type: 'CHANGE_PHOTO',
  photo: 'Person_438.jpg'
}
```
action 都会带一个type属性，这个属性是必选的，而其他的内容，比如name、picture等等，都是可选的，它们是由action携带，最后传递给reducer的内容，就好比我说我要改名字，这是事件，但是我没有说我要改成什么名字，这个操作就不完整，所以我还需要补充说，我要改名叫“葬爱”，因此我还需要提供一个name给你，这才能完整实现一个动作。这些附属的参数，我们称为 ``payload（载荷）``。

payload 是可选的，也就是说，有些动作的触发是不需要其他信息的，比如“激活弹窗”、“关闭弹窗”等等，这类动作只需要一个 type 就可以传达：

```
{
  type: 'SHOW_DIALOG'
}

{
  type: 'CLOSE_DIALOG'
}
```
于是，一个完整的触发动作是这样的：
```
// 修改名字
dispatch({
  type: 'CHANGE_NAME',
  name: '琉璃殇·葬爱'
})

// 激活弹窗
dispatch({
  type: 'SHOW_DIALOG'
})
```
触发了动作，则需要接收并处理它，即补充一个 **reducer**。

---
**reducer** 是根据传入的各种action不同，相对应对state进行处理，最后返回一个新state的函数。
这个函数需要的参数至少是：当前的state，以及一个action。
以下是reducer：
```
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
    return {
      card: {
        name: action.name, // 使用action携带的新name
        photo: state.card.photo  // 不需要修改，使用旧state的值
      },
      dialog: state.dialog  // 不需要修改，使用旧state的值
    }
    
    case 'CHANGE_PHOTO':
    return {
      card: {
        name: state.card.name, // 不需要修改，使用旧state的值
        photo: action.photo  // 使用action携带的新photo
      },
      dialog: state.dialog  // 不需要修改，使用旧state的值
    }

    case 'SHOW_DIALOG':
    return {
      card: state.card,  // 不需要修改，使用旧state的值
      dialog: {
        status: true
      }
    }

    case 'CLOSE_DIALOG':
    return {
      card: state.card,  // 不需要修改，使用旧state的值
      dialog: {
        status: false
      }
    }

    default:
    return state  // 没有匹配的action type，返回原来的state
  }
}
```
如上的 ``reducer`` 接收一个修改前的state和一个action，然后通过判断actionType的方式来进行不同操作（没有匹配的actionType则默认返回原state），该操作的最终目的就是「拼装一个新的state，并最终return」，这样便达到了更新state的目的！

---
#####问：为什么要用Redux，而不是直接拿state，然后修改它state.card.name = action.name，最后return state达到效果？

#####答：因为state是一个对象，直接修改state会对其他引用state的地方产生影响，该影响被称为 ``副作用`` ，而 redux 规定 reducer 必须是 纯函数 ，纯函数是没有副作用的。

---
>reducer 一定要保持纯净，只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。 ——redux官方文档

---
Reducer可以被拆分，如下：
```
function cardReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
    return {
      name: action.name, // 使用action携带的新name
      photo: state.card.photo  // 不需要修改，使用旧state的值
    }

    default:
    return state  // 没有匹配的action type，返回原来的state
  }
}

function dialogReducer(state, action) {
  switch (action.type) {
    case 'SHOW_DIALOG':
    return {
      status: true
    }

    case 'CLOSE_DIALOG':
    return {
      status: false
    }

    default:
    return state  // 没有匹配的action type，返回原来的state
  }
}

function reducer(state, action) {
  return {
    card: cardReducer(state.card, action),
    dialog: dialogReducer(state.dialog, action)
  }
}

export default reducer
```
拆分reducer是一个很重要的思想，是未来编写reducer最基本的方式。

---
##combineReducers
使用如下的语句可对合并在一个文件中的 reducer 进行 export。而使用combineReducers来合并reducer，需要子reducer的名字跟对应要接收的state的key一致。
```
function card(state, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
    return {
      name: action.name, // 使用action携带的新name
      photo: state.card.photo  // 不需要修改，使用旧state的值
    }

    default:
    return state  // 没有匹配的action type，返回原来的state
  }
}

function dialog(state, action) {
  switch (action.type) {
    case 'SHOW_DIALOG':
    return {
      status: true
    }

    case 'CLOSE_DIALOG':
    return {
      status: false
    }

    default:
    return state  // 没有匹配的action type，返回原来的state
  }
}

export default combineReducers({
  card,
  dialog
})
```
使用combineReducers的目的是为了减少模板代码，但在这里并未显得很必要，且可能会因此限制子reducer的命名，不够灵活，所以不建议使用。

---
想要引入redux需要先安装
>npm install redux react-redux --save

然后在现有项目中添加
>import { createStore, applyMiddleware } from 'redux'
>import { Provider, connect } from 'react-redux'

``createStore`` 用来创建store
``applyMiddleware`` 用来整合接入middleware
``Provider`` 用来实现store的全局访问的
``connect`` 用来针对某个展示组件，创建包裹这个组件的容器组件

