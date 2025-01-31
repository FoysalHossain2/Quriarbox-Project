import React from 'react'
import Flex from '../commonComponent/Flex'
import Card from '../commonComponent/Card'
import Button from '../../Component/commonComponent/Button'
// import icon01 from '../../../src/assets/icon01.png'
// import icon2 from '../../../src/assets/icon2.png'
// import icon3 from '../../../src/assets/icon3.png'
import './Services.css'

const Services = () => {
  return (
    <section className='bg-gradient-to-r from-[#fff7e7] to-[#fff1dc] pb-44'>
        <div className="container w-[1320px]">
            <h2 className='font-Oxanium text-[31.25px] font-bold text-btnColor text-center mb-[11px]'>Services</h2>
            <p className='font-Raleway text-[39.06px] font-extrabold text-black text-center mb-[76px]'>Our services for you</p>

            <Flex className='gap-1 justify-between'>
                <Card className='w-[32%] mx-w-[424px] mx-h-[583px]
                 bg-white rounded-[16px] '
                  // img={icon01}
                  card__title='Business Services'
                  card__desc='We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.'
                  >
                   <div className=' text-center'>
                    <Button className=' border-2 border-[#F95C19] 
                    px-[127px] py-[10px] 
                    text-[#F95C19] font-Oxanium 
                    text-[20px] mt-[60px] 
                    hover:bg-[#F95C19] hover:text-white 
                    mb-[50px] rounded-[5px]
                    font-bold transition-all'
                    >

                        Learn more
                      </Button>
                   </div>
                </Card>
                <Card className='w-[32%] mx-w-[ 424px] mx-h-[583px] bg-white rounded-[16px]'
                  // img={icon2}
                  card__title='Statewide Services'
                  card__desc='Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.'
                  card__list='Personal items'
                  card__list2='Percels'
                  card__list3='Documents'

                  >

                   <div className='text-center'>
                     <Button className=' border-2 border-[#F95C19] 
                     px-[127px] py-[10px]
                      hover:bg-[#F95C19] hover:text-white 
                      text-[#F95C19] font-Oxanium 
                      text-[20px]  mt-[60px] 
                      mb-[50px] rounded-[5px]
                      font-bold transition-all'
                      >

                      Learn more
                    </Button>
                  </div> 
                 
                </Card>
                <Card className='w-[32%] mx-w-[ 424px] mx-h-[583px] bg-white rounded-[16px]'
                  // img={icon3}
                  card__title='Personal Services'
                  card__desc='You can trust us to safely deliver your most sensitive documents to the specific area in a short time.'
                  card__list='Gifts'
                  card__list2='Package'
                  card__list3='Documents'
                  >

                   <div className='text-center'>
                    <Button className=' border-2 border-[#F95C19] 
                     px-[127px] py-[10px]
                      hover:bg-[#F95C19] hover:text-white 
                      text-[#F95C19] font-Oxanium 
                      text-[20px]  mt-[60px] 
                      mb-[50px] rounded-[5px]
                      font-bold transition-all '
                      >
                      Learn more
                     </Button>
                  </div> 

                </Card>
            </Flex>
        </div>
    </section>
  )
}

export default Services