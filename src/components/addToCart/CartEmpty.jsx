import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartEmpty = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full py-5 relative top-[101px] flex items-center justify-center'>
      <div className='w-[320px]  flex flex-col  items-center'>
      <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="" className='w-[152px] h-[195px] pb-5'/> 

      <div className='w-full text-center'>
        <h1 className='title font-bold text-[20px] text-gray-700'>Hey, it feels so light !</h1>
        <p className='description text-[14px] text-gray-600'>There is nothing in your bag, Let's add some items.</p>
      </div>

      <div className='w-full flex justify-center py-3 mt-3 '>
        <button 
        className='border-[1.5px] py-2 px-4 border-[#ff527b] text-[#ff527b] font-bold uppercase cursor-pointer rounded'
        onClick={()=> navigate('/wishlist')}>Add items from wishlist</button>
      </div>
      </div>
    </div>
  )
}

export default CartEmpty
