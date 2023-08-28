import React from 'react'

const Images = ({imgs,  onclickHandler , imgIndex}) => {
    return (
        <div className='flex flex-wrap my-5 w-full other2:my-0'>
            {imgs?.map((imgUrl, i) => {
                return (
                    <figure key={i} className={`m-3 w-14 lg:w-9 other2:w-7 cursor-pointer rounded-md hover:border-2 hover:border-red-400 p-1
                     ${imgIndex === i && 'border-2 border-red-400'}`} onClick={()=>onclickHandler(i)}>
                        <img src={imgUrl} alt={i} className='w-full h-full' />
                    </figure>
                )
            })}
        </div>
    )
}

export default Images