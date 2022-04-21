import React from 'react'
import { Link } from 'react-router-dom'
export const LoginScreen = () => {
   return (
      <>
         <h3 className='auth__title'>Login</h3>
         <form>
            <input
               type="text"
               placeholder='email'
               name='email'
               className='auth__input'
               autoComplete='off'
            />
            <input
               type="password"
               placeholder='password'
               name='password'
               className='auth__input'
               autoComplete='off'
            />
            <button
               type='submit'
               className='btn btn-primary btn-block'
            // disabled={true}
            >
               Login
            </button>
            <div className='auth__social-networks mb-5'>
               <p>Login with Social Networks</p>
               <div className='google-btn'>
                  <div className='google-icon-wrapper'>
                     <img className='google-icon' src='https://cdn-icons-png.flaticon.com/512/2965/2965278.png' alt='google-icon' />
                  </div>
                  <p className='btn-text'>
                     <p>Sign in with google</p>
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
