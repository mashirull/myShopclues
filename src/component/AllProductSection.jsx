import React, { useEffect, useState } from 'react'
import { fetchProduct } from '../Sliders/productSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Card from './Card';
import AddToCartModal from '../Modal/AddToCartModal';
import Pagination from './Pagination';

const AllProductSection = () => {

  const [page , setPage] = useState(1)
  const [showModal , setShowModal] = useState(false)
  const [selctedProduct , setSelectedProduct] = useState({})
  
  const products = useSelector(state => state.product.products)
  const isLoading = useSelector(state => state.product.isLoadding)
  const isError = useSelector(state => state.product.isError)

 

  const setAddToCartModal = () => {
    setShowModal(true)
    console.log(showModal)
  }

  const removeAddToCartModal = () => {
    setShowModal(false)
  }


  const totlePage = products?.length / 20

  let numOfPageArr = []
  
  for (let i = 0; i < totlePage; i++) {
    numOfPageArr.push(i+1)
    
  }

  const setCurPage = (pageNumber) => {
    setPage(pageNumber)
  }

  const increment = () => {
    if(page <= totlePage-1 ){
      setPage(prev => prev+1)
    }
    
  }

  const decrement = () => {
    if(page > 1){
      setPage(prev => prev-1)
    }
  }

 
  return (
    <>
    
    <div className='w-10/12 md:w-full bg-white  relative h-fit min-h-screen py-4'>
      
      <div className=' grid grid-cols-4 place-items-center lg:grid-cols-3 other1:grid-cols-2 other2:grid-cols-1 ' >
        { isError ? <p className='text-red-500 text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Something went wrong!</p>: isLoading ? <span className='m-0 absolute top-1/2 left-1/2  h-full w-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2'><img src="./lodder.svg" alt="loadding" className=' h-20' /></span>  :
         products?.slice((page-1) * 20 , page*20).map((curProduct) => {
          return (
            <Card key={curProduct.id}  product={curProduct} addToCartClickHandler = {setAddToCartModal}  setCurrentProduct = {()=>setSelectedProduct(curProduct)}/>
          )
        })}
      </div>
      <Pagination increment ={increment}  decrement ={decrement} numOfPageArr = {numOfPageArr} totlePage = {totlePage} setCurPage = {setCurPage} page={page}/>
      
    </div>
    {showModal && <div>
      <AddToCartModal product = {selctedProduct}  removeAddToCartModal = {removeAddToCartModal}/>
    </div>}

  </>
  )
}

export default AllProductSection