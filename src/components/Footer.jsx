import React from 'react'
import FooterSection1 from './FooterSection1'
import FooterSection2 from './FooterSection2'
import FooterSection3 from './FooterSection3'
import FooterSection4 from './FooterSection4'
import FooterSection5 from './FooterSection5'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-between bg-[#ddd9d9] pt-20 pb-20'>
        
        <div><FooterSection1 /> </div>
        <div><FooterSection2 /> </div>
        <div><FooterSection3 /> </div>
        <div><FooterSection4 /> </div>

       
    </div>
        <hr />
        <div><FooterSection5 /> </div>
    </div>
  )
}

export default Footer