import React from 'react'
import Flex from '../commonComponent/Flex'
import Button from '../commonComponent/Button'
import bannerImage from "../../assets/bannerImage.png"
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className='bg-gradient-to-r from-[#fff7e7] to-[#fff1dc] pt-[200px] pb-[330px]'>
        <div className="container w-[1320px]">
            <Flex className={"justify-between"}>
                <div className='w-[40%] '>
                    <h1 className='text-[49px] font-Raleway font-normal leading-[120%]'>A trusted provider of <span className='font-extrabold'>courier services.</span> </h1>
                    <p className='font-Raleway text-[20px] font-normal leading-[120%] pr-[205px] mt-4'>
                        We deliver your products safely to your home in a reasonable time.
                    </p>

                    <Button className="text-[20px] font-Oxanium font-bold bg-btnColor text-white py-3 px-5 mt-14 rounded-[5px] hover:bg-[#e88257]">
                        <p className='flex items-center gap-2'>
                        Get started <FaArrowRight />
                        </p>
                    </Button>
                </div>
                <div className='w-[60%] '>
                    <picture>
                        <img src={bannerImage} alt={bannerImage} />
                    </picture>
                </div>
            </Flex>
        </div>
    </section>
  )
}

export default Banner