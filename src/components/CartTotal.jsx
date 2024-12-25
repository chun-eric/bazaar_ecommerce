import { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className='w-full'>
      <div className='mb-2'>
        <h1 className='pb-4 text-lg font-bold'>Order Summary</h1>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p className=''>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p className=''>
            {" "}
            {currency}
            {getCartAmount() === 0 ? 0 : delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>Total</b>
          <p className='font-bold'>
            {" "}
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
            .00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
