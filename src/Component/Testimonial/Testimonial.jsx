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
                    <p className='font-Raleway font-extrabold lg:text-[39px] text-[20px] text-center'>
                        Our Awesome Clients
                    </p>
            </div>

            <div className='flex justify-center items-center mt-[70px]'>
                <div className='w-full lg:max-w-[872px] max-w-[300px] mx-auto h-auto bg-white p-6 lg:p-8 rounded-lg shadow-md'>
                    <h4 className='font-Raleway text-[22px] md:text-[25px] font-bold text-[#F95C19] mt-4'>
                    Fantastic service!
                    </h4>

                    <p className='font-Raleway font-normal leading-[1.6] text-[14px] md:text-[16px] mt-2'>
                        I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.
                    </p>

                    <div className='flex flex-col md:flex-row justify-between items-center mt-4'>
                        {/* Star Ratings */}
                        <div className='flex gap-1 text-[#F95C19]'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        </div>

                        {/* User Info */}
                        <div className='flex items-center gap-4 mt-4 md:mt-0'>
                        <div>
                            <h4 className='text-[14px] md:text-[16px] font-Raleway font-bold text-right text-[#222132]'>
                            Yves Tanguy
                            </h4>
                            <p className='text-[14px] md:text-[16px] font-Raleway font-normal text-[#464558]'>
                            Chief Executive, DLF
                            </p>
                        </div>
                        <img src={Avatar} alt="User Avatar" className='w-12 h-12 md:w-16 md:h-16 rounded-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial