import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Link to='/collection'>
      <div className='flex flex-col mt-12 border border-gray-400 sm:flex-row h-[600px]'>
        {/* HERO LEFT */}

        <div className='flex items-center justify-center w-full py-10 sm:w-1/2 sm:py-0'>
          <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
              <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
              <p className='text-sm font-medium uppercase md:text-base '>
                SEE OUR
              </p>
            </div>
            <h1 className='text-3xl sm:py-3 lg:text-4xl leading-relaxed font-["Prata"] '>
              Latest Collection
            </h1>
            <div className='flex items-center gap-2'>
              {" "}
              <p className='uppercase font-semibold text-sm md:text-base text-[#414141]'>
                SHOP NOW
              </p>
              <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
            </div>
          </div>
        </div>

        {/* HERO RIGHT */}
        <img
          src={assets.hero_img3}
          alt='hero_image'
          className='object-cover w-full sm:w-1/2'
        />
      </div>
    </Link>
  );
};

export default Hero;
