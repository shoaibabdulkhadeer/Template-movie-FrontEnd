import React from 'react'
import '../styles/Navbar.css'
import { RiShoppingCart2Fill } from 'react-icons/ri';


const Navbar = () => {
  return (
    <div className='Navbar'>
            <h2>Movie Theater Landing</h2>

                <div className='NavLinks'>
                     <ul>
                        <li>Home</li>
                        <li>Movies</li>
                        <li>Calendar </li>
                        <li>Movie</li>
                        <li>Membership</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Landing </li>
                        <RiShoppingCart2Fill size={18} style={{marginLeft:"18px"}}/>
                        
                     </ul>

              </div>
          
    </div>
  )
}

export default Navbar