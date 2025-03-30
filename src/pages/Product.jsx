import React, { useMemo, useState } from "react";
import Filter from "../components/filter/Filter";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Card from "../components/card/Card";
import { useDispatch, useSelector } from "react-redux";


const Product = ({ searchQuery }) => {
  
  const products = useSelector((state) => state.product.products);

  const [price, setPrice] = useState("");

  const filteredProducts = useMemo(() => {
    if (searchQuery !== "" || price !== "") {
      let output = products.filter((item) => {
        let name = false;
        let brand = false;
        name = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        brand = item.brand.toLowerCase().includes(searchQuery.toLowerCase());
        return name || brand;
      });

      if(price === 'HightoLow'){
        output = output.sort((a,b)=> b.price-a.price)
      }else{
        output = output.sort((a,b)=> a.price-b.price)
      }

      return output;
    } else {
      return products;
    }
  }, [searchQuery, price, products]);

  return (
    <div className="navbar-breadcum mt-[90px] mx-[150px]">
      <Breadcrumb />
      <Filter
        price={price}
        setPrice={setPrice}
      />
      <div className="w-full  h-full flex">
        <div className="w-full product-body px-10 py-10 flex flex-wrap gap-5 justify-between">
          {filteredProducts.map((data, index) => {
            return (<Card data={data} key={index} />);
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
