import React from 'react'
import Flex from '../commonComponent/Flex'
import Button from '../commonComponent/Button'
import bannerImage from "../../assets/bannerImage.png"
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className='bg-gradient-to-r from-[#fff7e7] to-[#fff1dc] pt-[100px] md:pt-[200px] pb-[150px] md:pb-[330px]'>
    <div className="container max-w-[1320px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* Left Side (Text) */}
            <div className='w-full md:w-[40%] text-center md:text-left'>
                <h1 className='text-[36px] md:text-[49px] font-Raleway font-normal leading-[120%]'>
                    A trusted provider of <span className='font-extrabold'>courier services.</span> 
                </h1>
                <p className='font-Raleway text-[18px] md:text-[20px] font-normal leading-[120%] md:pr-[100px] mt-4'>
                    We deliver your products safely to your home in a reasonable time.
                </p>

                <Button className="text-[18px] md:text-[20px] font-Oxanium font-bold bg-btnColor text-white py-3 px-5 mt-10 md:mt-14 rounded-[5px] hover:bg-[#e88257]">
                    <p className='flex items-center justify-center md:justify-start gap-2'>
                        Get started <FaArrowRight />
                    </p>
                </Button>
            </div>

            {/* Right Side (Image) */}
            <div className='w-full md:w-[60%] flex justify-center md:justify-end'>
                <picture>
                    <img src={bannerImage} alt="Banner Image" className="w-[90%] md:w-full max-w-[600px]" />
                </picture>
            </div>

        </div>
    </div>
</section>

  )
}

export default Banner