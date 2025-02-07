import React from 'react'
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
          <div>
            <h2 className='font-Oxanium text-[31.25px] font-bold text-btnColor text-center mb-[11px]'>Services</h2>
            <p className='font-Raleway text-[39.06px] font-extrabold text-black text-center mb-[76px]'>Our services for you</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Card className='max-w-[424px] mx-auto bg-white rounded-[16px] shadow-lg transition-all duration-300'
              card__title='Business Services'
              card__desc='We give you complete reliable delivery for your company. We will take full responsibility of the deliveries.'
            >
              <div className='text-center'>
                <Button className='border-2 border-[#F95C19] px-24 py-2 text-[#F95C19] 
                  font-Oxanium text-lg mt-6 hover:bg-[#F95C19] hover:text-white 
                  mb-5 rounded-md font-bold transition-all'
                >
                  Learn more
                </Button>
              </div>
            </Card>

            <Card className='max-w-[424px] mx-auto bg-white rounded-[16px] shadow-lg transition-all duration-300'
              card__title='Statewide Services'
              card__desc='Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.'
              card__list='Personal items'
              card__list2='Parcels'
              card__list3='Documents'
            >
              <div className='text-center'>
                <Button className='border-2 border-[#F95C19] px-24 py-2 text-[#F95C19] 
                  font-Oxanium text-lg mt-6 hover:bg-[#F95C19] hover:text-white 
                  mb-5 rounded-md font-bold transition-all'
                >
                  Learn more
                </Button>
              </div>
            </Card>

            <Card className='max-w-[424px] mx-auto bg-white rounded-[16px] shadow-lg transition-all duration-300'
              card__title='Personal Services'
              card__desc='You can trust us to safely deliver your most sensitive documents to the specific area in a short time.'
              card__list='Gifts'
              card__list2='Package'
              card__list3='Documents'
            >
              <div className='text-center'>
                <Button className='border-2 border-[#F95C19] px-24 py-2 text-[#F95C19] 
                  font-Oxanium text-lg mt-6 hover:bg-[#F95C19] hover:text-white 
                  mb-5 rounded-md font-bold transition-all'
                >
                  Learn more
                </Button>
              </div>
            </Card>
          </div>

        </div>
    </section>
  )
}

export default Services