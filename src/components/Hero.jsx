import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Link to='/collection'>
      <div className='bg-[#FFF1F3]'>
        <div className='flex flex-col text-center mt-12 md:flex-row md:min-h-[600px] max-w-[1280px] mx-auto '>
          {/* HERO LEFT */}

          <div className='flex items-center justify-center w-full py-10 md:w-1/2 sm:px-8'>
            <div className='text-[#414141] flex flex-col justify-center max-w-xl '>
              <p className='flex md:text-left sm:py-3 text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-relaxed font-["Prata"] text-zinc-950 justify-center pt-3 md:items-start'>
                30% OFF
              </p>

              <div className='flex flex-col items-center gap-2 py-4 mb-2 md:items-start'>
                <p className='text-2xl font-semibold text-black uppercase md:text-2xl'>
                  Instore and online
                </p>
                <p className='text-base font-medium text-zinc-850 font-inter md:text-left'>
                  Get Last-minute gifts at a great price
                </p>
              </div>
              <div className='flex mx-auto md:mx-0'>
                <Link to='/collection'>
                  <div className='flex w-full items-center justify-center gap-2 px-8 py-3 text-white bg-black max-w-[200px] hover:bg-zinc-800 transition-all ease-in-out duration-200 '>
                    {" "}
                    <p className='flex items-center text-sm font-semibold text-white uppercase md:text-base '>
                      SHOP NOW
                    </p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
                      />
                    </svg>
                    {/* <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p> */}
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* HERO RIGHT */}
          <div className='md:w-1/2'>
            <div className='relative md:w-full h-[400px] md:h-full'>
              <img
                src={assets.hero_image3}
                alt='hero_image'
                className='absolute inset-0 object-cover w-full h-full md:object-center'
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Hero;
