import React from 'react'
import AdressBar from './AdressBar'
import Cars from './Cars'
import Cards from './Cards'

const Booking = () => {
  return (
    <div className='p-5'>
        <h2 className='text-[20px] font-semibold ml-3'>Booking</h2>
        <div className='border-[1px] p-5 rounded-md' style={{height:'80vh'}}>
        <AdressBar/>
        <Cars/>
        <Cards/>
        <button className='w-full bg-yellow-500 p-1 rounded-md mt-4'>Book</button>
        </div>
        
    </div>
  )
}

export default Booking