import React from 'react'
import Logo from "../../assets/Logo.png"
import { IoSearchOutline } from "react-icons/io5";
import Flex from '../commonComponent/Flex';
import Button from '../commonComponent/Button';
import DrawerComponent  from '../commonComponent/DrawerComponent';

const Menu = () => {
  return (
    <nav className="bg-gradient-to-l to-navbarbgto from-navbarbgfrom via-navbarbgvia py-[30px] shadow-navShadow">
      <div className="container w-[1320px]">
        <div className='xl:block lg:block hidden'>
          <div className='flex justify-between items-center'>
              <div>
                <picture>
                  <img src={Logo} alt={Logo} />
                </picture>
              </div>
              <div>
              <Flex className='items-center gap-[25px]'>

                  <li><a href="#" className='font-Raleway text-[800] font-extrabold text-btnColor text-[16px] leading-[18.75px]'>Home</a></li>
                  <li><a href="#" className='font-Raleway text-[700] font-extrabold text-[#817382] text-[16px] leading-[18.75px]'>Our services</a></li>
                  <li><a href="#" className='font-Raleway text-[700] font-extrabold text-[#817382] text-[16px] leading-[18.75px]'>About Us</a></li>
                  <li><a href="#" className='font-Raleway text-[700] font-extrabold text-[#817382] text-[16px] leading-[18.75px]'>What's new?</a></li>

                <Button className="ml-[45px]  text-[#FFAF0F] py-4 px-4 rounded-[5px] bg-orange-100"> 
                  <IoSearchOutline className='text-[25px] ' />
                </Button>

                <Button className="font-Oxanium font-bold  text-btnColor text-[20px] bg-[#ffe4d9] py-[12px] px-[20px] rounded-[5px] ml-[-15px] 
                  hover:bg-[#e9ccc2]">
                  Contact us
                  </Button>
                </Flex>
              </div>
          </div>
        </div>


       {/* responsive part */}
       <div className='lg:hidden block'>
          <div className='flex justify-between items-center'>
              <div>
                <picture>
                  <img src={Logo} alt={Logo} />
                </picture>
              </div>
              {/* <div>
              <Flex className='items-center gap-[25px]'>

                  <li><a href="#" className='font-Raleway text-[800] font-extrabold text-btnColor text-[16px] leading-[18.75px]'>Home</a></li>
                  <li><a href="#" className='font-Raleway text-[700] font-extrabold text-[#817382] text-[16px] leading-[18.75px]'>Our services</a></li>
                  <li><a href="#" className='font-Raleway text-[700] font-extrabold text-[#817382] text-[16px] leading-[18.75px]'>About Us</a></li>
                  <li><a href="#" className='font-Raleway text-[700] font-extrabold text-[#817382] text-[16px] leading-[18.75px]'>What's new?</a></li>

                <Button className="ml-[45px]  text-[#FFAF0F] py-4 px-4 rounded-[5px] bg-orange-100"> 
                  <IoSearchOutline className='text-[25px] ' />
                </Button>

                <Button className="font-Oxanium font-bold  text-btnColor text-[20px] bg-[#ffe4d9] py-[12px] px-[20px] rounded-[5px] ml-[-15px] 
                  hover:bg-[#e9ccc2]">
                  Contact us
                  </Button>
                </Flex>
              </div> */}
              <DrawerComponent />
          </div>
       </div>
       {/* responsive part */}

      </div>
    </nav>

  )
}

export default Menu;