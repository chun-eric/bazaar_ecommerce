import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
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
      const latest = products.slice(4, 10);
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
  console.log("latestProducts:", latestProducts);
  // console.log("Top right images:", latestProducts.slice(2, 4));
  // console.log("Bottom right image:", latestProducts[7]);

  return (
    <div className='my-16'>
      {/* TITLE */}
      <div className='py-8 text-3xl text-center'>
        <Title text1='Latest' text2='Collection' />
        {/* <p className='w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p> */}
      </div>

      {/* RENDER LATEST COLLECTION - ADD PRODUCT ITEM COMPONENT */}
      <div className='w-full px-1 mx-auto mt-4 mb-20 sm:px-0'>
        {
          // map over the latest products and render the product item component
          loading ? (
            <div className='w-full text-center'>Loading...</div>
          ) : error ? (
            <div className='w-full text-center'>Error: {error.message}</div>
          ) : (
            <div className='grid w-full grid-cols-2 gap-2 sm:gap-4 '>
              {/* Left side - takes up half */}
              <div className='relative w-full h-full cursor-pointer'>
                {latestProducts[0] && (
                  <Link to={`/collection`}>
                    <div className='relative w-full h-full overflow-hidden'>
                      <img
                        src={
                          latestProducts[0].image ||
                          "https://api/placeholder/500/500"
                        }
                        alt={latestProducts[0].name}
                        className='object-cover w-full h-full transition-all duration-100 ease-in-out rounded-sm hover:scale-105'
                      />
                      {/* <div className='absolute left-[-0.5rem] hidden p-2 text-xl text-black bottom-8 lg:block'>
                        <button className='px-6 py-1 font-bold font-outfit'>
                          SHOP NOW
                        </button>
                      </div> */}
                    </div>
                  </Link>
                )}
              </div>

              {/* Right side - takes up half */}
              <div className='flex flex-col h-full gap-2 sm:gap-4 '>
                {/* Top Right */}
                <div className='grid grid-cols-2 gap-2 h-1/2 sm:gap-4 '>
                  {latestProducts.slice(2, 4).map((products, index) => (
                    <Link key={products._id} to={`/product/${products._id}`}>
                      <div
                        key={index}
                        className='relative w-full h-full overflow-hidden cursor-pointer'
                      >
                        <img
                          src={
                            products?.image || "https://api/placeholder/300/300"
                          }
                          alt={products.name}
                          className='inset-0 object-cover w-full h-full transition-all duration-100 ease-in-out rounded-sm hover:scale-105'
                        />
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Bottom Right */}
                <div className='relative w-full h-1/2'>
                  {latestProducts[5] && (
                    <Link
                      key={products._id}
                      to={`/product/${latestProducts[5]._id}`}
                    >
                      <div className='relative h-full overflow-hidden cursor-pointer'>
                        <img
                          src={latestProducts[5].image}
                          alt={latestProducts[5].name}
                          className='absolute top-0 left-0 object-cover object-top w-full h-full transition-all duration-100 ease-in-out rounded-sm hover:scale-105'
                        />
                        {/* <div className='absolute p-2 bg-[#000000]  rounded bottom-4 left-4 px-4 text-sm'>
                        <button className='text-white uppercase font-outfit'>
                          Shop Now
                        </button>
                      </div> */}
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default LatestCollection;
