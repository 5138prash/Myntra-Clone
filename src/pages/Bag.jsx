import React from "react";

import AddToCart from "../components/addToCart/AddToCart";
import CartEmpty from "../components/addToCart/CartEmpty";
import { useSelector } from "react-redux";
const Bag = () => {
  let cart = useSelector(state => state.product.cart)

  return (
    <section className="mt-[100px] w-[980px] w-full flex justify-center border-gray-200 bag-section">
     
     
    {cart.length === 0 ? <CartEmpty/> : <AddToCart/>}
      
    </section>
  );
};

export default Bag;
