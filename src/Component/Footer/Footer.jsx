import React from 'react'
import Logo from '../../assets/Logo.png';
import Flex from '../commonComponent/Flex';

const Footer = () => {
  return (
    <section className='bg-[#2F2E41] py-[50px]'>
        <div className="container w-[1320px]">
           
           <Flex className='justify-between'>
           <div>
                <picture>
                    <img src={Logo} alt={Logo} />
                </picture>
                <p className='font-Raleway font-semibold text-[16px] text-[#9291A1] mt-4'>
                    The most trusted Courier <span className='block'>company in your area.</span>
                </p>
            </div>
             <div className='flex gap-[150px]'>
                <div>
                    <h6 className='font-Oxanium mb-[23px]  font-bold text-[20px] text-white'>
                        Other links
                    </h6>
                    <ul className='font-Raleway text-[16px] text-[#9291A1] leading-[30px]'>
                       <li><a href="#">Blog</a></li>
                       <li><a href="#">Movers website</a></li>
                       <li><a href="#">Traffic Update</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-Oxanium mb-[23px] font-bold text-[20px] text-white'>
                        Services
                    </h6>
                    <ul className='font-Raleway text-[16px] text-[#9291A1] leading-[30px]'>
                        <li><a href="#">Corporate goods</a></li>
                        <li><a href="#">Artworks</a></li>
                        <li><a href="#">Documents</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-Oxanium mb-[23px] font-bold text-[20px] text-white'>
                        Customer Care
                    </h6>
                    <ul className='font-Raleway text-[16px] text-[#9291A1] leading-[30px]'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Get Update</a></li>
                    </ul>
                </div>
             </div>
           </Flex>

        </div>
    </section>
  )
}

export default Footer