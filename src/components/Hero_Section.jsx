import React from 'react'
import Button from './button'
import ThirtyOff from './ThirtyOff'
import Chair_img from './Chair_img'

function Hero_Section() {
  return (
    <div>
        
    <div className='flex flex-wrap justify-center gap-4 items-center'>
      <div> 
        <Chair_img/>
      </div>
    
      <div className=''>
        <div><ThirtyOff/></div>
        <div><Button label="Shop Now"/></div>
      </div>
    
    </div>
    
    
    
    
    </div>

    
  )
}

export default Hero_Section