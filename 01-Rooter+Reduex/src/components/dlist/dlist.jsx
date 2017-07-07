import React from 'react'
import { connect } from 'react-redux'

// const Dlist = (props) => {
//   return (
//     <div>
//       <h5 className="title">hello, {props.name}!</h5>
//       <div><a href="#/">返回首页</a></div>
//       <div>姓名：{props.name}</div>
//       <div>照片：{props.photo}</div>
//     </div>
//   );
// }

class Dlist extends React.Component{
  render(){
    return (
      <div>
        <h5 className="title">hello, {this.props.name}!</h5>
        <div><a href="#/">返回首页</a></div>
        <div>姓名：{this.props.name}</div>
        <div>照片：<img src={require('../../static/img/' + this.props.photo)} alt="" /></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  var info = state.card

  return {
    name: info.name,
    photo: info.photo
  }
}

export default connect(mapStateToProps)(Dlist);