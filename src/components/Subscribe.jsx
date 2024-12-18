const Subscribe = () => {
  return (
    <div className='text-center bg-[#FED2D1] py-16'>
      <p className='mt-2 text-xl sm:text-2xl font-medium text-slate-950 font-[outfit]'>
        Subscribe & get 15% off
      </p>
      <p className='flex items-center mx-auto px-2 mt-3 text-sm text-gray-700 sm:text-base max-w-[400px]'>
        Join our email list and be the first to get exclusive offer on limited
        products.
      </p>
      <div className='max-w-lg px-4 mx-auto'>
        <form className='flex flex-col items-center w-full gap-2 mt-6 xs:flex-row xs:gap-0'>
          <input
            type='email'
            className='w-full h-12 px-4 border border-r-0 outline-none xs:w-3/4'
            placeholder='Enter your email'
            required
          />
          <button
            className='flex items-center justify-center w-full h-12 px-10 text-xs text-white bg-black whitespace-nowrap xs:w-1/4 '
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
