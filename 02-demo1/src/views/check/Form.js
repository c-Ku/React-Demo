import React from 'react'
import { Field, reduxForm } from 'redux-form'

const textField = ({ input, type, value, placeholder }) => (
  <input type={type} value={value} placeholder={placeholder} {...input} />
)

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">name</label>
        <Field name="name" component={textField} type="text" />
      </div>
      <div>
        <label htmlFor="phone">phone</label>
        <Field name="phone" component={textField} type="text" />
      </div>
      <button type="submit" disabled={submitting}>确认</button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>清除</button>
    </form>
  )
}

export default reduxForm({
  form: 'check',
})(Form)
