import { combineReducers } from 'redux'
import { listCtrl } from './listCtrl'
import { formInfo } from './formInfo'
import { reducer as formReducer } from 'redux-form';

const demoReducers = combineReducers({
    listCtrl,
    formInfo,
    form: formReducer
})

export default demoReducers
