import React from 'react'


function Section1BGImage() {
  return (
    <div>
      <div style={{alignContent: "center", margin: "0px 5% 0px 5%"}}>
      <div style={{
        backgroundImage: `url(https://daxone-demo.myshopify.com/cdn/shop/files/banner-bg-1_529befa2-5a3d-40c7-843b-7c525d69192a.jpg?v=1613736189)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        padding: "50px, 0px",
        marginTop: "20px",
        height: 300
        
        }}>

        <div style={{textAlign: 'left', paddingTop: "60px", paddingLeft: "50%"}}>
        <h1 className='text-5xl text-right pr-48 text-[#aa8451] mb-10' >Premium Home <br /> Decorator</h1>
        <p className='text-right pr-48'><a className=' text-[#aa8451] mb-10   ' href=" ">Learn More</a></p>
        </div>
        

    </div>
    </div>
    </div>
  )
}

export default Section1BGImage