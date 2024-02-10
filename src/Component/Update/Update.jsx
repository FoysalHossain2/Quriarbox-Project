import React from 'react'
import Button from '../commonComponent/Button'
import Flex from '../commonComponent/Flex'

const Update = () => {
  return (
    <section className='bg-[#222132] py-[100px] '>
        <div className="container w-[1320px]">
          <Flex className='justify-between'>
            <div>
                <h2 className='font-Raleway text-[39px] font-extrabold text-white'>
                  Get an update every week
                </h2>
                <p className='font-Raleway font-normal text-[#C5C5D2] text-[16px] mt-2'>
                  We ensure that your product is delivered in the safest possible 
                  <span className='block'> manner, at the correct location, at the right time.</span>
                </p>
            </div>
            <div className='mr-[15px]'>
                <p className='font-Oxanium font-extrabold text-[18px] text-[#F95C19]'>
                  SUBSCRIBE TO NEWSLETTER
                </p>
                <div className='flex items-center justify-center gap-5'>
                    <input 
                    type="email"
                     id='email' 
                     placeholder='Enter your mail' 
                     className='mt-3 px-[15px] w-[386px] py-[12px]
                      rounded-lg bg-transparent border-2 border-[#C5C5D2] text-while  }'
                      />

                   <div>
                    <Button className='bg-[#F95C19] p-[12px] 
                    rounded-lg font-Oxanium font-bold text-[20px] mt-[10px]'>
                        Subscribe
                      </Button>
                   </div>
                </div>
            </div>
          </Flex>
        </div>
    </section>
  )
}

export default Update