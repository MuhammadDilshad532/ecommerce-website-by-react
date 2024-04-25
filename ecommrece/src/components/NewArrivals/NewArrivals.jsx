import React from "react";
import { Products } from "../../../FeatureData/FeatureData";
import { MdOutlineShoppingCart } from "react-icons/md";

const NewArrivals = () => {
 
  const displayedProducts = Products.slice(0, 8);

  return (
    <div className="max-w-screen-xl mx-auto  mt-20">
      <div className="text-center p-14  ">
        <h1 className="text-6xl font-bold mb-4 text-gray-700">New Arrivals</h1>
        <p className="text-lg">Summer Collection New Modern Design</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 mt-8">
        {displayedProducts.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="m-4 shadow-lg border border-gray-300 rounded-xl">
      <img
        src={product.img}
        alt={product.name}
        className="w-full rounded-t-3xl rounded-b-3xl  p-3"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="mb-2">{product.description}</p>
        <p className="mb-2">{product.stars}</p>
        <div className="flex justify-between">
          <p className="text-[#187c72] font-semibold">{product.price}</p>
          <div className="bg-[#eaf5d8] w-9 rounded text-[#187c72] hover:bg-[#187c72] hover:text-white flex justify-center items-center">
            <MdOutlineShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
