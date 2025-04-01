import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../components/cart/Cart';  // Import Cart component

const Orders = () => {
  // Fetch orders from the Redux store
  const order = useSelector((state) => state.product.orders);

  return (
    <section className='order-section mt-[129px] px-20px w-full h-[700px]'>
      <div>
        <h1 className='text-center font-semibold py-2'>Confirm Orders</h1>
        
        {/* Map over the orders and render the Cart component */}
        {order.map((data, index) => {
          return <Cart data={data} key={index} />;
        })}
      </div>
    </section>
  );
}

export default Orders;
