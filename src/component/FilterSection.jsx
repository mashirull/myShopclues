import React, { useState } from 'react'
import {MdCheckBoxOutlineBlank , MdCheckBox} from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../Sliders/productSlice';
import { filterByBrand } from '../Sliders/productSlice';
import { fetchProduct } from '../Sliders/productSlice';


const FilterSection = () => {

    const dispatch = useDispatch();

    const [brandRange , setBrandRange] = useState(7);
    const [categoryRange , setCategoryRange] = useState(7);
    const [activeBrand , setActiveBrand] = useState(null);
    const [activeCategory , setActiveCategory] = useState(null)

    const products = useSelector(state => state.product.totalProduct)
    const isError = useSelector(state => state.product.isError)
    const isLoadding = useSelector(state => state.product.isLoadding)

    const getUniqueData = (arg) => {
        let allElement = products.map((elem) => elem[arg])
        const UniqueElement = Array.from(new Set(allElement))
        return UniqueElement
    }

    const uniqueBrand = getUniqueData('brand')
    const uniqueCategory = getUniqueData('category')

    const resetFilter = () => {
        if(activeBrand || activeCategory ){
            setActiveBrand(null)
            setActiveCategory(null)
            dispatch(fetchProduct())
        }
    }
    
  return (
    <div className='w-1/6 mr-3 bg-white p-2 h-fit min-h-screen md:w-full md:min-h-fit'>
       
        { <div className='my-5'>
            <p>CATEGORIES</p>
            <ul className='flex flex-col justify-start h-52 overflow-y-auto md:flex-row md:flex-wrap md:h-auto'>
                {uniqueCategory?.slice(0,categoryRange).map((category , i)=> {
                    return (
                        <li key={i} className='flex items-center text-sm m-1 cursor-pointer ' onClick={()=>{setActiveCategory(category) , dispatch(filterByCategory(category))}}>

                             <span className='mr-3 text-xl text-sky-500 cursor-pointer '>{activeCategory === category ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}</span>{category} 

                             </li>
                    )
                })}
               {!isLoadding && !isError && categoryRange === uniqueCategory.length ? <li className='text-red-400 text-sm cursor-pointer'  onClick={()=>setCategoryRange(7)}>show less </li> :
                <li className='text-red-400 text-sm cursor-pointer'  onClick={()=>setCategoryRange(uniqueCategory.length)}>show more ({uniqueCategory.length-8}+)</li>}
            </ul>
        </div>}
        <hr />

        { <div className='my-5'>
            <p>BRANDS</p>
            <ul className='flex flex-col justify-start h-52 overflow-y-auto md:flex-row md:flex-wrap md:h-auto'>
                {uniqueBrand?.slice(0,brandRange).map((brandName , i) => {
                    return(
                        <li key={i} className='flex items-center text-sm m-1 cursor-pointer  ' onClick={()=>{setActiveBrand(brandName) , dispatch(filterByBrand(brandName)) }}>

                             <span className={`mr-3 text-xl text-sky-500 cursor-pointer`} >{activeBrand === brandName ? <MdCheckBox/> :<MdCheckBoxOutlineBlank/>}</span>

                              {brandName}
                              </li>
                    )
                })}
                {!isLoadding && !isError && brandRange === uniqueBrand.length ? <li className='text-red-400 text-sm cursor-pointer'  onClick={()=>setBrandRange(7)}>show less </li> :
                <li className='text-red-400 text-sm cursor-pointer'  onClick={()=>setBrandRange(uniqueBrand.length)}>show more ({uniqueBrand.length-8}+)</li>}
            </ul>
        </div>}
        {!isLoadding && !isError && <div className='my-5'>
           <button className={`p-1  text-white ${activeBrand || activeCategory ? 'bg-red-400' : 'bg-gray-300'}`} onClick={resetFilter}>Reset Filter</button>
        </div>}
    </div>
  )
}

export default FilterSection