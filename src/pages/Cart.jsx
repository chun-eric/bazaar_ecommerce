import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Cart = () => {
  // access product data, currency and cartItems using context api
  const { products, currency, cartItems, updateCartQuantity } =
    useContext(ShopContext);

  // store cart data
  const [cartData, setCartData] = useState([]);

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
    <div className='border-t pt-14'>
      <div className='mb-3 text-2xl'>
        <Title text1={"Your"} text2={"Cart"} />
      </div>
      <div className=''>
        {cartData.map((item, index) => {
          // get the product id
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
            >
              <div className='flex items-start gap-6 '>
                <img
                  className='w-16 sm:w-20'
                  src={productData.image[0]}
                  alt=''
                />
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
    </div>
  );
};

export default Cart;
