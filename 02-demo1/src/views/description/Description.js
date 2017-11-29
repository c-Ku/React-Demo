import React from 'react'
import { Link } from 'react-router-dom'

function Description(props) {
  return (
    <div>
      <h2>介四{props.match.params.id}</h2>
      <Link to="/">返回</Link>
    </div>
  )
}

export default Description
