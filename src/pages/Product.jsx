import React, { useMemo, useState } from "react";
import Filter from "../components/filter/Filter";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Card from "../components/card/Card";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ searchQuery }) => {
  const products = useSelector((state) => state.product.products);
  const [price, setPrice] = useState("");

  // Function to filter products based on search query and price
  const filteredProducts = useMemo(() => {
    let output = products.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const brandMatch = item.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return nameMatch || brandMatch;
    });

    // Price sorting logic
    if (price === "HightoLow") {
      output = output.sort((a, b) => b.price - a.price);
    } else if (price === "LowtoHigh") {
      output = output.sort((a, b) => a.price - b.price);
    }

    return output;
  }, [searchQuery, price, products]);

  return (
    <div className="navbar-breadcrumb mt-[90px] mx-[150px]">
      <Breadcrumb />
      <Filter price={price} setPrice={setPrice} />
      <div className="w-full h-full flex">
        <div className="w-full product-body px-10 py-10 flex flex-wrap gap-5 justify-between">
          {filteredProducts.map((data) => (
            <Card data={data} key={data.id || data.index} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
