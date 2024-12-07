const Subscribe = () => {
  return (
    <div className='text-center bg-[#ffe0e5] py-12'>
      <p className='mt-2 text-2xl font-medium text-slate-950'>
        Subscribe & get 15% off
      </p>
      <p className='px-2 mt-3 text-base text-gray-700'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className='max-w-lg px-4 mx-auto'>
        <form className='flex flex-col w-full gap-2 mt-6 gapitems-center xs:flex-row xs:gap-0'>
          <input
            type='email'
            className='w-full h-12 px-4 border border-r-0 outline-none'
            placeholder='Enter your email'
            required
          />
          <button
            className='h-12 px-10 text-xs text-white bg-black whitespace-nowrap'
            type='submit'
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
