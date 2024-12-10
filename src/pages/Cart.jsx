import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const Cart = () => {
  const { products } = useContext(ShopContext);
  return <div>Cart</div>;
};

export default Cart;
