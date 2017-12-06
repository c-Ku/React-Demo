import * as React from 'react'
import { Link } from 'react-router-dom'

class Check extends React.PureComponent<any, {}> {
  render() {
    return (
      <div>
        <h2>Check</h2>
        <p>
          <button
            onClick={() => {
              window.localStorage.setItem('check', 'true')
              this.props.history.push('/protect')
            }}
          >
            check
        </button>
        </p>
        <p>
          <Link to="/">返回</Link>
        </p>
      </div>
    )
  }
}

export default Check
