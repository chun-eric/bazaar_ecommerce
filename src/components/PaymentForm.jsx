import React, { useState } from "react";
import Visa from "../assets/logos/visa.png";
import Amex from "../assets/logos/amex.png";
import Mastercard from "../assets/logos/card.png";
import Stripe from "../assets/logos/stripe.png";
import Jcb from "../assets/logos/jcb.png";
import Diners from "../assets/logos/diners-club.png";
import Paypal from "../assets/logos/paypal.png";
import { Link } from "react-router-dom";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [useShippingAddress, setUseShippingAddress] = useState(false);
  const [saveInformation, setSaveInformation] = useState(false);
  return (
    <div className='w-full py-4 mx-auto max-w-d'>
      {/* Header */}
      <div className='mb-6'>
        <h2 className='text-xl font-semibold'>Payment</h2>
        <div className='flex items-center gap-1 mt-1 text-sm text-gray-500'>
          <span className=''>All transactions are seure and encrypted</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className='w-full overflow-hidden border rounded bg-gray-50'>
        {/* Credit options */}
        <div className='w-full '>
          <div
            className={`p-4  ${
              paymentMethod === "credit-card" ? "bg-[#F3F7F9] border" : ""
            } `}
          >
            <label className='flex items-center justify-between cursor-pointer'>
              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='payment'
                  value='credit-card'
                  checked={paymentMethod === "credit-card"}
                  className='w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500'
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span className=''>Credit Card</span>
              </div>

              <div className='flex items-center gap-2'>
                <img
                  src={Visa}
                  alt='Visa'
                  className='px-1 bg-white border border-gray-200 rounded h-7'
                />
                <img
                  src={Mastercard}
                  alt='Mastercard'
                  className='h-6 px-1 bg-white border border-gray-200 rounded'
                />
                <img
                  src={Amex}
                  alt='Amex'
                  className='h-6 px-1 bg-white border border-gray-200 rounded'
                />
                <span className='px-3 py-1 text-xs text-gray-600 border'>
                  +3
                </span>
              </div>
            </label>
          </div>

          {/* Credit card form */}
          {paymentMethod === "credit-card" && (
            <div className='pl-1 mt-4 space-y-4 '>
              <div>
                <input
                  type='text'
                  placeholder='Card number'
                  className='w-full px-3 py-4 border rounded focus:outline-none focus:ring-1 focus:ring-black placeholder-[#929292]'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4 size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z'
                  />
                </svg>
              </div>
              <div className='relative grid grid-cols-2 gap-4'>
                <input
                  type='text'
                  className='relative px-3 py-4 text-sm border rounded focus:outline-none focus:ring-black placeholder-[#929292]'
                  placeholder='Expiration date (MM/YY)'
                />
                <div className='flex '>
                  <input
                    type='text'
                    className='px-3 py-4 text-sm border rounded focus:outline-none focus:ring-black placeholder-[#929292]'
                    placeholder='Security code'
                  />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='absolute w-4 h-4 size-6 right-1 bottom-1'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
                    />
                  </svg>
                </div>
              </div>
              <input
                type='text'
                placeholder='Name on card'
                className='placeholder-[#929292] w-full px-3 py-3 border rounded focus:outline-none focus:ring-black'
              />
              <label className='flex items-center gap-2 pl-1'>
                <input
                  type='checkbox'
                  checked={useShippingAddress}
                  className='w-4 h-4 pl-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
                />
                <span className='text-sm text-slate-700'>
                  Use Shipping address as billing address
                </span>
              </label>
            </div>
          )}
        </div>

        {/* Paypal Option */}
        <div className='w-full duration-200 ease-in transitiona-all'>
          <div
            className={`p-4 ${
              paymentMethod === "paypal" ? "bg-[#F3F7F9] border" : ""
            } `}
          >
            <label className='flex items-center justify-between cursor-pointer'>
              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='payment'
                  value='paypal'
                  checked={paymentMethod === "paypal"}
                  className='w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 '
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span className=''>PayPal</span>
              </div>
              <div className='pr-2'>
                <a href='www.paypal.com'>
                  <img
                    src={Paypal}
                    alt='paypal'
                    className='object-contain h-12 '
                  />
                </a>
              </div>
            </label>
          </div>

          {/* Paypal form */}
          {paymentMethod === "paypal" && (
            <div className='pl-1 mt-4 space-y-4 '>
              <div className='h-[150px] text-center flex flex-col gap-2 justify-start items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='text-gray-600 size-12'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9'
                  />
                </svg>
                <p className='px-6 mt-2 text-sm text-center'>
                  After clicking "Pay with PayPal", you will be redirected to
                  PayPal to complete your purchase securely.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Remeber me */}
      <div className='mt-6'>
        <h2 className='text-xl font-semibold'>Remember me</h2>
        <div className='w-full overflow-hidden bg-gray-50'></div>
      </div>
    </div>
  );
};

export default PaymentForm;
