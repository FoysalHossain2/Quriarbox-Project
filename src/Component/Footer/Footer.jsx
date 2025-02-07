import React from 'react'
import Logo from '../../assets/Logo.png';
import Flex from '../commonComponent/Flex';

const Footer = () => {
  return (
    <section className='bg-[#2F2E41] py-[50px]'>
        <div className="container w-[1320px]">
           
        <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 px-6 py-10 '>
  
  {/* Logo & Description */}
  <div className='text-center lg:text-left'>
    <picture>
      <img src={Logo} alt="Company Logo" className='mx-auto lg:mx-0' />
    </picture>
    <p className='font-Raleway font-semibold text-[16px] text-[#9291A1] mt-4'>
      The most trusted Courier 
      <span className='block'>company in your area.</span>
    </p>
  </div>

  {/* Footer Links */}
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center lg:text-left'>
    {/* Other Links */}
    <div>
      <h6 className='font-Oxanium mb-4 font-bold text-[20px] text-white'>
        Other links
      </h6>
      <ul className='font-Raleway text-[16px] text-[#9291A1] leading-[30px]'>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Movers website</a></li>
        <li><a href="#">Traffic Update</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h6 className='font-Oxanium mb-4 font-bold text-[20px] text-white'>
        Services
      </h6>
      <ul className='font-Raleway text-[16px] text-[#9291A1] leading-[30px]'>
        <li><a href="#">Corporate goods</a></li>
        <li><a href="#">Artworks</a></li>
        <li><a href="#">Documents</a></li>
      </ul>
    </div>

    {/* Customer Care */}
    <div>
      <h6 className='font-Oxanium mb-4 font-bold text-[20px] text-white'>
        Customer Care
      </h6>
      <ul className='font-Raleway text-[16px] text-[#9291A1] leading-[30px]'>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Get Update</a></li>
      </ul>
    </div>
  </div>

</div>


        </div>
    </section>
  )
}

export default Footer