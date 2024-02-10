import React from 'react'
import Flex from '../commonComponent/Flex'
import Button from '../commonComponent/Button'
import { SlLocationPin } from "react-icons/sl";
import { IoTimeOutline } from "react-icons/io5";
import { AiFillFacebook } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import MessageBox from '../../assets/MessageBox.png';
import { MdCall } from "react-icons/md";

const FindUs = () => {
  return (
    <section className='bg-gradient-to-r from-[#fff7e7] to-[#fff1dc]'>
        <div className="container w-[1320px] py-[50px]">
            <div className='text-center'>
                <h2 className='font-Oxanium font-bold text-[31.25px] text-[#F95C19]'>  
                    FIND US
                </h2>
                <p className='font-Raleway font-extrabold text-[39px] text-[#222132] leading-[42.9px]'>
                    Access us easily
                </p>
            </div>
            {/* map adding with  iframe  */}
             <Flex className='  mt-[80px] gap-[22px]'>
                <div className=' w-1/[60%]'>              
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29189.779663292662!2d89.9646149860526!3d23.863987294976162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
                    1!3m3!1m2!1s0x3755f603f1698647%3A0x894c2f1900643eb6!2sManikganj!5e0!3m2!1sen!2sbd!4v1700149578447!5m2!1sen!2sbd"
                        max-width="100%" 
                        width="761" 
                        height="428" 
                        style={{border: "0" }}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div className='max-w-[536px] w-[536px] h-[428px] bg-white '>
                    <h6 className='font-Raleway font-bold text-[20px] text-[#464558] mt-[80px] ml-[80px]'>
                        Contact with us
                    </h6>
                    <div className='ml-[80px] mt-[40px]'>
                        <Flex className=' gap-[15px]'>
                            <SlLocationPin className=' text-[#FFAF0F] text-[24px]' /> 
                            <p className='font-Raleway font-normal text-[16px] text-[#5C5B6C]'>
                                2277 Lorem Ave, San Diego, CA 22553
                            </p>
                        </Flex>

                        <Flex className='gap-[15px]'>
                            <IoTimeOutline className='text-[#FFAF0F] text-[24px]'  /> 
                             <p className='font-Raleway font-normal text-[16px] text-[#5C5B6C] mt-3'> 
                                Monday - Friday: 10 am - 10pm <span className='block'>Sunday: 11 am - 9pm</span>
                            </p>
                        </Flex>

                        <Flex className='gap-[15px]'>
                            <img src={MessageBox} alt="" className='mt-2' />
                             <p className='font-Raleway font-normal text-[16px] text-[#5C5B6C] mt-3'>
                               info@quriarbox.com
                             </p>
                        </Flex>

                          <Flex className='gap-6 mt-[56px] text-[#595857] text-[28px] cursor-pointer'>
                            <AiFillFacebook className='hover:text-[#F95C19] hover:translate-y-[-5px] rounded-xl transition-all' />
                            <RiInstagramFill className='hover:text-[#F95C19] hover:translate-y-[-5px] transition-all' />
                            <FaTwitterSquare className='hover:text-[#F95C19] hover:translate-y-[-5px] transition-all' />
                          </Flex>

                    </div>
                </div>  
             </Flex>
                <div className='text-center mt-[30px] mb-[130px]'>
                <Button className='bg-[#F95C19] py-4 px-[150px] rounded-lg text-[20px] font-Oxanium font-bold text-white'>
                    <Flex className='gap-2'>
                    <MdCall className='text-[30px] text-white' /> Call us to delivery  123-456789
                    </Flex>
                </Button>
                </div>
        </div>
    </section>
  )
}

export default FindUs