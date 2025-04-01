import React from "react";
import AddToCart from "../components/addToCart/AddToCart";  // Importing the component to display cart items
import CartEmpty from "../components/addToCart/CartEmpty";  // Importing the component to display when the cart is empty
import { useSelector } from "react-redux";  // Importing useSelector to access the state from Redux

const Bag = () => {
  // Getting the cart data from the Redux store
  let cart = useSelector(state => state.product.cart);

  return (
    <section className="mt-[100px] w-[980px] w-full flex justify-center border-gray-200 bag-section">
      {/* Checking if the cart is empty */}
      {cart.length === 0 ? <CartEmpty /> : <AddToCart />} 
      {/* If the cart is empty, display the CartEmpty component, otherwise display the AddToCart component */}
    </section>
  );
};

export default Bag;
