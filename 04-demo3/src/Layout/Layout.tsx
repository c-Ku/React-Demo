import * as React from 'react'
import './Layout.css'

const logo = require('./logo.svg');

class Layout extends React.PureComponent {
  render() {
    const { check } = window.localStorage
    const { children } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">React / react-router / Redux</h2>
          {/* {
            check !== 'true' && <p>未查验</p>
          } */}
        </header>
        <main>{children}</main>
      </div>
    );
  }
}

export default Layout;
