import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GrCart } from "react-icons/gr";

const WishlistEmpty = () => {
  const navigate = useNavigate()
  return (
    <section className='empty-wishlist w-full  flex flex-col items-center relative '>
        <div className='w-[450px] empty-wishlist-grid'>
        <div className='flex flex-col items-center py-5 px-8 gap-2'>
            <h1 className='empty-whishlist-heading font-bold text-2xl uppercase text-gray-600'>Your Wishlist is Empty</h1>
            <p className='desc px-4 w-[400px] text-[18px] text-gray-600 text-center'>Add items that you like to your wichlist. Review them anytime and easily move them to the bag.</p>
            <div className='w-full cart-icon items-center justify-center flex text-gray-300  text-[100px] px-2 py-4 '>
            <GrCart />
            </div>

            <div className='w-full flex items-center justify-center'>
              <button 
              onClick={()=> navigate('/')}   
              className=' cursor-pointer border-1 border-blue-600 px-4 py-2 font-bold text-blue-600 w-3/5 rounded text-[18px] uppercase'>Continue Shopping</button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default WishlistEmpty
