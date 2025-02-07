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
            <div className='flex flex-col md:flex-row items-center md:items-start mt-[80px] gap-[22px] px-4'>
                {/* Google Map Section */}
                <div className='w-full md:w-[60%]'>
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29189.779663292662!2d89.9646149860526!3d23.863987294976162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755f603f1698647%3A0x894c2f1900643eb6!2sManikganj!5e0!3m2!1sen!2sbd!4v1700149578447!5m2!1sen!2sbd"
                    width="100%" 
                    height="428" 
                    style={{ border: "0" }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                {/* Contact Info Section */}
                <div className='max-w-[536px] w-full bg-white p-6 rounded-lg shadow-lg'>
                    <h6 className='font-Raleway font-bold text-[20px] text-[#464558]'>
                    Contact with us
                    </h6>

                    <div className='mt-6 space-y-4'>
                    <div className='flex items-center gap-4'>
                        <SlLocationPin className='text-[#FFAF0F] text-[24px]' /> 
                        <p className='font-Raleway font-normal text-[16px] text-[#5C5B6C]'>
                        2277 Lorem Ave, San Diego, CA 22553
                        </p>
                    </div>

                    <div className='flex items-start gap-4'>
                        <IoTimeOutline className='text-[#FFAF0F] text-[24px]' /> 
                        <p className='font-Raleway font-normal text-[16px] text-[#5C5B6C]'> 
                        Monday - Friday: 10 am - 10pm 
                        <span className='block'>Sunday: 11 am - 9pm</span>
                        </p>
                    </div>

                    <div className='flex items-center gap-4'>
                        <img src={MessageBox} alt="Message Icon" className='w-6 h-6' />
                        <p className='font-Raleway font-normal text-[16px] text-[#5C5B6C]'>
                        info@quriarbox.com
                        </p>
                    </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className='flex gap-6 mt-6 text-[#595857] text-[28px] cursor-pointer'>
                    <AiFillFacebook className='hover:text-[#F95C19] hover:translate-y-[-5px] transition-all' />
                    <RiInstagramFill className='hover:text-[#F95C19] hover:translate-y-[-5px] transition-all' />
                    <FaTwitterSquare className='hover:text-[#F95C19] hover:translate-y-[-5px] transition-all' />
                    </div>
                </div>
            </div>

            <div className='text-center mt-[30px] mb-[130px]'>
                <Button className='bg-[#F95C19] py-4 px-[150px] rounded-lg text-[20px] font-Oxanium font-bold text-white'>
                    <div className='flex gap-2'>
                        <MdCall className='text-[30px] text-white' /> Call us to delivery  123-456789
                    </div>
                </Button>
            </div>
        </div>
    </section>
  )
}

export default FindUs