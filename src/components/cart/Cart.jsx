import React, { useState } from "react";
import { TbArrowBack } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/slice/productSlice";
import { useLocation } from 'react-router-dom';

const Cart = ({ data }) => {
  let dispatch = useDispatch();
  let carts = useSelector((state) => state.product.cart);
  const location = useLocation(); // Getting current route path

  // Function to remove an item from the cart
  let HandleRemoveItem = () => {
    dispatch(setCart(carts.filter((x) => x.id !== data.id))); // Filtering out the removed item
  };

  // Function to handle quantity change
  let handleQty = (event) => {
    let updatedCart = carts.map((item) => {
      if (item.id === data.id) {
        return { ...item, qty: parseInt(event) }; // Updating quantity
      } else {
        return item;
      }
    });
    dispatch(setCart(updatedCart)); // Updating Redux store
  };

  console.log(carts); // Debugging log

  return (
    <>
      <div className="cart-product">
        {/* Product Card Container */}
        <div className="relative product-item-card py-2 w-[600px] h-[180px] flex shadow-[-1px_-0.5px_5px_rgba(0,0,0,0.1)] px-2">
          {/* Product Image */}
          <img src={data.imgURIs[0]} alt="" className="w-[109px] pb-5" />

          {/* Remove Item Button (Hidden if on 'order' page) */}
          <i
            onClick={() => HandleRemoveItem()}
            className={`${
              location.pathname === "/order"
                ? "hidden"
                : "text-[13px] items-center days-left flex gap-2 pt-2"
            }`}
          ></i>

          {/* Product Details */}
          <div className="product-details px-5">
            <div className="product-heading flex flex-col">
              <span className="uppercase text-[14px] font-bold tracking-wide">
                {data.brand}
              </span>
              <span className="text-[14px] tracking-wide">{data.name}</span>
              <span className="text-[13px] text-gray-500">
                Sold by: Kapsons Retail Pvt. Ltd
              </span>
            </div>

            {/* Size and Quantity Selectors (Hidden if on 'order' page) */}
            <div className="product-comfort w-full flex gap-2 text-[13px] pt-2">
              <div
                className={`${
                  location.pathname === "/order"
                    ? "hidden"
                    : "product-size bg-gray-200 py-[2px] px-3 rounded font-bold"
                }`}
              >
                <label>Size:</label>
                <select className="outline-none">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>

              <div
                className={`${
                  location.pathname === "/order"
                    ? "hidden"
                    : "product-qty bg-gray-200 py-[2px] px-3 rounded font-bold"
                }`}
              >
                <label>Qty:</label>
                <select onChange={(e) => handleQty(e.target.value)} className="outline-none">
                  <option>{data.qty}</option>
                  {[...Array(9).keys()].map((num) => (
                    <option key={num + 1}>{num + 1}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Price (Hidden if on 'order' page) */}
            <div
              className={`${
                location.pathname === "/order" ? "hidden" : "product-price pt-5 w-full flex gap-2"
              }`}
            >
              <div className="text-[13px] flex gap-3 items-center">
                <span className="font-bold">{`₹ ${data.price}`}</span>
                <del className="text-[12px] text-gray-500">{`₹ ${data.MRP}`}</del>
                <span className="text-orange-500 text-[13px]">({data.discount}% OFF)</span>
              </div>
            </div>

            {/* Return Policy (Hidden if on 'order' page) */}
            <div
              className={`${
                location.pathname === "/order" ? "hidden" : "text-[13px] items-center days-left flex gap-2 pt-2"
              }`}
            >
              <span className="text-[12px] flex items-center border-[1px] px-[1px] py-[1px] rounded-full">
                <TbArrowBack />
              </span>
              <h1 className="tracking-wide">
                <b>14 days</b> return available
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
