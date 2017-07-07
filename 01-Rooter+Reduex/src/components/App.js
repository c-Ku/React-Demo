// 'use strict';


import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

import App from './app/app';
import List from './list/list';

import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'

// import reducer from './reducers'

const initState = {
  card: {
    name: '潘壮实',
    photo: 'Photo_213.jpg'
  },
  dialog: {
    status: false
  }
};

function reducer(state, action) {
    let {type} = action;

    switch (type) {
        case 'CHANGE':
            console.log(state.card);
            return Object.assign({},
                state,
                {
                    card: {
                        name: action.name,
                        photo: action.photo
                    }
                }
            );                         // 返回新的state
        default:
            return state;
    }
}

let store = createStore(reducer, initState);

// store.subscribe( ()=>{                              // 监听State的变化
//     let state = store.getState();
//     console.log(state);
// });

const routes = {
  childRoutes: [
    {
      path: '/list',
      component: List
    },
    {
      path: '*',
      component: App
    }
  ]
};

ReactDom.render((
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>
), document.getElementById('app'));