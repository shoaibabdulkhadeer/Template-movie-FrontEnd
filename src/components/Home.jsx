import React from 'react'
import '../styles/Home.css'


const Home = () => {
  return (
    <div className='Home'>

        <div className='details'>
           <h1 className='title'>WELCOME TO DIVI THEATER</h1>  
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        </div>

        <button><img src="/images/reel.png" alt="/" width={20}/> SHOWTIMES</button>              
            
    </div>
  )
}

export default Home