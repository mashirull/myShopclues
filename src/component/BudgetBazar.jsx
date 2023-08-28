import React from 'react';
import { useNavigate } from 'react-router-dom';
import { filterBudgetBazarProduct } from '../Sliders/productSlice';
import { useDispatch, useSelector } from 'react-redux';


const BudgetBazar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const clickHandler =  (price) =>{
    navigate('/product')
    dispatch(filterBudgetBazarProduct(price))
    
  }

  const budgetImage =
   [
     {
      imgUrl:'https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar1.jpg',
      price: 99
    },
    {
      imgUrl:'https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar2.jpg' ,
      price : 199
    },
    {
      imgUrl:'https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar3.jpg' ,
      price : 399
    },
    {
      imgUrl:'https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar4.jpg' , 
      price : 599
    } ,
    {
      imgUrl:'https://cdn.shopclues.com/images/banners/2023/June/08/08June_SrushtyBudget_bazzar5.jpg'  , 
      price :799
    }
  ]

  return (
    <div className='m-9'>
      <h1 className='text-xl font-bold text-gray-800 mb-5'>Budget Bazaar</h1>
      <div className='grid p-6 bg-white grid-cols-5 lg:grid-cols-3 sm2:grid-cols-2 sm:grid-cols-1'>
          {budgetImage.map((curElem, i)=>{
            return (
              <figure key={i} className='m-3 cursor-pointer hover:opacity-70' onClick={()=>clickHandler(curElem.price)}>
                <img src={curElem.imgUrl} alt={`budget${i}`} />
              </figure>
            )
          })}
      </div>
    </div>
  )
}

export default BudgetBazar