import carList from '@/data/carList'
import React, { useState } from 'react'
import  Image from 'next/image'
const Cars = () => {
    const [selectedCar, setselectedCar] = useState<any>()
  return (
    <div className='mt-3'>
        <h2 className='font-semibold'>Select Car</h2>
        <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
            {carList.map((item,index)=>(
                <div key={index} className={`m-2 p-2 border-[1px] rounded-md cursor-pointer hover:border-yellow-400 ${index==selectedCar ? 'border-yellow-400':null}`}
                onClick={()=>setselectedCar(index)}>
                    <Image src={item.image} 
                    alt={item.name}
                    width={75}
                    height={80}
                    className='w-full'
                    />
                    <h2 className='text-[12px] text-gray-500'>{item.name}
                    <span className='float-right text-black'>{item.charges*8}$</span></h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cars