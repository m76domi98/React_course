import React from 'react'
// import Logo from '../movieLogo.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex border-b space-x-8 items-center pl-3 py-4 border-grey-500 border-opacity-50 text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text'>
        <img alt = 'Logo'style={{ backgroundColor: 'transparent' }} className='w-[50px]' src='movieLogo.png'/>
        <Link to='/' className='text-white-500 text-xl font-bold font-mono' style ={{ fontFamily: 'Poppins' }}>Movies</Link>
        <Link to='/watchlist' className='text-white-500 text-xl font-bold font-mono' style={{ fontFamily: 'Poppins' }}> Watchlist</Link>

    </div>
  )
}

export default Navbar