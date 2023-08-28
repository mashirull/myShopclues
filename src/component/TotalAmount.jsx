import React from 'react'

const TotalAmount = ({cartProduct}) => {

    const totalPrice = cartProduct.reduce((prev ,  current) => {
        return current.discontedPrice*current.productQty + prev
    },0)




  return (
    <div className=' flex justify-between'>
        <div></div>

        <div className=' py-3 px-4 w-72 text-md font-thin '>
          <div className='flex justify-between my-1'>
            <p>Total </p>
            <p> ₹ {parseInt(totalPrice)}</p>
          </div>
          <div className='flex justify-between my-1'>
            <p>Shiping Fee </p>
            <p> ₹ 0</p>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <div className='flex flex-col mb-5'>
              <p className='m-0'>Grand Total</p>
              <p className='text-xs text-gray-400 font-thin m-0 '>Inclusive of all the applicable taxes</p>
            </div>
            <p>₹ {parseInt(totalPrice)}</p>
          </div>
          <span className='w-full'>
            <button className='w-full bg-red-400 text-white text-xl py-3 rounded-sm cursor-pointer font-medium'>Place Order</button>
          </span>
        </div>
      </div>
  )
}

export default TotalAmount