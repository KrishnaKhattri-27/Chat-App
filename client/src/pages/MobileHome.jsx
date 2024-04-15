import React from 'react'
import ChatSection from '../components/ChatSection'

const MobileHome = () => {
  return (
    <div className='w-[95%] xs:w-[75%] sm:w-[50%] md:w-[95%] lg:w-[75%] md:hidden h-[75%] aspect-auto  bg-[#F1F5FB] rounded-md bg-clip-padding  bg-opacity-70 border border-gray-100 '>
      <ChatSection/>
    </div>
  )
}

export default MobileHome
