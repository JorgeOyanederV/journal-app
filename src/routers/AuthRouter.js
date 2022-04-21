import React from 'react'
import { Redirect } from 'react-router-dom'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

export const AuthRouter = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.path}/login`} component={LoginScreen} />
      <Route exact path={`${match.path}/register`} component={RegisterScreen} />
      <Redirect to='/auth/login' />
    </Switch >
  )
}
