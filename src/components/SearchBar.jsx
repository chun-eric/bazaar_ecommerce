import React from "react";
import { useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/assets";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  return showSearch ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 '>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type='text'
          className='flex-1 outline-none bg-inherit text-sm'
          placeholder='Search'
        />
        <img
          src={assets.search_icon}
          alt='search icon'
          className='w-4 inline '
        />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        alt='escape icon'
        className='inline w-3 cursor-pointer'
      />
    </div>
  ) : null;
};

export default SearchBar;
