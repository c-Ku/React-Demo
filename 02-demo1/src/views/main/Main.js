import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div>
      <h2>介都尼玛嘛</h2>
      <div>
        <Link to="/desc/1">测试1</Link> <Link to="/desc/2">测试2</Link>{' '}
        <Link to="/desc/3">测试3</Link> <Link to="/thx">测试4</Link>{' '}
        <Link to="/protect">测试5</Link>
      </div>
    </div>
  )
}

export default Main
