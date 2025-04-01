import React from 'react';
import Card from '../card/Card';
import WishlistEmpty from './WishlistEmpty';
import { useSelector } from 'react-redux';

const Wishlist = () => {

  // Fetching products from Redux store
  const product = useSelector(state => state.product.products);
  
  // Filtering items that are added to the wishlist
  const length = product.filter(item => item.wishList).length;

  return (
    <section className='wishlist-section pb-[20px] mt-[100px] mx-[150px]'>
      {/* Wishlist Heading with number of items */}
      <h1 className='items-number p-4 uppercase '>
        My Wishlist <span className='text-[#ff3e6c] font-bold'>{length} items</span>
      </h1>

      <div className='flex flex-wrap justify-center gap-10'>
        {/* Mapping over wishlist items and displaying each item as a Card */}
        {
          product.filter(item => item.wishList).map((data, index) => {
            return (
              <Card data={data} key={index} />
            );
          })
        }
      </div>
      
      {/* If wishlist is empty, display WishlistEmpty component */}
      {
        product.filter(item => item.wishList).length === 0 ? <WishlistEmpty /> : ""
      }
    </section>
  );
}

export default Wishlist;
