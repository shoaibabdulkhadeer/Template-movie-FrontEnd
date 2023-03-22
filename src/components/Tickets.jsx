import React from 'react'
import '../styles/Tickets.css'

const Tickets = () => {
  return (
    <div className='Tickets'>
         <div className='orderbuts'>
            <button>VIEW SHOWTIME</button>
            <button>BUY TICKETS</button>
            <button>PRE-ORDER SNACKS</button>
         </div>

         <div className='showing'>
         <p>FEATURED</p>
         <h1><span>Now</span> Showing</h1>
         </div>
          
    </div>
  )
}

export default Tickets