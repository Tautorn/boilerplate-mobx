import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Home from './container/Home/'

const basepath = '/'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path={basepath}>
      <IndexRoute component={Home} />
      <Route>
        <Route path="/" component={Home} />
      </Route>
    </Route>
  </Router>
)

export default Routes
