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
          className='hover:scale-105 transition-all duration-100  ease-in-out'
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
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ProductItem;
