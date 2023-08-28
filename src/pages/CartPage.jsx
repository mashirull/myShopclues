import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItems from '../component/CartItems';
import Button from '../component/Button';
import TotalAmount from '../component/TotalAmount';
import EmptyCart from '../component/EmptyCart';

const CartPage = () => {

  const cartProduct = useSelector(state => state.cart.cartProductsItems)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className='bg-white mx-3 mt-3 mb-10 relative '>
      <div className='px-4 py-5'>
        <h1 className='text-2xl font-semibold pb-0 '>My Cart {cartProduct.length !== 0 && <span>( {cartProduct.length} Items )</span>}</h1>
      </div>
      <hr />

      {cartProduct.length === 0 ? <EmptyCart/> : <div className='px-4 pt-5 pb-20 border-b-2 border-gray-400'>
        <p className=' text-md text-gray-500 pb-5 sm2:text-sm'>Congrats! you are aligible for extra 10% off on prepaid orders with minimum order value of Rs 149 and  maximum discount of Rs 1000 . Use coupon code MYSHOPEFIRST. Limit one coupon at a time </p>
        <hr />
        <div>
          {cartProduct.map((product, i) => {
            return (
              <>
                <CartItems product={product} key={product.id} index={i} />
              </>
            )
          })}
        </div>
      </div>}

      <hr />
      {cartProduct.length !== 0 && <TotalAmount cartProduct = {cartProduct}/>}
    </div>
  )
}

export default CartPage