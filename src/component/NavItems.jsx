import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Sliders/authSlice';
import { useNavigate } from 'react-router-dom';

const NavItems = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.auth.user)
  const isloggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <ul className='flex ml-4 align-middle lg2:flex-col lg2:justify-center lg2:items-center'>
        <li className='mx-3 cursor-pointer font-medium p-4 text-gray-400 lg:p-2 '>
          <NavLink to="/">Home</NavLink>
        </li>
      
        <li className='mx-3 cursor-pointer font-medium p-4 text-gray-400 lg:p-2 '>
          <NavLink to="/product">Product</NavLink>
        </li>
        {/* <li className='mx-3 cursor-pointer font-medium p-4 text-gray-400 '>Contact</li> */}

      <li>
      {isloggedIn ? <button className='bg-red-400 py-1 px-3 rounded-sm text-white hidden lg2:flex' onClick={()=>dispatch(logout())}>Logout</button> :<button className='bg-red-400 py-1 px-3 rounded-sm text-white hidden lg2:block' onClick={()=>navigate('/auth/login')}>Login</button>}
        {isloggedIn && <figure className='rounded-full h-10 w-10 border border-sky-500 flex-col items-center ml-3 hidden lg2:flex'>
          <img src={user.image} alt="profile"  className='w-ful h-full '/>
          <p className='text-sm'>{user.firstName}</p>
        </figure>}
      </li>

    </ul>
  )
}

export default NavItems;