import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import demoReducers from './reducers'

let devtools = () => noop => noop
const middleware = [ thunk ]

if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__
}

devtools()

const store = createStore(
  demoReducers,
  applyMiddleware(...middleware)
)

export default store
