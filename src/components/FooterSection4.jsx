import React from 'react'
import Input from './Input'

const FooterSection4 = () => {
  return (
    <div>
        <div>
          <h1 className='p-3'><a href="">NEWSLETTER</a></h1>
        </div>
        {/* <div>
          <h1><a href=""></a></h1>
        </div> */}
        <div>
          <p className='p-3'>Subscribe to get all new updates</p>
          <Input className="bottom-6" type="Text" />
        </div>
    </div>
  )
}

export default FooterSection4