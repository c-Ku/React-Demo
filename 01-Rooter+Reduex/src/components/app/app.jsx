import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
  render(){
    return (
      <div>
        <h5 className="title">hello!</h5>
        <div>React Router: </div>
        <div>介四首页</div>
        <div>⬆️介四天津话</div>
        <div><a href="#/list">信息页</a></div>
      </div>
    );
  }
}

export default App;
