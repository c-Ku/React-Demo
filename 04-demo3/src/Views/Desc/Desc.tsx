import * as React from 'react'
import { Link } from 'react-router-dom'

class Desc extends React.PureComponent<any, any> {
  render () {
    console.log(this.props)
    return (
      <div>
        <h2>== {this.props.match.params.id} ==</h2>
        <Link to="/">返回</Link>
      </div>
    )
  }
}

export default Desc
