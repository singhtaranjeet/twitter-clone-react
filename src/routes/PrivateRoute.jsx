import React from 'react'
import { Route, Redirect, withRouter } from "react-router-dom"
import SideBar from '../components/common/SideBar'
import * as AuthHelper from '../helper/AuthHelper'

function PrivateRoute(
  { component: Component,
    loginRoute = "/login",
    withSideBar = true,
    history,
    goBackLink,
    match,
    state,
    ...rest }
) {
  const renderer = (props) => {
    if (AuthHelper.isLoggedIn() !== true) {
      return <Redirect to={loginRoute} />
    }
    if (!withSideBar) return (<Component {...props} />)

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
