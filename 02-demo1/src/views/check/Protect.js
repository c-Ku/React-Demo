/* eslint-disabled */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from '../../redux/actions/'
// import { formValues } from 'redux-form'
import Form from './Form'

class Protect extends React.PureComponent {
  onSubmit = val => {
    console.log(val)
    const { formSet, form } = this.props
    if (!!form.values) {
      formSet(form.values)
    }
  }

  render() {
    const { history, formInfo } = this.props
    return (
      <div>
        <h2>Protect</h2>
        <p>{`[用户]：${formInfo.name} [电话]：${formInfo.phone}`}</p>
        <p>
          <button
            onClick={() => {
              window.localStorage.setItem('check', 'false')
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

const mapStateToProps = state => {
  return {
    formInfo: state.formInfo,
    form: state.form.check,
  }
}

const mapDispatchToProps = {
  formSet: actions.formSet,
}

export default connect(mapStateToProps, mapDispatchToProps)(Protect)
