import React, { useEffect, useState } from 'react';
import { login } from '../Sliders/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username , setUsername] = useState(null)
    const [password ,  setPassword] = useState(null)
    const [lodder ,  setLodder] = useState(false)
    const [errorMsg , setErrorMsg] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

    const submitHandler = async (e) => {
        e.preventDefault()
        setLodder(true)
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: 'kminchelle', //
              password: '0lelplR',  //
              // expiresInMins: 60, // optional
            })
          })

          const data = await response.json()

          if(response.ok){
            console.log('login succesfull')
            setLodder(false)
            dispatch(login(data))
            navigate('/product')
          }
          else{
            console.log('login Failed')
            setErrorMsg(data.message)
            setLodder(false)
            console.log(data)
          }

        } catch (error) {
            setLodder(false)
            setErrorMsg('Something went wrong ! or check your internet connection')
        }

        
    }



  return (
    <div className='mx-auto my-20 bg-white w-1/3 py-6 px-10 relative'>
        <h1 className='text-center text-2xl font-bold text-sky-500'>LOGIN</h1>
        <form action="" onSubmit={submitHandler}>
            <label htmlFor="username" className='block my-2'>Username</label>
            <input type="text" id='username'  className='bg-gray-200 w-full p-2 rounded-sm ' value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            <label htmlFor="password" className='block my-2'>Password</label>
            <input type="password" name="pass" id="password" className='bg-gray-200 w-full p-2 rounded-sm ' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <input type="submit" value="Login"  className='bg-red-400 text-white px-4 py-2 block mt-8 w-full cursor-pointer'/>
        </form>
        {lodder &&  <img src="/lodder.svg" alt="lodding"  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12'/>}
        {errorMsg && <p className='text-red-700 text-sm'>{errorMsg}</p>}
        <p className='text-xs'>username- <span className='font-bold'>kminchelle</span> &  password- <span className='font-bold'>0lelplR</span></p>
    </div>
  )
}

export default LoginPage