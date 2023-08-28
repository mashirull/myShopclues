import React from 'react';
import {BsCart4} from 'react-icons/bs'

const EmptyCart = () => {
  return (
    <div className='p-20 flex items-center flex-col '>
        <span className='p-0 text-9xl text-gray-300 mb-5'><BsCart4/></span>
        <p className='text-gray-400'>You don't have any Product in your Cart</p>
    </div>
  )
}

export default EmptyCart