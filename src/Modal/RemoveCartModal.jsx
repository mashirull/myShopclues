import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Sliders/cartSlice';
import { addToWishList } from '../Sliders/wishListSlice';

const RemoveCartModal = ({hideModal , product}) => {

    const dispatch = useDispatch()

    const {id , thumbnail , title} = product

  return (
    <>
         <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div> {/* Background Overlay */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded shadow-lg relative w-96 other2:w-80 sm:w-72">
             
                <h1>Remove/Move to Wishlist</h1>
                <hr />
                <div className='flex my-3'>
                    <img src={thumbnail} alt="thumbnail" className='w-10 h-10 mr-5' />
                    <p>{title}</p>
                </div>
                <hr />
              <div className='flex items-center mt-2'>
                <button
                  className=" bg-gray-300 text-gray-700 py-1 px-3 rounded text-sm"
                  onClick={()=>{dispatch(addToWishList(product)) , hideModal() , dispatch(removeFromCart(id))}}>
                  Move to Wishlist
                </button>

                <button
                  className='bg-red-400 py-1 px-3 rounded text-white ml-6 text-sm' 
                onClick={()=>{dispatch(removeFromCart(id)) , hideModal()}}
                  >Remove
                </button>
              </div>
                
              <p className='text-xl p-1 w-7 h-7 flex items-center justify-center bg-red-400 text-white rounded-full absolute -top-2 -right-2 cursor-pointer' onClick={hideModal}>X</p>
            </div>
      </div>
      </div>
    
    </>
  )
}

export default RemoveCartModal