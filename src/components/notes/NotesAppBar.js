import React from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { refreshNotes, startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {
   const { active } = useSelector(state => state.notes)
   const dateFormated = moment().format("MMM Do YY");
   const dispatch = useDispatch();
   const handleSave = () => {
      dispatch(startSaveNote(active));
   }
   return (
      <div className='notes__appbar'>
         <span> {dateFormated}</span>
         <div>
            <button className='btn'>
               Picture
            </button>
            <button className='btn' onClick={handleSave}>
               Save
            </button>
         </div>
      </div>
   )
}
