import React from 'react'
import { useLocation } from 'react-router-dom';
import {setCart, setProducts} from '../../redux/slice/productSlice'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Card = ({data}) => {
  

  const dispatch = useDispatch();
  const carts = useSelector(state => state.product.cart)
  const products = useSelector(state => state.product.products)
  const authenticated = useSelector(state => state.auth.isAuthenticated)
  
  const handleCart = ()=>{

    if(!authenticated){
      toast.error("Not authorized user: Please Login");
      return;
    }


      if(carts.length === 0){
        dispatch(setCart([...carts, data]))
        toast.success("Added to cart")
        return;
      }

      let isExists = carts.filter((item) => item.id === data.id);

      if(isExists.length === 0) {
        dispatch(setCart([...carts, data]));
        toast.success("Added to cart")
      }else{
        let values = carts.map((item)=> {
          if(item.id === data.id){
            return {...item, "qty": item.qty+1}
          }else{
            return item;
          }
        })

        dispatch(setCart(values))
      }  
  }

  const handleWishlist = () =>{

    if(!authenticated){
      toast.error("Not authorized user: Please Login");
      return;
    }
    
    let values = products.map((item)=>{
        if(item.id === data.id){
          return {...item, "wishList": !item.wishList}
        }else{
          return item;
        }
      })
    

    dispatch(setProducts(values))
  }


  const location = useLocation();

  return (
    <section className='relative cursor-pointer card w-[210px] h-[390px] hover:shadow-[-1px_-2px_15px_rgba(0,0,0,0.2)] rounded pv-2 group'>
      <div className='relative product-img w-full h-[280px]'>
      {/* product image */}
        <div className='w-full h-full'>
          <img src={data.imgURIs[0]}  className='w-full h-full object-cover'/>
        </div>
    {/* Rating */}
        <div className={`rating ${location.pathname === '/wishlist' ? 'hidden' : ''} absolute opacity-100 group-hover:opacity-0 transition-opacity duration-100  bottom-3 left-2 flex gap-1 items-center bg-white/90 px-1 py-1 rounded text-[12px] font-bold`}>
          <span>{data.rating}</span>
          <i className="text-green-700 fa-solid fa-star"></i>
          <span>{data.reviews}</span>
        </div>
      </div>
    {/* Card Details */}
      <div className='card-details bg-white flex flex-col items-start px-4 py-2'>
        <h1 className={`brand uppercase text-[16px] font-bold ${location.pathname === '/wishlist' ? 'hidden' : " " } `}>{data.brand}</h1>
        <h1 className='card-title text-[14px]'>{data.name.length > 22 ? data.name.substring(0, 22) + "..." : data.name}</h1>

        <div className='card-prize  flex gap-2'>
          <span className='card-price text-[14px] font-bold'>₹{data.price}</span>
          <del className='card-MRP text-[12px] text-gray-500'>₹{ data.MRP}</del>
          <span className='card-discount text-[13px] text-orange-500'>({data.discount}%)</span>
        </div>

        <span className={`card-qtys ${location.pathname === '/wishlist' ? 'hidden' : " " } text-orange-500 text-[13px] font-bold`}>Only {data.qty} left !</span>
      </div>

      <div className={`${location.pathname === '/wishlist' ? 'hidden':'flex'}`}>
        {/* Add to Cart Button - Initially Hidden */}
      <div className='card-addCart absolute bottom-15 bg-white w-full h-[60px] flex py-5 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <button 
        onClick={()=> handleCart()}
        className='w-[150px] rounded h-[30px] border-2 border-[#ff3e6c] hover:bg-[#ff3e6c] hover:text-white text-[#ff3e6c] font-bold'>
          Add to Cart
        </button>
      </div>

      {/* Heart Icon - Initially Hidden */}
      <i
     onClick={()=>{ handleWishlist() }}
      className={`${data.wishList === true ? 'fa-solid fa-heart text-[#ff3e6c]' : 'fa-regular fa-heart text-[gray]  opacity-0 group-hover:opacity-100 transition-opacity duration-300'}  absolute top-5 right-5 text-[20px]`}></i>
      </div>

      
{/* WishList Card */}
<div className={`${location.pathname !== '/wishlist'? 'hidden' : 'flex'}`}>
<div className='absolute border-[1px] border-gray-200 bottom-0 bg-white w-full h-[40px] flex py-5 justify-center card-wishlist items-center '>
        <button
        onClick={()=> (
          handleCart()
          )} 
        className='w-[150px] rounded h-[30px]  text-[#ff3e6c]  font-bold'>
          Move to Bag
        </button>
      </div>

      {/* Heart Icon - Initially Hidden */}
      <i
      onClick={()=> handleWishlist()} 
      className={`fa-solid card-close fa-xmark absolute top-2 text-[12px] rounded-full right-2`}></i>
</div>

    </section>
  )
}

export default Card;
