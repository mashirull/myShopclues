import './App.css'
import Header from './component/Header';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Footer from './component/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDealOfDayProduct } from './Sliders/productSlice';
import { fetchProduct } from './Sliders/productSlice';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ErrorPage from './pages/ErrorPage';
import CartPage from './pages/CartPage';
import WishListPage from './pages/WishListPage';
import LoginPage from './pages/LoginPage';
import { Navigate } from 'react-router-dom';


function App() {

  const dispatch = useDispatch()

  const isloggedIn = useSelector(state => state.auth.isLoggedIn)

  useEffect(()=>{
       dispatch(fetchDealOfDayProduct())
       dispatch(fetchProduct())
  },[dispatch])

  
  return <>
  <BrowserRouter>
    <Header/>
      <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/product'  element = {<Product/>}/>
          <Route path='/product/:productId' element= {<ProductDetailsPage/>}/>
          <Route path='/cart'   element = {<CartPage/>} />
          <Route path='/wishlist' element = {isloggedIn ? <WishListPage/> : <Navigate replace to={'/auth/login'}/>}/>
          <Route path='/auth/login' element={<LoginPage/>}/>
          <Route  path='*'   element = {<ErrorPage/>}  />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>

}
  
export default App
