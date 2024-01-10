import React from 'react'

const AllProducts_Cards = (props) => {
    const set_data_handle = () => {
        props.click_handle(props);
    };
    
    return (
    <div>

        <div className='p-4'>
        <div className='ml-[5%] mr-[5%] flex flex-wrap justify-center'>
            <div>
                <img src={props.image} alt="" />
            </div>
            <div className=' mt-3 mb-10'>
                <h1 className="ms-3">{props.title}</h1>
                <h1 className="ms-3">{props.price}</h1>
            </div>
        </div>
        </div>

    
    
</div>
  )
}

export default AllProducts_Cards