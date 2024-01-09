import React from 'react'
import WinterDiscount_Image from './WinterDiscount_Image'
import WinterDiscount_Text from './WinterDiscount_Text'

const WinterDiscount = () => {
  return (
    <div>

       <div className=' flex flex-wrap justify-center lg:pl-[5%] pr-[5%]  md:pl-[4%] pr-[4%] items-center  '>
       <div className='basis-3/5 '><WinterDiscount_Image/></div>
        <div className='basis-2/5 '><WinterDiscount_Text /></div>
       </div>




    </div>
  )
}

export default WinterDiscount