import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={"Total"} text2={"Amount"} />
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
