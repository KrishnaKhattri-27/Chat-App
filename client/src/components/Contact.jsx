import React from 'react'

const Contact = ({data}) => {
  return (
    <div className='flex gap-x-4 items-center hover:bg-[#2a323c] hover:text-white text-black py-2 px-2 rounded-lg cursor-pointer'>
      <img src={data.picture} alt="" className='w-10 aspect-square'/>
      <h1 className='text-lg font-semibold'>{data.fullName}</h1>
    </div>
  )
}

export default Contact