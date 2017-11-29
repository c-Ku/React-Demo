import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Layout from '../layout/Layout'
import Main from './main/Main'
import Thx from './thx/Thx'
import Description from './description/Description'

import store from '../redux'

class Router extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Route exact path="/" component={Main} />
            <Route path="/desc/:id" component={Description} />
            <Route path="/thx" component={Thx} />
          </Layout>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Router
