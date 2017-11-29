import React from 'react';
import logo from '../logo.svg';
import './Layout.css';

function Layout (props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React / react-router / Redux</h1>
      </header>
      <main>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
