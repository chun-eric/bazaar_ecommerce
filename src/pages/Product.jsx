import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import BreadCrumb from "../components/BreadCrumb";

const Product = () => {
  // extract the id paramter from the URL
  const { id } = useParams();
  console.log(id);

  // access products data using context api
  const { products, currency, addToCart } = useContext(ShopContext);
  // track loading/initialization of the product data
  const [loading, setLoading] = useState(false);
  // add the product data
  const [productData, setProductData] = useState(null);
  // add the product image - its the first image in the image array
  const [image, setImage] = useState("");
  // add the product size selection state
  const [size, setSize] = useState("");

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
      <div className='flex flex-col gap-8 lg:flex-row'>
        {/* Product Images container (both small images and one big image) */}
        <div className='flex flex-col-reverse  gap-3 sm:flex-row max-w-[600px] lg:h-[520px] justify-between  '>
          {/* Small Images */}
          <div className='flex flex-row gap-2 w-full sm:h-full justify-between overflow-x-auto sm:flex-col lg:w-[100px] '>
            {productData.image.map((image, index) => (
              <img
                onClick={() => setImage(image)}
                src={image}
                key={index}
                className={`w-[22%] max-w-[400px] sm:w-full  cursor-pointer object-cover ${
                  index !== productData.image.length - 1 ? "sm:mb-3" : ""
                } h-[120px]`}
              ></img>
            ))}
          </div>

          {/* Large Image */}
          <div className=' w-full  lg:w-[450px] h-[520px] '>
            <img
              className='object-contain w-full h-full '
              src={image}
              alt={productData.name}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className='flex-1'>
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
            <p className='pl-2'>(122)</p>
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
                  className={`px-4 py-2 bg-gray-100 border ${
                    item === size ? "border-orange-400" : "border-none"
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
          <hr className='mt-8 md:w-4/5' />

          {/* Product Details */}
          <div className='flex flex-col gap-1 mt-5 text-sm text-gray-500'>
            <p>100% Natural</p>
            <p>Easy Return and exchange policy within 30 days</p>
          </div>
        </div>
      </div>

      {/* Description and Review Sections */}
      <div className='mt-20'>
        <div className='flex '>
          <b className='px-5 py-3 text-sm border cursor-pointer active:bg-black'>
            Description
          </b>
          <p className='px-5 py-3 text-sm border cursor-pointer'>
            Reviews (122)
          </p>
        </div>
        <div className='flex flex-col gap-5 px-6 py-6 text-sm text-gray-500 border'>
          {/* <p className=''>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p> */}
          <p className=''>{productData.description}</p>
        </div>
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
