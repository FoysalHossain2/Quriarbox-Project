import React from 'react'
import Flex from '../commonComponent/Flex'
import Avatar from "../../assets/Avatar.png"
import './Testimonial.css'
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className='bg-gradient-to-r from-[#fff7e7] to-[#fff1dc]  py-[100px]'>
        <div className="container  w-[1320px]">
        
            <div className=''>
                    <h2 className='font-Oxanium font-bold text-[31.25px] text-[#F95C19] text-center  before'>
                        TESTIMONIAL
                    </h2>
                    <p className='font-Raleway font-extrabold text-[39px] text-center'>
                        Our Awesome Clients
                    </p>
                </div>

            <div className='flex justify-center items-center mt-[70px]'>
                <div className='w-[872px] h-[304px] bg-white '>
                    <h4 className='font-Raleway text-[25px] font-bold text-[#F95C19] mt-[28px] ml-[26px]'>
                        Fantastic service!
                    </h4>

                    <p className='font-Raleway font-normal leading-[23.2px] text-[16px] mt-2 ml-[26px] mr-[25px]'> 
                        I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.

                    </p>


                    <Flex className='items-center'>
                        <div className='flex gap-1  ml-[26px] mt-[13px] text-[#F95C19]'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <div className='rounded-full ml-[490px] mt-7 flex gap-4'>
                            <div>
                                <h4 className='text-[16px] font-Raleway font-bold text-right text-[#222132]'>
                                    Yves Tanguy
                                </h4>
                                <p  className='text-[16px] font-Raleway font-normal text-[#464558]'>
                                    Chief Executive, DLF
                                </p>
                            </div>
                            <img src={Avatar} alt={Avatar} className='rounded-full' />
                        </div>
                    </Flex>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial