import React from "react";

const Filter = ({ price, setPrice}) => {
  
  return (
    <section className="filter-section w-full flex border-b-1 border-gray-300">
      <div className="filter-section-1  py-5 px-8 w-1/6">
        <span className="font-bold uppercase text-[17px] filter-heading">Filters</span>
      </div>

      <div className="filter-section-2  w-5/6 flex justify-between text-gray-600">

        <div className="price-search flex items-center py-3 px-8 text-[14px] gap-5">
          <select
            name="price-search"
            id="price"
            onChange={(elem)=> setPrice(elem.target.value)}
            className="outline-none border-none border-2 hover:bg-gray-50 px-2 py-1 rounded-2xl"
          >
            <option value="Price">Price</option>
            <option value="HightoLow">High to Low</option>
            <option value="LowtoHigh">Low to High</option>
          </select>

          {/* <select
            name="country"
            id="country"
            className="outline-none border-none border-2 hover:bg-gray-50 px-2 py-1 rounded-2xl"
          >
            <option value="Country of Origin">Country of Origin</option>
            <option value="All Country">All Country</option>
            <option value="India">India</option>
          </select> */}

          {/* <select
            name="another-bundle"
            onChange={(elem)=> setPrice(elem.target.value)}
            id="another-bundle"
            className="outline-none border-none border-2 hover:bg-gray-50 px-2 py-1 rounded-2xl"
          >
            <option value="Bundles">Bundles</option>
            <option value="Single Side">Single Side</option>
          </select> */}
        </div>

        <div className="recommendation py-3 px-8">
          <div className="flex recom-box items-center border-1 border-gray-400 px-8 py-2 gap-2 text-[16px]">
            <h2>Sort by:</h2>
            <select className="text-[16px] outline-none rounded font-bold">
              <option value="Recommended">Recommended</option>
              <option value="Whats New">What's New</option>
              <option value="Popularity">Popularity</option>
              <option value="Better Discount">Better Discount</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Customer Rating">Customer Rating</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
