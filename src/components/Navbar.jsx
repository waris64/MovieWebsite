import React, { useState } from 'react'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useClerk, useUser, UserButton } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'
const Navbar = () => {
  const [isOpen, setisOpen] = useState(false)

  const { user } = useUser()
  const { openSignIn } = useClerk()
  const navigate = useNavigate()
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex  items-center justify-between px-6 md:px-16 lg:px-36 py-5'>
      <Link to='/' className='max-md:flex-1'>
        <img src={assets.logo} alt="" className='w-36 h-auto' />
      </Link>
      <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border  border-green-300/20 overflow-hidden transition-[width] duraton-300 ${isOpen ? 'max-md:w-full  ' : 'max-md:w-0'}`}>
        <XIcon className='md:hidden absolute top-6 right-6 h-6 w-6 cursor-pointer' onClick={() => setisOpen(!isOpen)} />

        <Link to='/' onClick={() => { scrollTo = (0, 0); setisOpen(false) }}>Home</Link>
        <Link to='/movies' onClick={() => { scrollTo = (0, 0); setisOpen(false) }} >Movies</Link>
        <Link to='/' onClick={() => { scrollTo = (0, 0); setisOpen(false) }}>Theaters</Link>
        <Link to='/' onClick={() => { scrollTo = (0, 0); setisOpen(false) }}>Releases</Link>
        <Link to='/favourite' onClick={() => { scrollTo = (0, 0); setisOpen(false) }}>Favourites</Link>
      </div>
      <div className='flex items-center gap-8'>
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer' />
        {
          !user ? (
            <button
              onClick={openSignIn}
              className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull 
                        transition rounded-full font-medium cursor-pointer
         '
            >
              Login
            </button>
          ) : (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label='My Bookings' labelIcon=
                  {<TicketPlus width={15} />} onClick={() => navigate('/my-bookings')} />
              </UserButton.MenuItems>
            </UserButton>
          )
        }

      </div>
      <MenuIcon className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer' onClick={() => setisOpen(!isOpen)} />
    </div>
  )
}

export default Navbar