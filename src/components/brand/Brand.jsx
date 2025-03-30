import React from 'react'

const Brand = () => {
  return (
    <>
      <div className=' my-5 p-8'>
        <h4 className='px-[50px]  text-[38px] font-[650] text-gray-700  uppercase tracking-widest'>Favourite Brands</h4>
        </div>

        <div className=' py-7  h-[220px] flex  items-center justify-center'>
        {/* Brands */}
        <div className='flex '> 
        {
            Favourite_Brands.map(({id, image})=>{
                return (
                    <div className='cursor-pointer' key={id}>
                        <img src={image} alt="" className='w-[210px]'/>
                    </div>
                )
            })
        }
        </div>
        </div>
    </>
  )
}

export default Brand
