import { combineReducers } from 'redux'
import { formInfo } from './formInfo'
import { listCtrl } from './listCtrl'
import { reducer as formReducer } from 'redux-form'

const demoReducers = combineReducers({
    listCtrl,
    formInfo,
    form: formReducer
})

export default demoReducers
