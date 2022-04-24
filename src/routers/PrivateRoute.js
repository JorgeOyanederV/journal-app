import { Redirect } from "react-router-dom"

export const PrivateRoute = ({ children, isLoggedIn }) => {
   return isLoggedIn ?
      children
      :
      <Redirect to={'/auth/login'} />
}
