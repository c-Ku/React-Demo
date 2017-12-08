import * as Blueprint from '@blueprintjs/core'
import * as React from 'react'
import { DateRangeInput } from '@blueprintjs/datetime'
import { WrappedFieldProps } from 'redux-form'

interface TextFieldProps {
  type: string;
  placeholder: string;
  disabled?: boolean;
  meta?: {
    touched: boolean,
    error: string,
    warning: string
  };
}

export const TextField = ({
  input,
  type,
  placeholder,
  disabled,
  meta: {touched, error, warning}
}: TextFieldProps & WrappedFieldProps) => {
  return (
    <div>
      <input className="pt-input" type={type} placeholder={placeholder} disabled={disabled} {...input} />
      {touched && error && <p>{error}</p>}
    </div>
  )
}


export const DataPicker = ({ input, meta }: any) => {
  return <DateRangeInput onChange={input.onChange} format="YYYY-MM-DD HH:mm"/>
}
