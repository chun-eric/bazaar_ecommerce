import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Create a context instance. Its like the mall or shared infrastructure.
const ShopContext = createContext();

// Provides the actual context, all the data to be provided or shared across everyone in the mall
const ShopContextProvider = (props) => {
  // add some shared variables
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState(""); // state for search query
  const [showSearch, setShowSearch] = useState(false); // show/hide search bar. Initially hides it.
  const [cartItems, setCartItems] = useState({}); // state for cart items
  const navigate = useNavigate();

  // get add to cart function v2 refactoring
  const addToCart = async (itemId, size) => {
    // if size is not selected show toast error and return
    if (!size) {
      toast.error("Please select a Product Size");
    }

    // Deep clone of cartItems
    let newCartItems = structuredClone(cartItems);

    // if the item is not in the cart, add it in a new object
    // if the item is in the cart add keeps its value truthy
    newCartItems[itemId] = newCartItems[itemId] || {};

    // set the new quantity to the existing product item size quantity + 1
    // if quantity is not set, set it to 0
    newCartItems[itemId][size] = (newCartItems[itemId][size] || 0) + 1;

    setCartItems(newCartItems);
  };

  // get cart count function v2 refactoring
  const getCartCount = () => {
    // Object.entries returns an array of key value pairs of our cartItems
    return Object.entries(cartItems).reduce(
      // First reduce: iterating over each product in the cart, we ignore the product name (_ is the product id)
      // sizeQuantities is an object where the key is the size and the value is the quantity
      (totalCount, [_, sizeQuantities]) => {
        // Second reduce: adding up sizeQuantites values
        const sizeTotals = Object.values(sizeQuantities).reduce(
          (sum, quantity) => {
            // if the quantity is greater than 0 add it to the sum otherwise use the sum
            return quantity > 0 ? sum + quantity : sum;
          },
          0
        );
        return totalCount + sizeTotals;
      },
      0
    );
  };

  // update cart quantity function v2
  const updateCartQuantity = async (itemId, size, quantity) => {
    setCartItems((prevCart) => ({
      // copy all existing cart items
      ...prevCart,
      // update this specific product
      [itemId]: {
        // spreads all existing sizes for this product
        ...prevCart[itemId],
        // update specific size with new quantity
        [size]: quantity,
      },
    }));
  };

  // get the cart amount/total price v2
  const getCartAmount = () => {
    // Object.entries returns an array of key value pairs of our cartItems
    // iterate over each product in the cart with reduce method
    // this will destructure the product id and sizeQuantities
    return Object.entries(cartItems).reduce(
      (total, [productId, sizeQuantities]) => {
        // find the current product so we can get access to its price as well
        const product = products.find((product) => product._id === productId);

        // Second reduce: adding up sizeQuantites values
        const itemTotal = Object.values(sizeQuantities).reduce(
          (sum, quantity) => {
            return quantity > 0 ? sum + product.price * quantity : sum;
          },
          0
        );
        return total + itemTotal;
      },
      0
    );
  };

  // store shared data  the products object. We can access any values via context API
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
    // uses the context instance we made and passes in the shared data (values object)
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node,
};

export { ShopContext, ShopContextProvider };

// ----------------------------------------------------

//---------- version 1 functions --------

// add to cart function v1
// Upon refactor we can use zustand which is more modern and maintanable
// const addToCart = async (itemId, size) => {
//   // if size is not selected show toast error and return
//   if (!size) {
//     toast.error("Please select a Product Size");
//     return;
//   }
//   // Deep clone of cartItems so we dont modify the original
//   let newCartItems = structuredClone(cartItems);

//   // if this item is already in the cart
//   if (newCartItems[itemId]) {
//     // if  size of this item already exists in cart
//     if (newCartItems[itemId][size]) {
//       // then increment the quantity
//       newCartItems[itemId][size] += 1;
//     }
//     // if size of this item is not in the cart set to 1
//     else {
//       newCartItems[itemId][size] = 1;
//     }
//   }
//   // if this item is not in the cart
//   else {
//     // create a new cart item entry with the product id
//     newCartItems[itemId] = {};
//     // set the size quantity to 1
//     newCartItems[itemId][size] = 1;
//   }
//   // set the new cartItems
//   setCartItems(newCartItems);
// };

// ----------------------------------------------------
// get cart count function v1
// const getCartCount = () => {
//   // set intial count
//   let totalCount = 0;

//   // loop through the items in cartItems
//   for (let items in cartItems) {
//     // loop through the sizes in cartItems
//     for (let size in cartItems[items]) {
//       try {
//         // if the quantity is greater than 0
//         if (cartItems[items][size] > 0) {
//           // add the quantity to the totalCount
//           totalCount += cartItems[items][size];
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }
//   // return the total count value
//   return totalCount;
// };

// ----------------------------------------------------

// update cart quantity function (can add or delete) v1
// const updateCartQuantity = async (itemId, size, quantity) => {
//   // Deep clone of cartItems
//   let newCartItems = structuredClone(cartItems);
//   // set the new quantity to the product item size
//   newCartItems[itemId][size] = quantity;
//   setCartItems(newCartItems);
// };

// ----------------------------------------------------

// get the cart amount/total price
// const getCartAmount = () => {
//   // set initial amount
//   let totalAmount = 0;
//   // loop through the items in cartItems
//   for (let items in cartItems) {
//     // find the current product so we can get access to its price as well
//     let product = products.find((product) => product._id === items);

//     console.log(product);

//     // loop through the quantities in cartItems
//     for (let quantity in cartItems[items]) {
//       try {
//         // if the quantity is greater than 0
//         if (cartItems[items][quantity] > 0) {
//           // add the total price (price * quantity) to the total amount
//           totalAmount += product.price * cartItems[items][quantity];
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }

//   // return the total amount value
//   return totalAmount;
// };
