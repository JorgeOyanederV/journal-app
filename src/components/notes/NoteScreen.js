import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
   return (
      <div className='notes__main-content'>
         <NotesAppBar />
         <div className='notes__content'>
            <input
               type="text"
               placeholder='Some aweone title'
               className='notes__title-input'
               autoComplete='off'
            />
            <textarea
               placeholder='What happened today'
               className='notes__textarea'></textarea>
            <div className='notes__image'>
               <img src='https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg'
                  alt='pikachu' />
            </div>

         </div>
      </div>
   )
}
