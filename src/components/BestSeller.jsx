import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const BestSeller = () => {
  // access product data using context api
  const { products } = useContext(ShopContext);

  // get best seller products
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // set loading to true
    setLoading(true);
    try {
      // filter the best seller products
      const bestProducts = products.filter((product) => product.bestseller);
      // grab only 5 best sellers
      setBestSellers(bestProducts.slice(0, 5));
      setError(null);
    } catch (error) {
      setError(error);
      console.error("Error fetching latest products:", error);
    } finally {
      setLoading(false);
    }
  }, [products]);

  console.log(bestSellers);

  return (
    <div className='my-10'>
      {/* TITLE */}
      <div className='text-center py-8 text-3xl'>
        <Title text1='Best Sellers' text2='Collection' />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>

      {/* RENDER BEST SELLERS COLLECTION - ADD PRODUCT ITEM COMPONENT */}
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
        {loading ? (
          <div className='w-full text-center'>Loading...</div>
        ) : error ? (
          <div className='w-full text-center'>Error: {error.message}</div>
        ) : (
          bestSellers.map((product, index) => (
            <ProductItem
              key={index}
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BestSeller;
