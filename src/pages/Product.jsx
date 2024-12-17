import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import BreadCrumb from "../components/BreadCrumb";
import renderStars from "../components/RenderStars";
import Star from "../components/Star";

const Product = () => {
  // extract the id paramter from the URL
  const { id } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext); // access products data using context api
  const [loading, setLoading] = useState(false); //track loading/initialization of product data
  const [productData, setProductData] = useState(null); // add the product data
  const [image, setImage] = useState(""); //add the product image - the first image in image array
  const [size, setSize] = useState(""); // add the product size selection state
  const [arrowToggle, setArrowToggle] = useState(false); // add arrow toggle state
  const [activeTab, setActiveTab] = useState("description"); // add active tab state
  const [sortReview, setSortReview] = useState("highest"); // add sort review state
  const [averageRating, setAverageRating] = useState(0); // add average rating state

  //  handle arrow toggle
  const handleClick = () => {
    setArrowToggle(!arrowToggle);
  };

  // calculate average rating
  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating);
    return (sum / reviews.length).toFixed(1);
  };

  // sort Reviews
  const getSortedReviews = () => {
    if (!productData?.reviews) return [];
    return [...productData.reviews].sort((a, b) => {
      return sortReview === "highest"
        ? b.rating - a.rating
        : a.rating - b.rating;
    });
  };

  // format date function
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const fetchProductData = async () => {
    try {
      setLoading(true);
      const product = products.find((product) => product._id === id);
      setProductData(product);
      setImage(product.image[0]);
    } catch (error) {
      console.error("Error fetching product data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [id, products]);

  return productData ? (
    <div className='pt-10 transition-opacity duration-500 ease-in border-t-2 opacity-100'>
      {/* Entire Product Data Container */}
      <div className='flex flex-col gap-8 sm:flex-1 md-lg:flex-row'>
        {/* Product Images container (both small images and one big image) */}
        <div className='flex flex-col-reverse gap-3 sm:flex-row max-w-[1023px] sm:h-[520px] justitfy-between sm:justify-start w-full md-lg:w-1/2'>
          {/* Small Images */}
          <div className='flex flex-row gap-1 w-full sm:h-full  justify-between overflow-x-auto sm:flex-col sm:w-[100px]'>
            {productData.image.map((image, index) => (
              <img
                onClick={() => setImage(image)}
                src={image}
                key={index}
                className={`w-[24%] sm:w-full h-[24%] cursor-pointer object-cover ${
                  index !== productData.image.length - 1 ? "sm:mb-3" : ""
                } h-[120px]`}
              ></img>
            ))}
          </div>
          {/* Large Image */}
          <div className=' w-full sm:flex-1 lg:w-[450px] h-[520px] flex items-center justify-center '>
            <img
              className='object-cover w-full h-full sm:object-cover '
              src={image}
              alt={productData.name}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className='w-full md-lg:w-1/2'>
          {/* BreadCrumb */}
          <BreadCrumb
            category={productData.category}
            subCategory={productData.subCategory}
          />
          {/* Product Name */}
          <h1 className='mt-1 text-2xl font-medium'>{productData.name}</h1>

          {/* Stars */}
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt='star' className='w-3 ' />
            <img src={assets.star_icon} alt='star' className='w-3 ' />
            <img src={assets.star_icon} alt='star' className='w-3 ' />
            <img src={assets.star_icon} alt='star' className='w-3 ' />
            <img src={assets.star_dull_icon} alt='star' className='w-3 ' />
            <p className='pl-2'>({productData.reviews.length})</p>
          </div>

          {/* Product Price */}
          <p className='mt-5 text-3xl font-medium'>
            {currency}
            {productData.price}
          </p>

          {/* Product Description */}
          <p className='mt-5 text-gray-500 md:w-4/5'>
            {productData.description}
          </p>

          {/* Product Sizes */}
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`px-4 py-2 bg-gray-100 border border-gray-100 hover:border-slate-950 hover:bg-zinc-300 ${
                    item === size ? "border-[#fd51bb]" : "border-slate-950"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => {
              addToCart(productData._id, size);
            }}
            className='px-8 py-3 text-sm text-white bg-black active:bg-gray-700'
          >
            ADD TO CART
          </button>
          <hr className='mt-8 md:w-5/5' />

          {/* Accordian - Product Details */}
          <div className='flex flex-col gap-1 mt-5 text-sm text-gray-500'>
            <div className='relative flex items-center justify-between'>
              <p className='text-base font-bold tracking-wide text-slate-950'>
                Benefits
              </p>

              <svg
                onClick={() => handleClick(setArrowToggle)}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className={`font-[0.8rem] size-6 text-slate-900 cursor-pointer transition-transform duration-200 ${
                  arrowToggle ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m19.5 8.25-7.5 7.5-7.5-7.5'
                />
              </svg>
            </div>
            {arrowToggle && (
              <div
                className={`flex flex-col gap-1 mt-2 text-[0.9rem] right-0 top-0 transition-all ease-in-out duration-500  ${
                  arrowToggle
                    ? "opacity-100 max-h-[100px] translate-y-0"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6 text-[#333]'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                  </svg>
                  <p className='tracking-wide text-[#333] ml-2'>100% Natural</p>
                </div>
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6 text-[#333]'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                  </svg>
                  <p className='tracking-wide text-[#333] ml-2'>
                    Easy Return and exchange policy within 30 days
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Description and Review Sections */}
      <div className='mt-20'>
        <div className='flex '>
          {/* Tabs */}
          <button
            onClick={() => setActiveTab("description")}
            className={`tracking-wide px-5 py-3 text-sm border cursor-pointer rounded-tl-lg rounded-tr-lg  ${
              activeTab === "description" ? "bg-gray-600 text-white" : ""
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`tracking-wide px-5 py-3 text-sm border cursor-pointer rounded-tl-lg rounded-tr-lg ${
              activeTab === "reviews" ? "bg-gray-600 text-white" : ""
            }`}
          >
            Reviews ({productData.reviews.length})
          </button>
        </div>
        <div className='flex flex-col gap-5 px-6 py-6 text-sm text-gray-500 border'>
          {activeTab === "description" ? (
            // Display Description
            <div className='flex flex-col gap-5'>
              <p className='text-sm text-[#333] tracking-wide'>
                {productData.description}
              </p>
            </div>
          ) : (
            // Display Reviews
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col justify-between gap-4 pb-4 mb-4 '>
                <div className='flex flex-col items-center justify-between gap-2 pb-5 border-b border-gray-300 sm:flex-row'>
                  <div className='flex items-end justify-between gap-2 '>
                    <span className='text-3xl font-bold text-slate-950'>
                      {renderStars(Math.round(averageRating))}
                    </span>
                    <span className='ml-2 text-lg text-slate-950'>
                      Based on {productData.reviews?.length || 0} reviews
                    </span>
                  </div>

                  <div className='flex items-center gap-2 '>
                    <span className='text-sm text-slate-950'>Sort by:</span>
                    <select
                      value={sortReview}
                      onChange={(e) => setSortReview(e.target.value)}
                      className='px-3 py-2 border outline-none border-slate-300 text-slate-950 text-bold'
                    >
                      <option className='text-bold' value='highest'>
                        Highest Rating
                      </option>
                      <option className='text-bold' value='lowest'>
                        Lowest Rating
                      </option>
                    </select>
                  </div>
                </div>

                {/* Reviews List */}
                <div className='flex flex-col gap-8'>
                  {getSortedReviews().map((review) => (
                    <div className='flex flex-col gap-1 pb-6 ' key={review._id}>
                      <div className='flex flex-col items-start gap-1'>
                        {renderStars(review.rating)}
                        <span className='text-xl font-bold text-gray-950'>
                          {review.title}
                        </span>
                      </div>
                      <p className='text-base text-[#333] '>{review.body}</p>
                      <div className='flex flex-col items-start gap-2 text-sm text-gray-500'>
                        <div className='flex items-center gap-4 mt-5'>
                          <span className='text-base font-bold leading-wider text-neutral-950'>
                            {review.username}
                          </span>
                          <span className='text-sm'>
                            {formatDate(review.date)}
                          </span>
                        </div>
                        <div className=''>
                          {review.verified_purchase && (
                            <div className='flex items-center gap-1'>
                              <span>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  strokeWidth={1.5}
                                  stroke='currentColor'
                                  className='text-green-900 size-6'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z'
                                  />
                                </svg>
                              </span>
                              <span className='italic'>Verified Buyer</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className=''></div>
      </div>

      {/* Display Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className='opacity-0'>Product not found</div>
  );
};

export default Product;
