import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[1fr,1fr,1fr]  gap-14 sm:gap-16 my-10 mt-40 text-sm border-t py-12'>
      <div className='flex flex-col'>
        <img src={assets.logo2} alt='logo' className='w-24 mb-5' />
        <div className='flex gap-2'>
          <Link to='/instagram' className='hover:text-gray-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mr-2 lucide lucide-instagram'
            >
              <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
              <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
              <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
            </svg>
          </Link>
          <Link to='/twitter' className='hover:text-gray-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-twitter'
            >
              <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
            </svg>
          </Link>
          <Link to='/facebook' className='hover:text-gray-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-facebook'
            >
              <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
            </svg>
          </Link>
        </div>
      </div>
      <div className=''>
        <p className='mb-5 text-xl font-medium'>COMPANY</p>
        <ul className='flex flex-col gap-2 text-gray-700'>
          <Link to='/'>
            <li className='text-sm hover:text-gray-400'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='text-sm hover:text-gray-400'>About Us</li>
          </Link>
          <Link to='/delivery'>
            <li className='text-sm hover:text-gray-400'>Delivery</li>
          </Link>
          <Link to='/privacy'>
            <li className='text-sm hover:text-gray-400'>Privacy Policy</li>
          </Link>
        </ul>
      </div>
      <div className=''>
        <p className='mb-5 text-xl font-medium'>CONTACT</p>
        <ul className='flex flex-col gap-2 text-gray-700'>
          <li className='text-sm cursor-pointer hover:text-gray-400'>
            +81-123-456-789
          </li>
          <li className='text-sm cursor-pointer hover:text-gray-400'>
            support@bazaar.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
