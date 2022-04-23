import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { removeError, setError } from '../../actions/ui';

export const RegisterScreen = () => {
   const dispatch = useDispatch();

   const [formValues, handleInputChange] = useForm({
      name: 'name',
      email: 'corre',
      password: 'contra',
      password2: 'contra'
   })
   const { name, email, password, password2 } = formValues;

   const handleRegister = (e) => {
      e.preventDefault();
      if (!isFormValid(name, email, password, password2)) {

      }
      console.log(name, email, password, password2);
   }

   const isFormValid = () => {
      if (name.trim().lengh === 0) {
         dispatch(setError('Name is required'));
         return false;
      } else if (!validator.isEmail(email)) {
         dispatch(setError('Email is not valid'));
         return false;
      } else if (password.trim().lengh < 5 || password !== password2) {
         dispatch(setError('Password should be at least 6 characters and match each other'));
         return false;
      }
      dispatch(removeError());
      return true;
   }

   return (
      <>
         <h3 className='auth__title'>Register</h3>
         <form onSubmit={handleRegister}>
            <div className='auth__alert-error'>
               Hola mundo
            </div>
            <input
               type="text"
               placeholder='name'
               name='name'
               className='auth__input'
               autoComplete='off'
               value={name}
               onChange={handleInputChange}
            />
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
            <input
               type="password"
               placeholder='Confirm Password'
               name='password2'
               className='auth__input'
               autoComplete='off'
               value={password2}
               onChange={handleInputChange}
            />
            <button
               type='submit'
               className='btn btn-primary btn-block mb-5'
            // disabled={true}
            >
               Register
            </button>

            <Link to="/auth/login" className='link'>
               Already Register?
            </Link>
         </form>
      </>
   )
}
