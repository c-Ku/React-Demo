import React from 'react'
import logo from '../logo.svg'
import './Layout.css'

class Layout extends React.PureComponent {
  render () {
    const { check } = window.localStorage
    const { children } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React / react-router / Redux</h1>
          {
            check !== 'true' && <p>未查验</p>
          }
        </header>
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
