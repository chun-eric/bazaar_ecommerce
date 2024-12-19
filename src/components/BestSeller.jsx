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
      setBestSellers(bestProducts.slice(0, 11));
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
    <div className='my-[4rem] sm:my-[8rem] '>
      {/* TITLE */}
      <div className='pb-20 text-3xl text-center'>
        <Title text1='Best Sellers' text2='Collection' />
        <p className='w-3/4 m-auto text-sm font-normal text-black sm:text-sm md:text-base'>
          Discover our most-loved styles, handpicked by our community{" "}
        </p>
      </div>

      {/* RENDER BEST SELLERS COLLECTION - ADD PRODUCT ITEM COMPONENT */}
      <div className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 '>
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
