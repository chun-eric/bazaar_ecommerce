import { useContext, useState, useEffect, useCallback } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "../components/Title";

import ProductItem from "../components/ProductItem";

const Collection = () => {
  // access product data using context api
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  // function to add or remove clicked categories into category array
  const toggleCategory = (e) => {
    // if the clicked category is already in the array, remove it
    if (category.includes(e.target.value)) {
      setCategory(category.filter((item) => item !== e.target.value));
    } else {
      // if the clicked category is not in the array, add it
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // function to add clicked subcategories into subcategory array
  const toggleSubCategory = (e) => {
    // if the clicked subcategory is already in the array, remove it
    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter((item) => item !== e.target.value));
    } else {
      // if the clicked subcategory is not in the array, add it
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // function to filter the products based on category and subcategory
  // use useCallback to memoize the function -- prevent unnecessary re-renders and infinite loops
  // we only run this applyFilter function with useCallback when there is any dependency array changes, this will avoid unnecessary re-renders
  const applyFilter = useCallback(() => {
    let productsCopy = [...products];

    console.log("Before filtering:", productsCopy);
    console.log("Selected categories:", category);
    console.log("Selected subcategories:", subCategory);

    // filter by category if there is one or more items in the array
    if (category.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        category.includes(product.category)
      );
    }
    // filter by subcategory if there is one or more items in the array
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  }, [products, category, subCategory]); // only recreate if products or category changes

  // fetch the latest products on initial mount
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  // check logic of category filter to see that it is adding and deleting from the array using applyFilter function
  useEffect(() => {
    applyFilter();
  }, [applyFilter]);

  return (
    <div className='flex flex-col sm:flex-row gap-2 sm:gap-10 pt-10 border-t'>
      {/* Filter Feature - Left Side */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2 '
        >
          FILTER
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-5  text-gray-500 sm:hidden font-light'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75'
            />
          </svg>
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-5 ${
            showFilter ? "" : "hidden"
          } sm:block transition-all duration-300 ease-in-out`}
        >
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* Type Sub Category Filter  */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 mt-5 ${
            showFilter ? "" : "hidden"
          } sm:block transition-all duration-300 ease-in-out`}
        >
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Top Wear
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottom Wear
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Winter Wear
            </p>
          </div>
        </div>
      </div>

      {/* Products Collection - Right Side */}
      <div className='flex-1'>
        {/* Title */}
        <div className='flex flex-col gap-2 md:flex-row justify-between sm:text-2xl mb-4'>
          <Title text1={"All"} text2={"COLLECTIONS"} />
          {/* Sort By */}
          <select className='border font-light border-gray-300 text-sm px-2 py-2'>
            <option value='relevance' className=''>
              Sort by: Relevance
            </option>
            <option value='relevance' className=''>
              Sort by: Low to High
            </option>
            <option value='relevance' className=''>
              Sort by: High to Low
            </option>
          </select>
        </div>

        {/* All Products to Map */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((product, index) => (
            <ProductItem
              key={index}
              image={product.image}
              id={product._id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
