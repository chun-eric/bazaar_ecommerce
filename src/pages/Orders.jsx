import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className='py-16 border-t'>
      <div className='text-2xl'>
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      {/* Render Orders for Logged in User - Initially render some fake orders manually for testing */}
      <div className=''>
        {products.slice(1, 4).map((product, index) => (
          <div
            key={index}
            className='flex items-center justify-between py-4 text-gray-700 border-t border-b'
          >
            <div className='flex items-start gap-6 text-sm'>
              <img
                src={product.image[0]}
                alt={product.name}
                className='object-cover w-16 sm:w-20 '
              />
              <div className='pl-3'>
                <p className='font-medium sm:text-base'>{product.name}</p>
                <div className='flex items-center gap-3 mt-2 text-base'>
                  <p className='mr-3 text-md'>
                    {currency} {product.price}.00
                  </p>
                  <p className='mr-2'>Quantity: 1</p>
                  <p className=''>Size: M</p>
                </div>
                <p className='mt-2'>
                  Date: <span className='text-gray-400'> 25, July 2024</span>
                </p>
              </div>
            </div>
            <div className='flex justify-between md:w-1/2'>
              <div className='flex items-center gap-2'>
                {/* Green button */}
                <p className='h-2 bg-green-500 rounded-full min-w-2'></p>
                <p className='text-sm md:text-base'>Ready to Ship</p>
              </div>
              <button className='px-4 py-2 text-sm font-medium text-white bg-black border rounded-md'>
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
