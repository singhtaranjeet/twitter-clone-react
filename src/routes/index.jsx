import React from 'react'
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Login from '../pages/Login'

function Routes() {
  return (
    <Route path="/">
      <Switch>
        <Route
          exact
          path="/login"
          component={() => (
            <Login />
          )}
        />
        <PrivateRoute path="/home" exact component={() => <Home />}>
        </PrivateRoute>
        <PrivateRoute path="/profile" exact component={() => <Profile />}>
        </PrivateRoute>
        <Route path="/">(<div>404</div>)</Route>
      </Switch>
    </Route>
  )
}

export default Routes
