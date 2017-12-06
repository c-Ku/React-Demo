import demoReducers from './Reducers'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  collapsed: true,
  diff: true,
})

const store = createStore(
  demoReducers,
  applyMiddleware(thunk, logger)
)

export default store
