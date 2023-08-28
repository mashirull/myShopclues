import React, { useEffect, useState } from 'react';
import {AiTwotoneStar} from  "react-icons/ai";
import { FaShoppingCart } from 'react-icons/fa';
import Crousel from './Crousel';
import { useDiscount } from '../helper/discount';
import { AiOutlineHeart , AiTwotoneHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { addToWishList } from '../Sliders/wishListSlice';
import { useDispatch  , useSelector} from 'react-redux';


const Card = ({product , addToCartClickHandler , setCurrentProduct}) => {


  const [showCrousel ,  setShowCrousel] = useState(false)
  const [wishLished ,  setWishished] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const wishListProduct = useSelector(state => state.wishList.wishListData)

  useEffect(()=>{
    wishListProduct.map((curElem) => {
      if(curElem.id === product.id){
        setWishished(true)
      }
    })

  },[wishLished ,product, wishListProduct])


  const cardOnclickHandler = (productId) => {
    navigate(`/product/${productId}`)
  }

    
  return (
    <div className='card w-56 m-1 relative' onMouseOver={()=>setShowCrousel(true)} onMouseLeave={()=>setShowCrousel(false)} >
        <div className='relative w-full h-52 cursor-pointer'>
            {showCrousel ? <span className='w-full h-full' onClick={()=>cardOnclickHandler(product.id)}><Crousel  images = {product.images} height ={52}/></span> : <img src={product.images[0]} alt="random" className='w-full h-full' /> }
            
            {!showCrousel &&<div className='bg-white py-1 px-4 absolute left-3 bottom-2'>
                <p className='flex items-center justify-between text-sm'>{product.rating.toFixed(1)} <span className='text-sky-500 pl-2 '><AiTwotoneStar/></span></p>
            </div>}
        </div>
        <div className='p-4'>

        <p className={`text-center ${wishLished && 'text-red-400'} cursor-pointer px-5 py-1 border border-gray-300 hover:border-black flex  items-center justify-center text-xs wishlist`}  onClick={()=>(dispatch(addToWishList(product)))}><span className='mr-2 text-lg'>{wishLished? <AiTwotoneHeart/> : <AiOutlineHeart/>}</span> <span className=' text-xs font-bold'>WISHLIST</span></p>

        <h1 className='text-lg font-semibold mb-3 title'>{product.title.slice(0 , 17)}...</h1>
        <p className='text-sm font-thin'>{product.brand}</p>
        <p className='text-md font-semibold'>Rs.{parseInt(useDiscount(product.price , product.discountPercentage))} <del className='text-sm font-thin mx-1 text-gray-400'>Rs.{product.price}</del> <span className='text-sm text-sky-700 font-medium'>({parseInt(product.discountPercentage)}% OFF)</span></p>
        </div>
        <button className='text-sky-500 absolute top-2 right-2 text-xl p-1 hidden small_cart hover:text-sky-900' onClick={()=>{addToCartClickHandler() , setCurrentProduct()}}>
          <span><FaShoppingCart/></span>
        </button>
    </div>
  )
}

export default Card