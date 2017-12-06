import * as React from 'react'
import request from '../../Utils/request'
import { actions } from '../../Redux/Actions/'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Link } from 'react-router-dom'
/* eslint-disabled */

class Thx extends React.PureComponent<any, any> {
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
          {list.map((item: {id: number, text: string}, index: number) => (
            <li key={Math.floor(Math.random() * 100000000000)}>{`${item.id}、${item.text}`}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state: {listCtrl: object}) {
  console.log(state)
  return {
    list: state.listCtrl,
  }
}

function mapDispatchToProps (dispatch: Dispatch<string>) {
  return {
    dataFetch: (res: string) => dispatch(actions.dataFetch(res)),
    dataClear: () => dispatch(actions.dataClear()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thx)
