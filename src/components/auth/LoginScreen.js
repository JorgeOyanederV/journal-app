import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../..//hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { starLoginEmailPassword, startGoogleLogin } from '../../actions/auth'
export const LoginScreen = () => {

   const dispatch = useDispatch();
   const { loading } = useSelector((state) => state.ui)

   const [formValues, handleInputChange] = useForm({
      email: 'correoxxxx@gmail.com',
      password: '123456'
   })

   const { email, password } = formValues;

   const handleLogin = (event) => {
      event.preventDefault();
      dispatch(starLoginEmailPassword(email, password));
   }

   const handleGoogleLogin = () => {
      dispatch(startGoogleLogin());
   }
   return (
      <>
         <h3 className='auth__title'>Login</h3>
         <form onSubmit={handleLogin}>
            <input
               type="text"
               placeholder='email'
               name='email'
               className='auth__input'
               autoComplete='off'
               value={email}
               onChange={handleInputChange}
            />
            <input
               type="password"
               placeholder='password'
               name='password'
               className='auth__input'
               autoComplete='off'
               value={password}
               onChange={handleInputChange}
            />
            <button
               type='submit'
               className='btn btn-primary btn-block'
               disabled={loading}
            >
               Login
            </button>
            <div className='auth__social-networks mb-5'>
               <p>Login with Social Networks</p>
               <div className='google-btn' onClick={handleGoogleLogin}>
                  <div className='google-icon-wrapper'>
                     <img className='google-icon' src='https://cdn-icons-png.flaticon.com/512/2965/2965278.png' alt='google-icon' />
                  </div>
                  <p className='btn-text'>
                     Sign in with google
                  </p>
               </div>
            </div>
            <Link to="/auth/register" className='link'>
               Create new account
            </Link>
         </form>
      </>
   )
}
