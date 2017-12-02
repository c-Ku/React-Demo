import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import Layout from '../layout/Layout'
import Main from './main/Main'
import Thx from './thx/Thx'
import Description from './description/Description'
import Check from './check/Check'
import Protect from './check/Protect'
import NoMatch from './NoMatch'

import store from '../redux'

class Router extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Provider store={store}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/desc/:id" component={Description} />
              <Route path="/thx" component={Thx} />
              <Route path="/check" component={Check} />
              <Route
                render={() => {
                  const { check } = window.localStorage
                  return check === 'true' ? (
                    <Route path="/protect" component={Protect} />
                  ) : (
                    <Redirect
                      to={{
                        pathname: '/check',
                      }}
                    />
                  )
                }}
              />
              <Route component={NoMatch} />
            </Switch>
          </Provider>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default Router
