import * as React from 'react'
import Form from './Form'
import { actions } from '../../Redux/Actions/'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getFormValues } from 'redux-form'
import { Link } from 'react-router-dom'
/* eslint-disabled */

class Protect extends React.PureComponent<any, {}> {
  onSubmit = (val: { name?: string, phone?: string }) => {
    const { formSet } = this.props
    if (!!val.name && !!val.phone) {
      formSet(val)
    } else {
      console.log('Missing values...')
    }
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
