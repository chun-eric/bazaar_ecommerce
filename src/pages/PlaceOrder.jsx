import Title from "../components/Title";
import { useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/assets";
import PaymentForm from "../components/PaymentForm";

const PlaceOrder = () => {
  const { currency, getCartAmount, delivery_fee, navigate } =
    useContext(ShopContext);
  // selects the active payment
  const [activePayment, setActivePayment] = useState(null);

  const paymentMethods = [
    { id: 0, img: assets.stripe_logo, alt: "stripe logo" },
    { id: 1, img: assets.razorpay_logo, alt: "razorpay logo" },
    { id: 2, img: assets.paypal_logo, alt: "mastercard logo" },
    { id: 3, img: assets.cross_icon, alt: "visa icon" },
    { id: 4, img: assets.cross_icon, alt: "apple pay icon" },
  ];

  // function to handle payment selection based on index
  const handlePaymentMethod = (e, index) => {
    e.preventDefault();
    setActivePayment(index);
  };

  return (
    <div className=''>
      <div className='min-h-[100vh] w-full'>
        <div className='flex flex-col items-start w-full gap-2 pt-5 mb-40 border-t sm:justify-around sm:gap-2 lg:flex-row sm:pt-14'>
          {/* LEFT - DELIVERY INFORMATION*/}
          <div className='flex flex-col items-center  gap-4 lg:max-w-[580px]  xs:px-15 sm:px-5  rounded h-auto pb-6 w-full'>
            {/* TITLE */}
            <div className='py-4 my-3 text-xl sm:text-2xl'>
              <Title text1={"Delivery"} text2={"Information"} />
            </div>

            {/* FORM */}
            <div className='flex w-full h-full gap-3'>
              <input
                type='text'
                className='w-full px-4 py-4 text-base border border-gray-300 rounded-sm '
                placeholder='First Name'
              />
              <input
                type='text'
                className='w-full px-4 py-4 text-base border border-gray-300 rounded-sm'
                placeholder='Last Name'
              />
            </div>
            <input
              type='email'
              className='w-full px-4 py-4 text-base border border-gray-300 rounded-sm'
              placeholder='Email '
            />
            <input
              type='text'
              className='w-full px-4 py-4 text-base border border-gray-300 rounded-sm'
              placeholder='Street'
            />
            <input
              type='text'
              className='w-full px-4 py-4 text-base border border-gray-300 rounded-sm'
              placeholder='Address'
            />
            <div className='flex w-full gap-3'>
              <input
                type='text'
                className='w-full px-4 py-4 text-base border border-gray-300 rounded-sm'
                placeholder='City'
              />
              <input
                type='text'
                className='w-full px-4 py-4 text-base border border-gray-300 rounded-sm'
                placeholder='State'
              />
            </div>
            <div className='flex w-full gap-3 text-sm'>
              <input
                type='number'
                className='w-full px-4 py-4 text-base border border-gray-300 rounded-sm'
                placeholder='Postal Code'
              />
              <input
                type='text'
                className='w-full px-4 py-4 text-base border border-gray-300 rounded-sm'
                placeholder='Country'
              />
            </div>
            <input
              type='number'
              className='w-full px-4 py-4 text-base border border-gray-300 rounded-sm'
              placeholder='Phone'
            />
          </div>

          {/* MIDDLE - LINE */}
          <hr className='w-full md:hidden' />

          {/* RIGHT - TOTAL AMOUNT AND PAYMENT METHOD*/}
          <div className='mt-4 lg:max-w-[580px] w-full'>
            <div className='flex flex-col gap-4 lg:max-w-[580px] py-4 w-full'>
              <div className='w-full'>
                <div className='text-2xl'>
                  <div className='mb-2'>
                    <h1 className='pb-4 text-lg font-bold uppercase'>
                      Order Summary
                    </h1>
                  </div>
                </div>
                <div className='flex flex-col w-full gap-2 mt-4 text-sm'>
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
                      {getCartAmount() === 0
                        ? 0
                        : getCartAmount() + delivery_fee}
                      .00
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-8'>
                <PaymentForm />
                <button
                  onClick={() => navigate("/orders")}
                  className='w-full px-3 py-4 mt-2 text-sm text-white uppercase bg-black sm:text-base'
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
