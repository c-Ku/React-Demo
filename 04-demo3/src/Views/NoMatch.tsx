import * as React from 'react'
import { Link } from 'react-router-dom'

function NoMatch() {
  return (
    <div>
      <h2>404 页面不存在</h2>
      <Link to="/">返回</Link>
    </div>
  )
}

export default NoMatch
