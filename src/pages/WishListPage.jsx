import React from 'react';
import { useSelector } from 'react-redux';
import WishlistItem from '../component/WishlistItem';


const WishListPage = () => {

    const wishListProduct = useSelector(state => state.wishList.wishListData)


  return (
    <div className='bg-white w-10/12 min-h-screen mx-auto my-9 p-8'>
        <p className='mb-5 text-lg'>My Wishlist</p>
        {wishListProduct.length === 0 && <p className='text-center text-xl text-gray-400 my-12'>There is no any WishList Product</p>}
        { wishListProduct.map((curProduct) => {
            return (
                <WishlistItem  key={curProduct.id} product={curProduct}/>
            )
        })}
    </div>
  )
}

export default WishListPage