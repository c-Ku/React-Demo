/* eslint-disabled */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from '../../redux/actions/'

import request from '../../utils/request'

class Description extends React.PureComponent {
  fetchRes = async () => {
    const res = await request('https://api.github.com/zen', {}, 'text')
    this.props.dataFetch(res)
  }

  render() {
    const { dataClear, list } = this.props
    return (
      <div>
        <h2>== 谢谢 ==</h2>
        <Link to="/">返回</Link>
        <p>
          <button onClick={this.fetchRes}>获取</button>{' '}
          <button onClick={dataClear}>清空</button>
        </p>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{`${item.id}、${item.text}`}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    list: state.listCtrl,
  }
}

const mapDispatchToProps = {
  dataFetch: actions.dataFetch,
  dataClear: actions.dataClear,
}

export default connect(mapStateToProps, mapDispatchToProps)(Description)
