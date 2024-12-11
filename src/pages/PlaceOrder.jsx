import Title from "../components/Title";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const PlaceOrder = () => {
  const { currency, getCartAmount, delivery_fee } = useContext(ShopContext);

  return (
    <div className='flex flex-col justify-start gap-5 sm:gap-14 pt-5 lg:flex-row sm:pt-14 min-h-[80vh] border-t'>
      {/* LEFT - DELIVERY INFORMATION*/}
      <div className='flex flex-col w-full gap-4 sm:max-w-[480px]'>
        {/* TITLE */}
        <div className='my-3 text-xl sm:text-2xl'>
          <Title text1={"Delivery"} text2={"Information"} />
        </div>

        {/* FORM */}
        <div className='flex gap-3'>
          <input
            type='text'
            className='w-full px-4 py-2 text-base border border-gray-300 rounded'
            placeholder='First Name'
          />
          <input
            type='text'
            className='w-full px-4 py-2 text-base border border-gray-300 rounded'
            placeholder='Last Name'
          />
        </div>
        <input
          type='email'
          className='w-full px-4 py-2 text-base border border-gray-300 rounded'
          placeholder='Email '
        />
        <input
          type='text'
          className='w-full px-4 py-2 text-base border border-gray-300 rounded'
          placeholder='Street'
        />
        <input
          type='text'
          className='w-full px-4 py-2 text-base border border-gray-300 rounded'
          placeholder='Address'
        />
        <div className='flex gap-3'>
          <input
            type='text'
            className='w-full px-4 py-2 text-base border border-gray-300 rounded'
            placeholder='City'
          />
          <input
            type='text'
            className='w-full px-4 py-2 text-base border border-gray-300 rounded'
            placeholder='State'
          />
        </div>
        <div className='flex gap-3'>
          <input
            type='number'
            className='w-full px-4 py-2 text-base border border-gray-300 rounded'
            placeholder='Postal Code'
          />
          <input
            type='text'
            className='w-full px-4 py-2 text-base border border-gray-300 rounded'
            placeholder='Country'
          />
        </div>
        <input
          type='number'
          className='w-full px-4 py-2 text-base border border-gray-300 rounded'
          placeholder='Phone'
        />
      </div>

      {/* RIGHT - TOTAL AMOUNT AND PAYMENT METHOD*/}
      <div className='mt-4'>
        <div className='flex flex-col gap-4 sm:max-w-[480px] '>
          <div className='w-full'>
            <div className='text-2xl'>
              <Title text1='Total' text2='Amount' />
            </div>
            <div className='flex flex-col gap-2 mt-4 text-sm'>
              <div className='flex justify-between'>
                <p>Subtotal</p>
                <p className=''>
                  {" "}
                  {currency} {getCartAmount()}.00
                </p>
              </div>
              <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p className=''>
                  {" "}
                  {currency} {getCartAmount() === 0 ? 0 : delivery_fee}.00
                </p>
              </div>
              <hr />
              <div className='flex justify-between'>
                <b>Total</b>
                <p className='font-bold'>
                  {" "}
                  {currency}{" "}
                  {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
                  .00
                </p>
              </div>
            </div>
          </div>
          <div className='mt-12'>
            <Title text1={"Payment"} text2={"Method"} />
            {/* PAYMENT METHOD*/}
            <div className='flex items-center gap-3 p-2 px-3 border cursor-pointer'>
              <ul className=''>
                <li>
                  <a href=''></a>
                </li>
                <li>
                  <a href=''></a>
                </li>
                <li>
                  <a href=''></a>
                </li>
              </ul>
            </div>
            <button className='w-full px-3 py-4 text-sm text-white uppercase bg-black sm:text-base'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
