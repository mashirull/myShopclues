import React, { useEffect } from 'react';
import FilterSection from '../component/FilterSection';
import AllProductSection from '../component/AllProductSection';
import { BsFilterRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { sortProduct } from '../Sliders/productSlice';
import { useDispatch } from 'react-redux';
import {BiSearch}  from 'react-icons/bi';
import { searchProduct } from '../Sliders/productSlice';

const Product = () => {

  const products = useSelector(state => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <div className='m-4'>
        <div className='flex justify-between items-center other2:hidden'>
          <div className='w-1/6 mr-3 mb-3 flex justify-between items-center text-lg'>
            <p>Filtering</p>
            <span><BsFilterRight /></span>
          </div>

          <div className='w-10/12 mb-3 flex justify-between items-center '>
            <p>Total Products : {products?.length}</p>
            <div className='flex'>
              <div className='flex items-center  bg-white flex-row-reverse h-full mr-4 '>
                <input type="search" placeholder='Search here...' className='p-2  bg-white   text-sm w-32 focus:outline-0 ' onChange={(e)=>dispatch(searchProduct(e.target.value))} />
                <span className='p-2 '><BiSearch /> </span>
              </div>
              <label htmlFor="">
                Sort by :- <select name="sort" id="sort" className='p-2 cursor-pointer' onChange={(e) => dispatch(sortProduct(e.target.value))}>
                  <option value="default"  >Default</option>
                  <option value="a-z" className='py-2'>Product - A to Z</option>
                  <option value="z-a" className='py-2'>Product - Z to A</option>
                  <option value="h-l" className='py-2'>Price - High to Low</option>
                  <option value="l-h" className='py-2'>Price - Low to High</option>
                </select>
              </label>
            </div>

          </div>
        </div>
        <div className='flex  justify-between md:flex-col '>
          <FilterSection />
          <AllProductSection />
        </div>
      </div>
    </>

  )
}

export default Product