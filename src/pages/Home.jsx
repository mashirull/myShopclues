import React, { useEffect } from 'react';
import Crousel from '../component/Crousel';
import DealsOfDay from '../component/DealsOfDay';
import BudgetBazar from '../component/BudgetBazar';



const Home = () => {

  const isOnLine = window.navigator.onLine
  console.log(isOnLine)

  const images = ['https://cdn.shopclues.com/images/banners/2023/June/05/HB1_MegaSavingsSale_Web_SYM_05June23.jpg' ,
  'https://cdn.shopclues.com/images/banners/2022/Oct/11/HB5_Asus_Web_NCP_11Oct22.jpg' ,
   'https://cdn.shopclues.com/images/banners/2023/June/16/HB3_Footwear_Web_Esha_16thJune23.jpg' , 
   'https://cdn.shopclues.com/images/banners/2023/June/19/HB2_RefurbMobile_Web_Esha_19thJune23.jpg' ,
    'https://cdn.shopclues.com/images/banners/2023/July/13/HB4_JDD_Web_Esha_13thJuly23.jpg']

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <>
      <Crousel  images = {images} height = {80}/>
      <p>{isOnLine}</p>
      <DealsOfDay/>
      <BudgetBazar/>
    </>
  )
}

export default Home;