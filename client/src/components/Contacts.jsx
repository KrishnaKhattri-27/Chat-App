import React from 'react'
import Contact from './Contact'
import useUsers from '../hooks/useUsers'

const Contacts = () => {
    const {userNames,loading}=useUsers();
  return (
    <div className='overflow-y-scroll ml-5 pr-3 h-[85%] flex flex-col gap-y-3  mt-5'>
     {userNames?.map((e)=>(
        <Contact data={e}/>
     ))}
    </div>
  )
}

export default Contacts
