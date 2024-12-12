import Title from "../components/Title";
import { useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/assets";

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
    <div className='flex flex-col items-center  sm:justify-start gap-5 sm:gap-14 pt-5 lg:flex-row sm:pt-14 min-h-[100vh] border-t'>
      {/* LEFT - DELIVERY INFORMATION*/}
      <div className='flex flex-col items-center  gap-4   sm:max-w-[480px]  xs:px-15 sm:px-5 bg-gray-100 rounded'>
        {/* TITLE */}
        <div className='py-4 my-3 text-xl sm:text-2xl'>
          <Title text1={"Delivery"} text2={"Information"} />
        </div>

        {/* FORM */}
        <div className='flex gap-3 '>
          <input
            type='text'
            className='w-full px-4 py-2 text-base border border-gray-400 rounded '
            placeholder='First Name'
          />
          <input
            type='text'
            className='w-full px-4 py-2 text-base border border-gray-400 rounded'
            placeholder='Last Name'
          />
        </div>
        <input
          type='email'
          className='w-full px-4 py-2 text-base border border-gray-400 rounded'
          placeholder='Email '
        />
        <input
          type='text'
          className='w-full px-4 py-2 text-base border border-gray-400 rounded'
          placeholder='Street'
        />
        <input
          type='text'
          className='w-full px-4 py-2 text-base border border-gray-400 rounded'
          placeholder='Address'
        />
        <div className='flex gap-3'>
          <input
            type='text'
            className='w-full px-4 py-2 text-base border border-gray-400 rounded'
            placeholder='City'
          />
          <input
            type='text'
            className='w-full px-4 py-2 text-base border border-gray-400 rounded'
            placeholder='State'
          />
        </div>
        <div className='flex gap-3'>
          <input
            type='number'
            className='w-full px-4 py-2 text-base border border-gray-400 rounded'
            placeholder='Postal Code'
          />
          <input
            type='text'
            className='w-full px-4 py-2 text-base border border-gray-400 rounded'
            placeholder='Country'
          />
        </div>
        <input
          type='number'
          className='w-full px-4 py-2 text-base border border-gray-400 rounded'
          placeholder='Phone'
        />
      </div>

      {/* MIDDLE - LINE */}
      <hr className='md:hidden w-[100%]' />

      {/* RIGHT - TOTAL AMOUNT AND PAYMENT METHOD*/}
      <div className='mt-4 '>
        <div className='flex flex-col w-[90%] gap-4 sm:max-w-[480px] py-4'>
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
            <div className='flex items-center py-2 cursor-pointer'>
              <ul className='flex items-center gap-2'>
                {paymentMethods.map((method, index) => (
                  <li
                    key={method.id}
                    className={`p-3 rounded cursor-pointer  ${
                      activePayment === index
                        ? "  border-[#fd499a] bg-transparent border-2 "
                        : "border"
                    }
                  `}
                  >
                    <a
                      onClick={(e) => handlePaymentMethod(e, index)}
                      className='flex items-center justify-center w-full h-full '
                      href='#'
                    >
                      <img
                        className='h-5 mx-4'
                        src={method.img}
                        alt={method.alt}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => navigate("/orders")}
              className='w-full px-3 py-4 mt-2 text-sm text-white uppercase bg-black sm:text-base'
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
