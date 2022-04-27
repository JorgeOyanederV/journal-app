import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment';

export const NotesAppBar = () => {
   const { date } = useSelector(state => state.notes.active)
   const dateFormated = moment(date).format("MMM Do YY");
   return (
      <div className='notes__appbar'>
         <span> {dateFormated}</span>
         <div>
            <button className='btn'>
               Picture
            </button>
            <button className='btn'>
               Save
            </button>
         </div>
      </div>
   )
}
