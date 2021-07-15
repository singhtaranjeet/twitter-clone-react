import React from 'react'
import { Switch, Route } from 'react-router-dom'
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
        <PrivateRoute path="/home" component={() => <Home />}>
        </PrivateRoute>
        <PrivateRoute path="/profile" component={() => <Profile />}>
        </PrivateRoute>
      </Switch>
    </Route>
  )
}

export default Routes
