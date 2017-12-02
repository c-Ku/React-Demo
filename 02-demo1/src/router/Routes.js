import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Main from '../views/main/Main'
import Thx from '../views/thx/Thx'
import Description from '../views/description/Description'
import Check from '../views/check/Check'
import Protect from '../views/check/Protect'
import NoMatch from '../views/NoMatch'

class Routes extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    )
  }
}

export default Routes
