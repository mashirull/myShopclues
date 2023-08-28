import React, { useEffect, useState } from 'react';
import Card from './Card';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';
import AddToCartModal from '../Modal/AddToCartModal';


const DealsOfDay = () => {

   
    const DealsOfDayProduct = useSelector(state => state.product.dealsOfDayProduct)
    const [showModal , setShowModal] = useState(false)
    const [selctedProduct , setSelectedProduct] = useState({})
   

    const isLoadding = useSelector(state => state.product.isLoadding)
    const isError = useSelector(state => state.product.isError)

    const setAddToCartModal = () => {
      setShowModal(true)
      console.log(showModal)
    }
  
    const removeAddToCartModal = () => {
      setShowModal(false)
    }
     

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 3000, min: 1250 },
          items: 5
        },
        smallDesktop : {
            breakpoint : {max : 1250 , min : 950},
            items : 4
        },


        tablet: {
          breakpoint: { max: 1024, min: 830 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 830, min: 600 },
          items: 2
        },
        smallMobile : {
            breakpoint : {max :600, min : 0 },
            items : 1
        }

      };

   
  return (
    <>
      <div className='m-9 '>
        <h1 className='text-xl font-bold text-gray-800 mb-5'>Deals of the Day</h1>
        <div className=' bg-white w-full m-auto relative p-6 '>
            {isLoadding ? <img src="./lodder.svg" alt="lodder" className='h-13 w-auto m-auto' /> : isError ? <p className='text-red-600 text-center'>somthing went wrong</p> :<div>
                <Carousel responsive={responsive} >
                    {DealsOfDayProduct.map((product , i) => {
                        return (
                            <Card key={i} product = {product} addToCartClickHandler = {setAddToCartModal}  setCurrentProduct = {()=>setSelectedProduct(product)}/>
                        )
                    })}
                </Carousel>
            </div>}
        </div>
      </div>
      {showModal && <div>
      <AddToCartModal product = {selctedProduct}  removeAddToCartModal = {removeAddToCartModal}/>
    </div>}

    </>
  )
}

export default DealsOfDay;