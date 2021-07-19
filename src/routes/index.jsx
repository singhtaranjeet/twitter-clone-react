import React from 'react'
import { Switch, Route, useLocation, useHistory, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import { RoutesHelper } from '../helper/RoutesHelper'
import TweetShow from '../pages/TweetShow'

function Routes() {
  return (

    <Switch>
      <Route path="/" exact> <Redirect to={RoutesHelper.home}></Redirect> </Route>
      <Route
        exact
        path={RoutesHelper.login}
        component={() => (
          <Login />
        )}
      />
      <PrivateRoute path={RoutesHelper.home} exact component={() => <Home />} />
      <PrivateRoute path={RoutesHelper.profile} exact component={() => <Profile />} />
      <PrivateRoute path={RoutesHelper.tweet} exact component={() => <TweetShow />} />
      <Route path="*">(<div>404</div>)</Route>
    </Switch>

  )
}

export default Routes
