import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { startLoading, stopLoading } from "./ui"


export const starLoginEmailPassword = (email, password) => {
   return (dispatch) => {
      // dispatch(login(email, password));
      dispatch(startLoading());

      firebase.auth().signInWithEmailAndPassword(email, password)
         .then(({ user }) => {
            dispatch(login(user.uid, user.displayName))
            dispatch(stopLoading());
         })
         .catch(err => {
            console.log(err);
            dispatch(stopLoading());
         })
   }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
   return (dispatch) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(async ({ user }) => {
            await user.updateProfile({ displayName: name })
            dispatch(
               login(user.uid, user.displayName)
            )
         })
         .catch(err => {
            console.log(err);
         })
   }
}


export const startGoogleLogin = () => {
   return (dispatch) => {
      firebase.auth().signInWithPopup(googleAuthProvider)
         .then(({ user }) => {
            dispatch(
               login(user.uid, user.displayName)
            )
         })
   }
}

export const login = (uid, displayName) => ({
   type: types.login,
   payload: {
      uid,
      displayName
   }
})