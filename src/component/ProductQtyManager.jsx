import React from 'react';
import {FaMinus , FaPlus} from 'react-icons/fa'

const ProductQtyManager = ({qty , increment ,decrement , stock}) => {
  return (
    <div className='flex items-center '>
        <h1 className={`p-2 bg-gray-300 hover:bg-gray-400 cursor-pointer text-white rounded-full text-xs ${qty === 1 && ' hover:bg-gray-300 cursor-not-allowed'}`} onClick={decrement}>
            <span><FaMinus/></span>
        </h1>
        <h1 className='px-3 text-xl font-bold'>{qty}</h1>
        <h1
        className={`p-2 bg-gray-300 hover:bg-gray-400 cursor-pointer text-white rounded-full text-xs ${qty === stock && 'cursor-not-allowed hover:bg-gray-300'}`} onClick={increment}>
            <span><FaPlus/></span>
        </h1>
    </div>
  )
}

export default ProductQtyManager