import React from 'react'
import Button from '../commonComponent/Button'
import Flex from '../commonComponent/Flex'

const Update = () => {
  return (
    <section className='bg-[#222132] py-[100px] '>
        <div className="container w-[1320px]">
        <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 lg:gap-10 p-6 bg-[#1E1E2D] rounded-lg'>
  {/* Text Section */}
  <div className='text-center lg:text-left'>
    <h2 className='font-Raleway text-[28px] lg:text-[39px] font-extrabold text-white'>
      Get an update every week
    </h2>
    <p className='font-Raleway font-normal text-[#C5C5D2] text-[14px] lg:text-[16px] mt-2'>
      We ensure that your product is delivered in the safest possible 
      <span className='block'>manner, at the correct location, at the right time.</span>
    </p>
  </div>

  {/* Subscription Section */}
  <div className='w-full lg:w-auto'>
    <p className='font-Oxanium font-extrabold text-[16px] lg:text-[18px] text-[#F95C19] text-center lg:text-left'>
      SUBSCRIBE TO NEWSLETTER
    </p>

    <div className='flex flex-col lg:flex-row items-center gap-4 mt-4'>
      <input 
        type="email"
        id='email' 
        placeholder='Enter your email' 
        className='w-full lg:w-[386px] px-4 py-3 rounded-lg bg-transparent border-2 border-[#C5C5D2] text-white'
      />
      
      <Button className='bg-[#F95C19] px-6 py-3 rounded-lg font-Oxanium font-bold text-[16px] lg:text-[20px] text-white'>
        Subscribe
      </Button>
    </div>
  </div>
</div>

        </div>
    </section>
  )
}

export default Update