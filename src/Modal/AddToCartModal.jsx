import React, { useState } from 'react';
import ProductQtyManager from '../component/ProductQtyManager';
import { useDiscount } from '../helper/discount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addCartProduct } from '../Sliders/cartSlice';

const AddToCartModal = ({ product ,removeAddToCartModal}) => {

  const dispatch = useDispatch()

  const {price ,  thumbnail , title , discountPercentage , stock, id , brand} =  product
  const [productQty, setProductQty] = useState(1)

  const discontedPrice = useDiscount(price , discountPercentage)

  const increment = () => {
    productQty < stock ? setProductQty(productQty + 1) : setProductQty(stock)
  }

  const decrement = () => {
    productQty > 1 ? setProductQty(productQty - 1) : setProductQty(1)
  }

  const notify = () => toast("Product is added to cart successfully");



  return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div> {/* Background Overlay */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded shadow-lg relative w-96 other2:w-80 sm2:w-72">
              <img src={product.thumbnail} alt="logo"  className='w-full h-60 sm2:h-48'/>
              <h1 className='py-3 text-3xl font-medium'>{title}</h1>
              <div className='flex my-2'>
                <p><del>Price :</del> </p>
                <p><del>₹ {price}</del></p>
                <p className='font-semibold px-3'>discount : </p>
                <p className='text-sky-800'>{parseInt(discountPercentage)}% OFF</p>
              </div>
              <div className='flex'>
                <p className='font-semibold pr-3 text-xl '>Price : </p>
                <p className='text-xl'>₹ {parseInt(useDiscount(price ,  discountPercentage))}</p>
              </div>
              <div className='flex my-2'>
                <p className='font-semibold text-xl pr-3'>select Quantity : </p>
                <ProductQtyManager qty={productQty} increment={increment} decrement={decrement} stock={stock}/>
              </div>

              <div className='flex items-center mt-6'>
                <button
                  className=" bg-gray-300 text-gray-700 py-2 px-4 rounded"
                  onClick={removeAddToCartModal}>Cancle
                </button>
                <button
                  className='bg-red-400 py-2 px-4 rounded text-white ml-6' 
                  onClick={()=>{dispatch(addCartProduct({id , price , thumbnail , productQty , title , brand , discountPercentage , discontedPrice , stock})) , notify() ,removeAddToCartModal()}}
                  >Add To Cart
                </button>
              </div>
                
              <p className='text-xl p-1 w-7 h-7 flex items-center justify-center bg-red-400 text-white rounded-full absolute -top-2 -right-2 cursor-pointer' onClick={removeAddToCartModal}>X</p>
            </div>
      </div>
      <ToastContainer/>
      </div>
  )
}

export default AddToCartModal;