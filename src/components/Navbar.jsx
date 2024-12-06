import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-6 font-medium'>
      {/* LOGO */}
      <Link to='/'>
        <img src={assets.logo} alt='logo' className='w-36' />
      </Link>

      {/* NAV LINKS */}
      <ul className=' hidden sm:flex text-gray-700 text-sm gap-6'>
        <NavLink to='/' className=' flex flex-col items-center gap-1'>
          <p className='uppercase'>Home</p>
          <hr className='w-1/2 border-none h-[2px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className=' flex flex-col items-center gap-1'>
          <p className='uppercase'>Collection</p>
          <hr className='w-1/2 border-none h-[2px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className=' flex flex-col items-center gap-1'>
          <p className='uppercase'>About</p>
          <hr className='w-1/2 border-none h-[2px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className=' flex flex-col items-center gap-1'>
          <p className='uppercase'>Contact</p>
          <hr className='w-1/2 border-none h-[2px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      {/* RIGHT MENU - SEARCH, CART, PROFILE  */}
      <div className='flex items-center gap-6'>
        {/* SEARCH ICON */}
        <img
          src={assets.search_icon}
          alt='search_icon'
          className='w-5 cursor-pointer'
        />

        {/* PROFILE ICON */}
        <div className='group relative'>
          <img
            src={assets.profile_icon}
            alt='profile_icon'
            className='w-5 cursor-pointer'
          />
          <div className='group-hover:block hidden absolute top-6 right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded '>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        {/* CART ICON */}
        <Link to='/cart' className='relative'>
          <img
            src={assets.cart_icon}
            alt='cart_icon'
            className='w-5 min-w-5 '
          />
          {/* CART COUNT */}
          <p className='absolute right-[-5px] bottom-[-5px] w-4 bg-black leading-4  text-center text-white aspect-square rounded-full text-[8px]'>
            10
          </p>
        </Link>

        {/* MENU ICON */}
        <img
          onClick={() => setIsVisible(true)}
          src={assets.menu_icon}
          alt='menu_icon'
          className='w-5 cursor-pointer sm:hidden'
        />
      </div>

      {/* SIDE MENU FOR SMALL SCREENS */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          isVisible ? "w-full" : "w-0"
        }`}
      >
        <div className='flex flex-col text-gray-600'>
          {/* BACK BUTTON */}
          <div
            onClick={() => setIsVisible(false)}
            className='flex gap-4 p-3 items-center cursor-pointer'
          >
            <img
              className='h-4 rotate-180'
              src={assets.dropdown_icon}
              alt='dropdown icon'
            />
            <p className='text-[1.2rem] text-slate-950 '>Back</p>
          </div>
          {/* NAV LINKS */}
          <div className='flex flex-col pt-4'>
            <NavLink
              onClick={() => setIsVisible(false)}
              className=' text-[1.4rem] text-slate-950 py-3 pl-6 border-b border-gray-100 hover:text-[#FF6881]'
              to='/'
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setIsVisible(false)}
              className=' text-[1.4rem] text-slate-950 py-3 pl-6 border-b border-gray-100 hover:text-[#FF6881]'
              to='/collection'
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setIsVisible(false)}
              className=' text-[1.4rem] text-slate-950 py-3 pl-6 border-b border-gray-100 hover:text-[#FF6881]'
              to='/about'
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setIsVisible(false)}
              className=' text-[1.4rem] text-slate-950 py-3 pl-6 border-b border-gray-100 hover:text-[#FF6881]'
              to='/contact'
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
