import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { products } from "../assets/assets";

// Create a context. Its like the mall or shared infrastructure.
const ShopContext = createContext();

// Provides the context, all the data to be provided or shared across everyone in the mall
const ShopContextProvider = (props) => {
  // add some shared variables
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // store shared data
  // provide the products object. We can now access it via context API within any component
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node,
};

export { ShopContext, ShopContextProvider };
