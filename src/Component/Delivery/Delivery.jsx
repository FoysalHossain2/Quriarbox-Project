import React from 'react'
import Button from '../commonComponent/Button';
import { FaPlay } from "react-icons/fa6";

const Delivery = () => {
  return (
    <section className='bg-gradient-to-r from-[#fff7e7] to-[#fff1dc] py-[100px]'>
        <div className="container w-[1320px]">
            <div className="bgImage bg-[url('./assets/Rectangle12.png')] h-[520px] bg-center rounded-[15px]" >

               <div className='flex justify-center'>
                  <div className='w-[80px] h-[80px] bg-[#F95C19] mt-[150px] rounded-full text-center'>
                    <Button ><FaPlay className='text-white text-[40px] mt-5 ms-2' /></Button>
                  </div>
                </div>

                <h5 className='font-bold text-[31.25px] 
                text-[#F95C19] text-center 
                font-Oxanium mt-[70px]'>
                  FASTEST DELIVERY
                </h5>

               <p className='font-normal text-white text-[25px] leading-[30px] text-center'> 
                    You can get your valuable item in the fastest period of
                   <span className='block'>time with safety. Because your emergency</span>
                  is our first priority.
               </p>
            </div>
        </div>
    </section>
  )
}

export default Delivery