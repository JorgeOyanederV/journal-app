import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { firebase } from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'
import { startLoadNotes } from '../actions/notes'
export const AppRouter = () => {

   const [checking, setChecking] = useState(true);

   const [isLoggedIn, setIsLoggedIn] = useState(false)

   const dispatch = useDispatch();

   useEffect(() => {
      firebase.auth().onAuthStateChanged(async (user) => {
         if (user?.uid) {
            dispatch(login(user.uid, user.displayName))
            setIsLoggedIn(true)
            dispatch(startLoadNotes(user.uid));
         } else {
            setIsLoggedIn(false)
         }
         setChecking(false)
      });
   }, [dispatch, setChecking, setIsLoggedIn])

   if (checking) {
      return (
         <h1>Espere....</h1>
      )
   }

   return (
      <Router>
         <Switch>
            <Route path="/auth">
               <PublicRoute isLoggedIn={isLoggedIn}>
                  <AuthRouter />
               </PublicRoute>
            </Route>
            <Route exact path="/">
               <PrivateRoute isLoggedIn={isLoggedIn}>
                  <JournalScreen />
               </PrivateRoute>
            </Route>
            <Redirect to='/auth/login' />
         </Switch>
      </Router>
   )
}
