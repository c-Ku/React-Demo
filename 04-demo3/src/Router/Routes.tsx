import * as React from 'react'
import Check from '../Views/Check/Check'
import Description from '../Views/Desc/Desc'
import Main from '../Views/Main/Main'
import NoMatch from '../Views/NoMatch'
import Protect from '../Views/Check/Protect'
import Thx from '../Views/Thx/Thx'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

interface RouterRedrectProps {
  path: string;
  test: any;
  to: string;
  exact?: boolean;
}

const RouterRedrect = ({ path, test, to, exact }: RouterRedrectProps) => {
  const { check } = window.localStorage
  return check === test
    ? <Route path={path} component={Protect} exact />
    : <Redirect
        to={{
          pathname: to,
        }}
      />
}

class Routes extends React.PureComponent<any, {}> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/desc/:id" component={Description} />
          <Route path="/thx" component={Thx} />
          <Route path="/check" component={Check} />
          <RouterRedrect path="/protect" test="true" to="/check" />
          <RouterRedrect path="/check" test={"false" || undefined} to="/protect" />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
