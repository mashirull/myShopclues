import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavItems from './NavItems';
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { VscThreeBars } from 'react-icons/vsc';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../Sliders/authSlice';


const Header = () => {

  const [burger , setBurger] = useState(false)

  const cartProduct = useSelector(state => state.cart.cartProductsItems)
  const user = useSelector(state => state.auth.user)
  const isloggedIn = useSelector(state => state.auth.isLoggedIn)
  const wishListProduct = useSelector(state => state.wishList.wishListData)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  return (
    <div className='flex justify-between items-center  p-10 shadow-md shadow-gray-400 h-12 box-border lg:p-8  bg-white sticky top-0 left-0 z-50 '>
      <div className='flex items-center '>
        <h1 className='text-3xl sm:text-2xl font-bold text-sky-500 relative'>SHOPCLUES.</h1>
        <div className={`${burger ? 'lg2:block' : 'lg2:hidden'} flex items-center lg2:absolute lg2:top-16 lg2:right-0 lg2:bg-red-100 lg2:p-6`}>
          <NavItems />
          
        </div>
      </div>

      <div className='flex items-center justify-center '>
      {isloggedIn ? <button className='bg-red-400 py-1 px-3 rounded-sm text-white lg2:hidden' onClick={()=>dispatch(logout())}>Logout</button> :<button className='bg-red-400 py-1 px-3 rounded-sm text-white lg2:hidden' onClick={()=>navigate('/auth/login')}>Login</button>}
        {isloggedIn && <figure className='rounded-full h-10 w-10 border border-sky-500 flex flex-col items-center ml-3 lg2:hidden'>
          <img src={user.image} alt="profile"  className='w-ful h-full '/>
          <p className='text-sm'>{user.firstName}</p>
        </figure>}
        <span className='text-2xl p-5 sm:px-2 cursor-pointer text-sky-500 relative' onClick={()=>navigate('/wishlist')}>< BsFillSuitHeartFill /><span className='bg-black h-5 w-5 p-1 text-sm flex items-center justify-center rounded-full text-white absolute top-1 right-1 '>{wishListProduct.length}</span></span>
        <span className='text-2xl p-5 sm:px-2 cursor-pointer text-sky-500 relative' onClick={()=>navigate('/cart')}><FaShoppingCart /> <span className='bg-black h-5 w-5 p-1 text-sm flex items-center justify-center rounded-full text-white absolute top-1 right-1 '>{cartProduct.length}</span></span>
        <span className='text-2xl hidden lg2:block' onClick={()=>setBurger(prev => !prev)}>{!burger ?  <VscThreeBars/> : <RxCross2/>}</span>
      </div>



    </div>
  )
}

export default Header