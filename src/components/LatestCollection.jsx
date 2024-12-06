import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";
const LatestCollection = () => {
  // access product data using context api
  const { products } = useContext(ShopContext);

  // set products array state variable
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch the latest products on initial mount
  useEffect(() => {
    // set loading to true
    setLoading(true);
    // fetch the latest 10 products
    try {
      // fetch the latest 10 products
      const latest = products.slice(0, 10);
      setLatestProducts(latest);
      setError(null);
    } catch (error) {
      setError(error);
      console.error("Error fetching latest products:", error);
    } finally {
      setLoading(false);
    }
  }, [products]);

  // log the latest products
  console.log(latestProducts);

  return (
    <div className='my-10'>
      {/* TITLE */}
      <div className='text-center py-8 text-3xl'>
        <Title text1='Latest' text2='Collection' />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>

      {/* RENDER LATEST COLLECTION - ADD PRODUCT ITEM COMPONENT */}
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          // map over the latest products and render the product item component
          loading ? (
            <div className='w-full text-center'>Loading...</div>
          ) : error ? (
            <div className='w-full text-center'>Error: {error.message}</div>
          ) : (
            latestProducts.map((product, index) => (
              <ProductItem
                key={product._id || `product-${index}`}
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))
          )
        }
      </div>
    </div>
  );
};

export default LatestCollection;
