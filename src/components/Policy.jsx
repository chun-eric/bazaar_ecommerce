import { assets } from "../assets/assets";

const Policy = () => {
  return (
    <div className='flex flex-col justify-around gap-12 my-10 text-xs text-center text-gray-700 sm:gap-20 py-28 sm:flex-row sm:text-sm md:text-base'>
      <div className=''>
        <img
          src={assets.exchange_icon}
          alt='exchange_icon'
          className='w-10 m-auto mb-5 sm:w-12'
        />
        <p className='text-lg font-semibold text-slate-850'>
          Easy Exchange Policy
        </p>
        <p className='text-[0.9rem] text-gray-600'>
          Hassle Free Exchange Policy
        </p>
      </div>
      <div className=''>
        <img
          src={assets.quality_icon}
          alt='return icon'
          className='w-10 m-auto mb-5 sm:w-12'
        />
        <p className='text-lg font-semibold text-slate-850'>
          30 Days Return Policy
        </p>
        <p className='text-gray-600 text-[0.9rem]'>
          Return it anytime within 30 days.
        </p>
        <p className='text-gray-600 text-[0.9rem]'>Free of charge</p>
      </div>
      <div className=''>
        <img
          src={assets.support_img}
          alt='customer support icon'
          className='w-8 m-auto mb-5 sm:w-12'
        />
        <p className='text-lg font-semibold text-slate-850'>
          Awesome Customer Support
        </p>
        <p className='text-gray-600 text-[0.9rem]'>
          Fast 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default Policy;
