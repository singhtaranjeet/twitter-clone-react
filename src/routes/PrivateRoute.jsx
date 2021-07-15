import React from 'react'
import { Route, Redirect, withRouter } from "react-router-dom"
import SideBar from '../components/common/SideBar'
function PrivateRoute(
  { component: Component,
    loginRoute = "/login",
    withSideBar = true,
    ...rest }
) {
  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100) // fake async
    }
  }

  const renderer = (props) => {
    if (fakeAuth.isAuthenticated !== true) {
      return <Redirect to={loginRoute} />
    }

    return (<>
      <SideBar />
      <Component {...props} /></>)
  }
  return (
    <Route {...rest} render={renderer}>

    </Route>
  )

}


export default PrivateRoute
