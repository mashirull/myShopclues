import React from 'react'
import { useDiscount } from '../helper/discount';
import { removeFromWishList } from '../Sliders/wishListSlice';
import { useDispatch } from 'react-redux';

const WishlistItem = ({product}) => {

    const {id , thumbnail , price, discountPercentage , title} = product;

    const dispatch = useDispatch()

  return (
    <>
        <div className='flex justify-between py-4 flex-wrap'>
            <div className='flex'>
                <figure className='w-20 h-20 p-1 border border-gray-400 mr-8'>
                    <img src={thumbnail} alt="thumbnail"  className='w-full h-full'/>
                </figure>
                <div className='text-sm'>
                    <h1 className='font-semibold'>{title}</h1>
                    <del className='text-gray-400'>₹ {price}</del>
                    <div className='flex'>
                        <p className='pr-5 font-bold'>₹ {parseInt(useDiscount(price, discountPercentage))}</p>
                        <p className='font-semibold text-sky-700'>{parseInt(discountPercentage)}% OFF</p>
                    </div>
                </div>
            </div>
            <button className='border-2 border-red-500 rounded-md w-20 h-fit text-md py-1 font-semibold hover:bg-red-500 hover:text-white' onClick={()=>dispatch(removeFromWishList(id))}>Delete</button>
        </div>
        <hr />
    </>
  )
}

export default WishlistItem