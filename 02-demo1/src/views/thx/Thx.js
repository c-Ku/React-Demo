/* eslint-disabled */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { dataFetch, dataClear } from '../../redux/actions/'

import request from '../../utils/request'

class Description extends React.PureComponent {
  constructor (props) {
    super(props)
  }

  fetchRes = async () => {
    const res = await request('https://api.github.com/zen', {}, 'text')
    console.log(res)
    this.props.dataFetch(res)
  }

  render () {
    const { dataClear, list } = this.props
    return (
      <div>
        <h2>谢谢，介4天津话😂</h2>
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
  return {
    list: state.listCtrl,
  }
}

const mapDispatchToProps = {
  dataFetch: dataFetch,
  dataClear: dataClear,
}

export default connect(mapStateToProps, mapDispatchToProps)(Description)
