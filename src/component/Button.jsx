import React, { useState } from 'react'

const Button = ({value}) => {
  const [click , setClick] = useState(false)

  const clickHandle = () => {
    setClick(true)
    setTimeout(() => {
      setClick(false)
    }, 1000);
  }

  return (
    <button className={`bg-red-400 px-6 py-2 text-white rounded-sm font-medium text-xl ${click && 'big'}`} onClick={clickHandle}>
        {value} 
    </button>
  )
}

export default Button