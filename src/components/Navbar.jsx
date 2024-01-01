import React from 'react'
import Logo from './Logo'
import Nav_Items from './Nav_Items'
import Nav_3rdPart from './Nav_3rdPart'

function Navbar() {
  return (
    <div className='flex flex-wrap justify-evenly m-8 justify-items-center'>
        <div><Logo/></div>
        <div><Nav_Items/></div>
        <div><Nav_3rdPart/></div>



    </div>
  )
}

export default Navbar