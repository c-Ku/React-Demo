import * as React from 'react'
import { Field, InjectedFormProps, reduxForm, WrappedFieldProps } from 'redux-form'

interface TextFieldProps {
  type: string;
  placeholder: string;
  disabled?: boolean;
}

const TextField = (props: TextFieldProps & WrappedFieldProps) => {
  const { input, type, placeholder, disabled } = props
  return <input type={type} placeholder={placeholder} disabled={disabled} {...input} />
}

class Form extends React.PureComponent<InjectedFormProps, {}> {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <Field name="name" component={TextField} type="text" />
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <Field name="phone" component={TextField} type="text" />
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
