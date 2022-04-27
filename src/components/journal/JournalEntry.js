import React from 'react';
import moment from 'moment';
import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';
export const JournalEntry = (entry) => {
   const dispatch = useDispatch();
   const { id, title, body, date, url } = entry;
   const noteDate = moment(date);
   const dia = noteDate.format("dddd");
   const mes = noteDate.format("MMM Do YY");

   const handleSetActive = () => {
      dispatch(activeNote(id, entry))
   }
   return (
      <div className='journal__entry pointer' onClick={handleSetActive}>
         {
            url &&
            <div className='journal__entry-picture' style={{
               backgroundSize: 'cover',
               backgroundImage: `url(${url})`
            }}></div>
         }

         <div className='journal__entry-body'>
            <p className='journal__entry-title'>
               {title}
            </p>
            <p className='journal__entry-content'>
               {body}
            </p>
         </div>
         <div className='journal__entry-date-box'>
            <span>{mes}</span>
            <h4>{dia}</h4>
         </div>
      </div>
   )
}
