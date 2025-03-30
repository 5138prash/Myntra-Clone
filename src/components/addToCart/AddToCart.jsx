import React from "react";
import Cart from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCart, setOrders } from "../../redux/slice/productSlice";
import { toast } from "react-toastify";

const AddToCart = () => {
  const carts = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let getTotalMrp = (list) => {
    return list.reduce((a, b) => a + parseInt(b.MRP) * b.qty, 0);
  };

  let getTotalPrice = (list) => {
    return list.reduce((a, b) => a + parseInt(b.price) * b.qty, 0);
  };

  let getTotalDiscount = (list) => {
    return getTotalMrp(list) - getTotalPrice(list);
  };

  let HandleRemoveItem = () => {
    dispatch(setOrders(carts));
    dispatch(setCart([]));
  };

  return (
    <div className="main-addtocart">
      <div className="flex bag-addtocart gap-6 py-3">
        <div className="addToCart-items  lg:max-h-[700px] overflow-hidden overflow-y-scroll">
          {carts.map((data, index) => (
            <Cart key={index} data={data} />
          ))}
        </div>

        {carts.length > 0 ? (
          <div className="price-list-section w-[300px] h-[700px] shadow-[-1px_0px_5px_rgba(0,0,0,0.05)] text-gray-600 ">
            <div className="price-detail-header px-5 py-2">
              <h1 className="uppercase font-bold text-[12px] text-gray-500">
                Price Details ({carts.length})
              </h1>
            </div>

            <div className="price-detail-amount py-3">
              <div className="w-full flex justify-between px-5 text-[15px] py-[2px]">
                <span className="mrp">Total MRP</span>
                <span className="mrp-amount capitalize">₹{getTotalMrp(carts)}</span>
              </div>
              <div className="w-full flex justify-between px-5 text-[15px] py-[2px]">
                <span className="mrp">Discount on MRP</span>
                <span className="mrp-amount text-[#03a685]">-₹{getTotalDiscount(carts)}</span>
              </div>
              <div className="w-full flex justify-between px-5 text-[15px] py-[2px] ">
                <span className="mrp">Coupon Discount</span>
                <span className="mrp-amount text-[#ff3f6c]">Apply Coupon</span>
              </div>
              <div className="w-full flex justify-between px-5 text-[15px] py-[2px]">
                <span className="mrp">Platform Fee</span>
                <span className="mrp-amount text-[#03a685]">Free</span>
              </div>
              <div className="w-full flex justify-between px-5 text-[15px] py-[2px]">
                <span className="mrp ">Shipping Fee</span>
                <span className="mrp-amount text-[#03a685]">Free</span>
              </div>
            </div>

            <div className="w-full all-credits px-5">
              <div className="border-t-1 border-gray-200">
                <div className="w-full flex justify-between text-[15px] py-2 font-bold">
                  <span>Total Amount</span>
                  <span>₹{getTotalPrice(carts)}</span>
                </div>

                <div className="w-full">
                  <button
                    onClick={() => {
                      HandleRemoveItem();
                      toast.success("Ordered Successfully Added!");
                      navigate("/order");
                    }}
                    className="bg-[#ff3f6c] hover:bg-[#ff3f6c]/90 w-full py-1 text-white uppercase text-center font-bold text-[14px]"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default AddToCart;
