import React from 'react'
import Illustration from '../../assets/Illustration.png'
import Flex from '../commonComponent/Flex'
import Button from '../commonComponent/Button'
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <section className='bg-gradient-to-r from-[#fff7e7] to-[#fff1dc] py-[150px]'>
        <div className="container w-[1320px]">

            <Flex className='items-center justify-center'>               
                <div className='max-w-[872px] flex justify-center items-center'>
                    <div>
                        <picture>
                            <img src={Illustration} alt={Illustration} />
                        </picture>
                        <h5 className='text-[24px] font-bold font-Oxanium text-[#F95C19] mt-[13px]'>
                            REQUEST A CALLBACK
                        </h5>
                        <h3 className='font-Raleway text-[39px] text-[#222132] font-extrabold leading-[110%] mt-[20px]'>
                            We will contact in the shortest time.
                        </h3>
                        <p className='text-[#9291A1] font-semibold font-Raleway text-[25px] mt-4'>
                            Monday to Friday, 9am-5pm.
                        </p>
                    </div>

                    <div>
                        <div >
                            <input
                             type="text"
                              id='name' 
                              placeholder='Name' 
                              className='max-w-[423px] w-[100%] py-[16px] 
                              border-[#C5C5D2] border-2 bg-transparent 
                              rounded-[8px] px-3'
                            />
                        </div>

                        <div>
                          <input
                            type="email" 
                            id='email' 
                            placeholder='Email' 
                            className='max-w-[423px] w-[423px] py-[16px]
                             border-[#C5C5D2] border-2 bg-transparent
                              rounded-[8px] mt-[13px] px-3'
                           />
                        </div>

                        <div>
                          <textarea name="" id="" cols="50" rows="5" placeholder='Message'
                           className='w-[423px] py-[30px] bg-transparent 
                           border-2 mt-[13px] border-[#C5C5D2] rounded-[8px] px-3'>
                        </textarea>  
                        </div>

                        <Button className='max-w-[423px] w-[423px]  bg-[#F95C19]
                        py-[12px] mt-[37px] font-bold text-[20px]
                          text-white font-Oxanium rounded-[8px]'>
                        <Flex className='items-center justify-center gap-1'>
                            Send Message <IoIosSend className='text-white text-[25px] font-black'/>
                        </Flex>
                        </Button>
                    </div>
                </div>
            </Flex>

           


        </div>
    </section>
  )
}

export default Contact