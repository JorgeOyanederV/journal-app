import React from 'react'

export const JournalEntry = ({ entry }) => {
   return (
      <div className='journal__entry pointer'>
         <div className='journal__entry-picture' style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://www.cinepremiere.com.mx/wp-content/uploads/2021/07/digimon-adventure-900x491.jpg)'
         }}></div>
         <div className='journal__entry-body'>
            <p className='journal__entry-title'>
               Un nuevo dia
            </p>
            <p className='journal__entry-content'>
               Los Emblemas se refieren a dos cosas, a los símbolos de las.
            </p>
         </div>
         <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
         </div>
      </div>
   )
}
