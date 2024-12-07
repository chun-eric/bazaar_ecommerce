import { assets } from "../assets/assets";

const Policy = () => {
  return (
    <div className='flex flex-col justify-around gap-12 py-20 text-xs text-center text-gray-700 sm:flex-row sm:gap-4 sm:text-sm md:text-base'>
      <div className=''>
        <img
          src={assets.exchange_icon}
          alt='exchange_icon'
          className='w-12 m-auto mb-5'
        />
        <p className='text-lg font-semibold text-slate-950'>
          Easy Exchange Policy
        </p>
        <p className='text-[0.9rem] text-gray-600'>
          We Offer Hassle Free Exchange Policy
        </p>
      </div>
      <div className=''>
        <img
          src={assets.quality_icon}
          alt='return icon'
          className='w-12 m-auto mb-5'
        />
        <p className='text-lg font-semibold text-slate-950'>
          30 Days Return Policy
        </p>
        <p className='text-gray-600 text-[0.9rem]'>
          Return it anytime within 30 days free of charge
        </p>
      </div>
      <div className=''>
        <img
          src={assets.support_img}
          alt='customer support icon'
          className='w-12 m-auto mb-5'
        />
        <p className='text-lg font-semibold text-slate-950'>
          Awesome Customer Support
        </p>
        <p className='text-gray-600 text-[0.9rem]'>
          Always 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default Policy;
