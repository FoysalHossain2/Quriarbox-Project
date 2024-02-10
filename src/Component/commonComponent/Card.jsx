import React from 'react'

const Card = ({className , children , card__title ,card__desc , img , card__list , card__list2 , card__list3}) => {
  return (
       
       <div className={className}>
         <div className=' rounded-[16px]'>

          <img src={img} alt={img} className='pl-[172px] mt-[67px]' />
          <h2 className='font-Raleway text-[25px] font font-extrabold text-center mt-[29px]'>
            {card__title? card__title : `Business Services`}
          </h2>

          <p className='font-Raleway text-[16px,#7B7A8B] font-normal ps-[60px]  mt-8 pr-[58px] leading-[140%]'>
             { card__desc ?  card__desc : `We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.`}
           </p>
          
             <div className='list'>
              <ul className='pl-[60px] mt-[41px] ml-[17px]'>
                  <li className='font-Raleway text-[16px,#7B7A8B] font-normal'>
                  {card__list ? card__list : "Corporate goods"} 
                  </li>
                  <li className='font-Raleway text-[16px,#7B7A8B] font-normal mt-3'>
                  {card__list2 ? card__list2 : "Shipment"} 
                  </li>
                  <li className='font-Raleway text-[16px,#7B7A8B] font-normal mt-3'>
                  {card__list3 ? card__list3 : "Accessories"} 
                  </li>
              </ul>
             </div>

          {children}
        </div>
      </div>
 
  )
}

export default Card