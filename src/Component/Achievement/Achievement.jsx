import React from 'react'
import Flex from '../commonComponent/Flex'
import Awards from '../../assets/Awards.png'
import stateCover from '../../assets/stateCover.png'
import client from '../../assets/client.png'
import delivered from '../../assets/delivered.png'
import BusinessBag from '../../assets/BusinessBag.png'

  
const Achievement = () => {
    return (
    <section className='bg-gradient-to-r from-[#fff7e7] to-[#fff1dc] py-[100px]'>
      <div className='container w-[1320px]'>
        <Flex className='justify-between gap-[50px]'>
          <div className='flex flex-col justify-center items-center'>
            <picture>
              <img src={Awards} alt={Awards} className='mb-[10px]'  />
            </picture>
            <span className='text-[39px]  font-extrabold text-[#F95C19] '>
              26+
            </span>
            <p className='text-[20px] font-Raleway mt-[6px] text-[#464558]'>
              Awards  won
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <picture>
              <img src={stateCover} alt={stateCover} className='mb-[19px]' />
            </picture>
            <span className='text-[39px]  text-[#F95C19] font-extrabold '>
              65+
            </span>
            <p className='text-[20px] font-Raleway mt-[6px] text-[#464558]'>
              States covered
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <picture>
              <img src={client} alt={client} className='mb-[19px]' />
            </picture>
            <span className='text-[39px]   text-[#F95C19] font-extrabold '>
              689K+
            </span>
            <p className='text-[20px] font-Raleway mt-[6px] text-[#464558]' >
              Happy clients
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <picture>
              <img src={delivered} alt={delivered} className='mb-[19px]' />
            </picture>
            <span className='text-[39px] text-[#F95C19] font-extrabold '>
              130M+
            </span>
            <p className='text-[20px] font-Raleway mt-[6px] text-[#464558]'>
              Goods delivered
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <picture>
              <img src={BusinessBag} alt={BusinessBag} className='mb-[19px]' />
            </picture>
            <span className='text-[39px]   text-[#F95C19] font-extrabold '>
              130M+
            </span>
            <p className='text-[20px] font-Raleway mt-[6px] text-[#464558]'>
              Business hours
            </p>
          </div>
        </Flex>
      </div>
    </section>
  )
}

export default Achievement