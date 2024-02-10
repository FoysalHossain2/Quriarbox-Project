import React from 'react'
import Flex from '../commonComponent/Flex'

const FooterCopy = () => {
  return (
    <section className='bg-[#222132] py-[30px]'>
        <div className="container  w-[1320px]">
            <Flex className='justify-between'>
                <div>
                    <p className='font-Raleway font-medium text-[13px] text-[#DBDBE9]'>
                        All rights Reserved © Your Company, 2021
                    </p>
                </div>
                <div>
                   <h6 className='font-Raleway text-[13px] font-medium text-[#DBDBE9]'>
                       Made with heart by <span className='font-extrabold text-[#F95C19]'>ThemeWagon</span>
                   </h6>
                </div>
            </Flex>
        </div>
    </section>
  )
}

export default FooterCopy