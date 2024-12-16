import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";

// Each Product Item Template
const ProductItem = ({ id, image, name, price }) => {
  // get the currency from useContext
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor pointer'>
      <div className='overflow-hidden'>
        <img
          src={image[0]}
          alt='product-image'
          className='transition-all duration-100 ease-in-out hover:scale-105'
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>
        {currency} {price}
      </p>
    </Link>
  );
};

ProductItem.propTypes = {
  image: PropTypes.arrayOf(PropTypes.string).isRequired, // This stays as array
  id: PropTypes.string.isRequired, // Changed from array to string
  name: PropTypes.string.isRequired, // Changed from array to string
  price: PropTypes.number.isRequired, // Changed from array to number
};

export default ProductItem;
