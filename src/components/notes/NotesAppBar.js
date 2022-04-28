import React from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
   const { active } = useSelector(state => state.notes)
   const dateFormated = moment().format("MMM Do YY");
   const dispatch = useDispatch();
   const handleSave = () => {
      dispatch(startSaveNote(active));
   }
   const handlePicture = () => {
      document.querySelector('#inputPicture').click();
   }
   const handleFiles = (e) => {
      const file = e.target.files[0];
      if (file) {
         dispatch(startUploading(file))
      }
   }
   return (
      <div className='notes__appbar'>
         <span> {dateFormated}</span>
         {/* <input id='#inputPicture' type="file" style={{ display: 'none' }} /> */}
         <input name='file' id='inputPicture' type="file" style={{ display: 'none' }} onChange={handleFiles} />
         <div>
            <button className='btn' onClick={handlePicture}>
               Picture
            </button>
            <button className='btn' onClick={handleSave}>
               Save
            </button>
         </div>
      </div>
   )
}
