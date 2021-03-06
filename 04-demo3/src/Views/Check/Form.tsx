import * as React from 'react'
import { DataPicker, TextField } from './Utils'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { mail, phone } from './Validate'
import './Protect.css'

class Form extends React.PureComponent<InjectedFormProps, {}> {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">name</label>
          <Field name="name" component={TextField} type="text" />
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <Field name="phone" validate={[phone]} component={TextField} type="text" />
        </div>
        <div>
          <label htmlFor="mail">mail</label>
          <Field name="mail" validate={[mail]} component={TextField} type="text" />
        </div>
        <div>
          <label htmlFor="time">time</label>
          <Field name="time" component={DataPicker} />
        </div>
        <button type="submit" disabled={submitting}>确认</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>清除</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'check',
})(Form as any)
