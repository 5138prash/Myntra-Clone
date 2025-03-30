import React from 'react'
import Card from '../card/Card';
import WishlistEmpty from './WishlistEmpty';
import { useSelector } from 'react-redux';

const Wishlist = () => {

        const product = useSelector(state => state.product.products);
        const length = product.filter(item => item.wishList ).length

  return (
    <section className='wishlist-section pb-[20px] mt-[100px] mx-[150px]'>
      <h1 className='items-number p-4 uppercase '>
        My Wishlist <span className='text-[#ff3e6c] font-bold'>{length} items</span>
      </h1>

      <div className='flex flex-wrap  justify-center gap-10'>
       {
        product.filter(item => item.wishList ).map((data, index)=>{
          return (
            <Card data={data} key={index}/>
          )
        })
       }
      </div>
      
     {
      product.filter(item => item.wishList ).length === 0 ? <WishlistEmpty/> : ""
     }
    </section>
  )
}

export default Wishlist
