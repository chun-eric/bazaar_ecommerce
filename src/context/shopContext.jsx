import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Create a context. Its like the mall or shared infrastructure.
const ShopContext = createContext();

// Provides the context, all the data to be provided or shared across everyone in the mall
const ShopContextProvider = (props) => {
  // add some shared variables
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  // add to cart function
  // Upon refactor we can use zustand which is more modern and maintanable
  const addToCart = async (itemId, size) => {
    // if size is not selected show toast error and return
    if (!size) {
      toast.error("Please select a Product Size");
      return;
    }
    // Deep clone of cartItems
    let newCartItems = structuredClone(cartItems);

    // if this item is already in the cart
    if (newCartItems[itemId]) {
      // if  size of this item already exists in cart
      if (newCartItems[itemId][size]) {
        // then increment the quantity
        newCartItems[itemId][size] += 1;
      }
      // if size of this item is not in the cart set to 1
      else {
        newCartItems[itemId][size] = 1;
      }
    }
    // if this item is not in the cart
    else {
      // create a new cart item entry with the product id
      newCartItems[itemId] = {};
      // set the size quantity to 1
      newCartItems[itemId][size] = 1;
    }
    // set the new cartItems
    setCartItems(newCartItems);
  };

  // get cart count function
  const getCartCount = () => {
    // set intial count
    let totalCount = 0;

    // loop through the items in cartItems
    for (let items in cartItems) {
      // loop through the sizes in cartItems
      for (let size in cartItems[items]) {
        try {
          // if the quantity is greater than 0
          if (cartItems[items][size] > 0) {
            // add the quantity to the totalCount
            totalCount += cartItems[items][size];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    // return the total count value
    return totalCount;
  };

  // update cart quantity function (can add or delete)
  const updateCartQuantity = async (itemId, size, quantity) => {
    // Deep clone of cartItems
    let newCartItems = structuredClone(cartItems);
    // set the new quantity to the product item size
    newCartItems[itemId][size] = quantity;
    setCartItems(newCartItems);
  };

  // get the cart amount/total price
  const getCartAmount = () => {
    // set initial amount
    let totalAmount = 0;

    // loop through the items in cartItems
    for (let items in cartItems) {
      // find the current product so we can get access to its price as well
      let product = products.find((product) => product._id === items);

      console.log(product);

      // loop through the quantities in cartItems
      for (let quantity in cartItems[items]) {
        try {
          // if the quantity is greater than 0
          if (cartItems[items][quantity] > 0) {
            // add the total price (price * quantity) to the total amount
            totalAmount += product.price * cartItems[items][quantity];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    // return the total amount value
    return totalAmount;
  };

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
    cartItems,
    addToCart,
    getCartCount,
    updateCartQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node,
};

export { ShopContext, ShopContextProvider };
