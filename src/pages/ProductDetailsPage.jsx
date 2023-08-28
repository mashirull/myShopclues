import React, { useEffect, useState } from 'react';
import { AiTwotoneStar } from "react-icons/ai";
import { TbTruckDelivery, TbReplace } from "react-icons/tb"
import { RiCustomerService2Line } from "react-icons/ri"
import { VscWorkspaceTrusted } from "react-icons/vsc";
import Images from '../component/Images';
import ProductQtyManager from '../component/ProductQtyManager';
import Button from '../component/Button';
import { useSelector } from 'react-redux';
import { fetchSingleProduct } from '../Sliders/productSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDiscount } from '../helper/discount';
import { NavLink } from 'react-router-dom';
import { addCartProduct } from '../Sliders/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProductDetailsPage = () => {
    
    const product = useSelector(state => state.product.singleProduct)
    const isLoadding = useSelector(state => state.product.isLoadding)
    const isError = useSelector(state => state.product.isError)

    const { id , title , thumbnail ,price , brand , discountPercentage , stock} = product
    const discontedPrice = parseInt(useDiscount(price , discountPercentage))
    // console.log(product)
    
    const { productId } = useParams()
    const dispatch = useDispatch()

    
    const [productQty, setProductQty] = useState(1)
    const [imgIndex , setImgIndex] = useState(0)

    const increment = () => {
        productQty < stock ? setProductQty(productQty + 1) : setProductQty(stock)
    }

    const decrement = () => {
        productQty > 1 ? setProductQty(productQty - 1) : setProductQty(1)
    }

    const handler = (index) => {
        setImgIndex(index)
    }

    const notify = () => toast("Product is added to cart successfully");


    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchSingleProduct(productId))
    }, [])

    return (
    
        <div className='min-h-full'>
            <h1 className='p-2 text-xl'><NavLink to="/product"><span className='text-blue-500 cursor-pointer'>product</span></NavLink>/{product.title}</h1>

            <div className='bg-white min-h-screen '>

                {isError ? <p className='text-red-500 text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Something went wrong!</p> : isLoadding ? <img src="/lodder.svg" alt="loadder"  className='absolute top-1/2 left-1/2 -translate-x-1/2 h-20'/> :
                <div className='p-10 flex justify-between bg-white mt-3 lg:flex-col items-center'>
                    <div className=' mr-5 w-5/12 lg:w-9/12'>
                        <figure className='m-0 h-96 w-full min-w-full bg-gray-300'>
                            <img src={product.length !== 0 && product?.images[imgIndex]} alt="thumbnail" className='w-full h-full' />
                        </figure>
                        <Images imgs={product.length === 0 ? [] :product?.images} onclickHandler = {handler} imgIndex = {imgIndex}/>
                    </div>

                    <div className='w-1/2 px-3 lg:w-full'>
                        <h1 className='text-4xl font-semibold tracking-wide '>{product.title}</h1>
                        <div className='flex my-3'>
                            <p className='text-xl mr-3 flex'>Brand :   <p className='text-lg mx-2'> {product.brand}</p> </p> |
                            <p className='flex items-center text-xl ml-3'>Ratting : {product.length !== 0 && product?.rating.toFixed(1)} <span className='text-red-400'><AiTwotoneStar /></span></p>
                        </div>
                        <div className='flex w-72 justify-between my-3'>
                            <h1 className='text-xl '>Price : <span className='font-bold text-sky-700'>Rs.{parseInt(useDiscount(product?.price, product.discountPercentage))}</span></h1>
                            <h1 className='text-gray-400'><del>Rs.{product?.price}</del></h1>
                            <h1 className='text-red-400 font-bold'>({parseInt(product?.discountPercentage)}% OFF)</h1>
                        </div>
                        <h1 className='text-xl font-semibold'>Description : </h1>
                        <p>{product?.description}</p>
                        <div className='flex my-6 justify-between flex-wrap'>
                            <div className='flex flex-col items-center'>
                                <span className='text-2xl bg-gray-300 p-2 rounded-full'><TbTruckDelivery /></span>
                                <p>Free Delivery</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-2xl bg-gray-300 p-2 rounded-full'><TbReplace /></span>
                                <p>30 days Replacement</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-2xl bg-gray-300 p-2 rounded-full'><RiCustomerService2Line /></span>
                                <p>24*7 Customer Services</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-2xl bg-gray-300 p-2 rounded-full'><VscWorkspaceTrusted /></span>
                                <p>2 Years Warranty</p>
                            </div>
                        </div>
                        <hr />
                        <h1 className='text-xl my-5 border-b-2 border-black pb-6 font-semibold'>Available : <span className='text-green-800  '>In-Stock</span></h1>
                        <div className='my-6'>
                        <h1 className='text-xl font-semibold mb-4'>Select Quantity :</h1>
                            <ProductQtyManager qty={productQty} increment={increment} decrement={decrement} stock = {stock} />
                        </div>
                        <span onClick={()=>{dispatch(addCartProduct({id , price , thumbnail , productQty , title , brand , discountPercentage , discontedPrice , stock})) , notify()}} ><Button value={'Add to Cart'}  /></span>

                    </div>
                </div>}
            </div>
            <ToastContainer />
        </div>

    )
}

export default ProductDetailsPage;