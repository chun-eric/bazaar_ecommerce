import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BreadCrumb = ({ category, subCategory }) => {
  return (
    <nav className='flex items-center pb-2 text-sm font-semibold text-slate-950'>
      <Link to='/' className=' hover:underline'>
        Home
      </Link>
      <span className='mx-2'>/</span>
      <Link
        className='hover:underline'
        to={`/category/${category.toLowerCase()}`}
      >
        {category}
      </Link>
      {subCategory && (
        <>
          <span className='mx-2'>/</span>
          <Link
            to={`/category/${category.toLowerCase()}/${subCategory.toLowerCase()}`}
            className='hover:underline'
          >
            {subCategory}
          </Link>
        </>
      )}
    </nav>
  );
};

BreadCrumb.propTypes = {
  category: PropTypes.string.isRequired,
  subCategory: PropTypes.string,
};

export default BreadCrumb;
