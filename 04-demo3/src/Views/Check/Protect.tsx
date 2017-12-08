import * as Blueprint from '@blueprintjs/core'
import * as React from 'react'
import Form from './Form'
import { actions } from '../../Redux/Actions/'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getFormValues } from 'redux-form'
import { Link } from 'react-router-dom'
/* eslint-disabled */

interface formDataTypes {
  name: string;
  phone: string;
  type: string;
}

class Protect extends React.PureComponent<any, {}> {
  submitAsync = (val: formDataTypes) => {
    const { formSet } = this.props
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if(val.name === '王富贵' && val.phone === '17600695626') {
        if (val.name === '王富贵') {
          formSet(val)
          resolve('很好')
        } else {
          reject('呵呵')
        }
      }, 2000)
    })
  }

  onSubmit = (val: formDataTypes) => {
    return this.submitAsync(val)
      .then(data => {
        console.log(data)
      })
      .catch(data => {
        console.error('Error: ' + data)
      })
  }

  render() {
    const { history, formInfo } = this.props
    console.log(this.props)
    return (
      <div>
        <h2>Protect</h2>
        <p>{`[用户]：${formInfo.name} [电话]：${formInfo.phone}`}</p>
        <p>
          <button
            onClick={() => {
              window.localStorage.removeItem('check')
              history.push('/check')
            }}
          >
            Un Check
          </button>
        </p>
        <p>
          <Link to="/">返回</Link>
        </p>
        <Form onSubmit={this.onSubmit} />
      </div>
    )
  }
}

function mapStateToProps(state: { formInfo: object, form?: object }) {
  return {
    formInfo: state.formInfo,
    form: getFormValues('check')(state)
  }
}

function mapDispatchToProps(dispatch: Dispatch<string>) {
  return {
    formSet: (res: object) => dispatch(actions.formSet(res)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Protect)
