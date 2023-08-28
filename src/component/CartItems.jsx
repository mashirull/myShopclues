import React, { useState } from 'react';
import ProductQtyManager from '../component/ProductQtyManager';
import { useDiscount } from '../helper/discount';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Sliders/cartSlice';
import { incrementItems } from '../Sliders/cartSlice';
import { decrementItems } from '../Sliders/cartSlice';
import { NavLink } from 'react-router-dom';
import RemoveCartModal from '../Modal/RemoveCartModal';



const CartItems = ({product , index}) => {

    const {stock , productQty} = product
    const [isShow ,  setIsShow] = useState(false)

    const dispatch = useDispatch()
    
    const increment = () => {
        dispatch(incrementItems({index , productQty , stock}))
      }
    
      const decrement = () => {
        dispatch(decrementItems({index , productQty}))
      }


    return (
        <>
            <div className='flex justify-between my-7 flex-wrap'>

                <div className=' flex w-96  other2:w-44 sm:w-40 sm2:w-52 '>
                    <NavLink to={`/product/${product.id}`}>
                        <figure className='w-20 h-20 sm:w-14 sm:h-14 p-1 border border-gray-300 cursor-pointer'>
                            <img src={product.thumbnail} alt="thumbnail" className='w-full h-full' />
                        </figure>
                    </NavLink>
                    <div className='flex flex-col ml-8 sm:ml-2'>
                        <h1 className='text-xl text-gray-500 sm:text-sm'>{product.title}</h1>
                        <p className='text-sm'> Brand : {product.brand}</p>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <ProductQtyManager qty={product.productQty} increment={increment} decrement={decrement} />
                    <p className='pt-2 cursor-pointer text-red-500' onClick={()=>setIsShow(true)}>Remove</p>
                </div>

                <div className='flex flex-col sm2:text-sm sm2:mt-4 sm:w-fit'>
                    <div className='flex items-center justify-between h-auto text-md'>
                        <p className='p-0 text-right w-32 sm:w-24 mr-2 text-gray-500'>Price : {product.productQty > 1 && <span>{product.price} x {product.productQty}</span>}  </p>
                        <span className='font-bold w-24 sm2:w-12 '>₹ {(product.price) * product.productQty}</span>
                    </div>
                    <div className='flex items-center justify-between h-auto text-md'>
                        <p className='p-0 text-right w-32 sm:w-20 text-gray-500'>Discount : </p>
                        <span className='font-bold w-24 sm2:w-12 '>-₹ {(product.price - parseInt(useDiscount(product.price, product.discountPercentage))) * product.productQty}</span>
                    </div>
                    <div className='flex items-center justify-between h-auto text-md'>
                        <p className='p-0 text-right w-32 sm:w-20 text-gray-500'>Shiping fee : </p>
                        <span className='font-bold w-24 sm2:w-12 text-sm '>FREE</span>
                    </div>
                </div>

                <div className='flex flex-col w-40 sm2:w-fit sm2:mt-4'>
                    <h1 className='font-bold text-xl text-right'>₹ {parseInt(product.discontedPrice) * product.productQty}</h1>
                    <p className='text-xs text-gray-400 text-right other2:hidden'>Inclusive of all the applicable taxes</p>
                </div>

            </div>
            <hr />
            {isShow && <RemoveCartModal  hideModal = {()=>setIsShow(false)} product = {product}/>}
        </>
    )
}

export default CartItems