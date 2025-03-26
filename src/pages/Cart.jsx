import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { Link } from "react-router-dom";

const Cart = () => {
  // access product data, currency and cartItems using context api
  const { products, currency, cartItems, updateCartQuantity, navigate } =
    useContext(ShopContext);

  // store cart data
  const [cartData, setCartData] = useState([]);

  // update cart quantity change
  const handleQuantityChange = (productId, size, e) => {
    if (e.target.value === "" || e.target.value === "0") {
      return null;
    }
    updateCartQuantity(productId, size, Number(e.target.value));
  };

  // runs whenever cartItems change
  useEffect(() => {
    const tempData = [];
    // loop through each product
    for (let items in cartItems) {
      // loop through each size
      for (let size in cartItems[items]) {
        // if the quantity is greater than 0
        if (cartItems[items][size] > 0) {
          // push the data to tempData
          tempData.push({
            // push the product id, size and quantity in one object
            _id: items,
            size: size,
            quantity: cartItems[items][size],
          });
        }
      }
    }

    // set the cartData
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='pb-32 border-t pt-14'>
      <div className='mb-8 text-2xl'>
        <Title text1={"Your"} text2={"Cart"} />
      </div>
      <div className='flex flex-col items-start gap-6 lg:flex-row lg:gap-8'>
        <div className='w-full lg:flex-1'>
          {cartData.map((item, index) => {
            // get the product id
            const productData = products.find(
              (product) => product._id === item._id
            );

            return (
              <div
                key={index}
                className='py-4 border-t  grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 bg-white'
              >
                <div className='flex items-start gap-6 '>
                  <Link to={`/product/${productData._id}`}>
                    <img
                      className='w-16 sm:w-20'
                      src={productData.image[0]}
                      alt=''
                    />
                  </Link>
                  <div className=''>
                    <p className='text-sm font-medium sm:text-lg'>
                      {productData.name}
                    </p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p className=''>
                        {currency}
                        {productData.price}
                      </p>
                      <p className='px-2 border sm:px-3 sm:py-1 bg-slate-50'>
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quantity */}
                <input
                  onChange={(e) => handleQuantityChange(item._id, item.size, e)}
                  type='number'
                  min={1}
                  value={item.quantity}
                  className='px-2 py-2 border max-w-10 sm:max-w-20 sm:px-3'
                />
                <img
                  onClick={() => updateCartQuantity(item._id, item.size, 0)}
                  src={assets.bin_icon}
                  alt='delete icon'
                  className='w-4 mr-4 cursor-pointer sm:w-5'
                />
              </div>
            );
          })}
        </div>
        <div className='flex self-start lg:w-[33%] w-full'>
          <div className='w-full p-6 rounded-md bg-gray-50'>
            <CartTotal />
            <div className='w-full text-start'>
              <button
                onClick={() => navigate("/place-order")}
                className='px-8 py-3 my-8 text-sm text-white uppercase bg-black'
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
