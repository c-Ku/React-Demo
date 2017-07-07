import React from 'react';
import ReactDom from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'

import Dlist from '../dlist/dlist'

// const List = (props) => {
//   return (
//     <div>
//       <Dlist />
//       <button onClick={props.change}>换 人</button>
//     </div>
//   );
// }

const List = React.createClass({
  render () {
    return <div>
      <Dlist />
      <button onClick={this.props.change}>改 名</button>
      <button onClick={this.props.change_o}>改 回</button>
    </div>
  }
})

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    change () {
      dispatch({
        type: 'CHANGE',
        name: '葬爱',
        photo: 'Photo_438.jpg'
      });
      console.log('点击改名了');
    },
    change_o () {
      dispatch({
        type: 'CHANGE',
        name: '潘壮实',
        photo: 'Photo_250.jpg'
      });
      console.log('改回去了');
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
// export default List;
