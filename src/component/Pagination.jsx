import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill} from 'react-icons/bs';

const Pagination = ({increment , decrement , numOfPageArr , totlePage , setCurPage , page}) => {

    const products = useSelector(state => state.product.products)
    const isLoading = useSelector(state => state.product.isLoadding)

  return (
    <>
        {products.length > 20  && !isLoading && <div className='flex items-center justify-center my-8'>
        <span className={`text-4xl  cursor-pointer mr-8 ${page === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-sky-500'}`} onClick={decrement}><BsFillArrowLeftCircleFill/></span>
        {numOfPageArr?.map((curElem) => {
          return (
            <div className={`border border-sky-500 h-10 w-10 flex items-center justify-center text-xl mx-2 cursor-pointer font-semibold ${page === curElem && 'bg-sky-500 text-white' }`}  onClick={()=>setCurPage(curElem)}>{curElem}</div>
          )
        })}
        <span className={`text-4xl cursor-pointer ml-8 ${page === totlePage  ? 'text-gray-400 cursor-not-allowed' : 'text-sky-500'}`} onClick={increment}><BsFillArrowRightCircleFill/></span>
      </div>}
    </>
  )
}

export default Pagination