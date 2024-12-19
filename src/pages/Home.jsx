import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import Policy from "../components/Policy";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <div className='flex flex-col -mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw]'>
      <div className='w-full bg-[#FFF1F3]'>
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Hero />
        </div>
      </div>

      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <LatestCollection />
      </div>

      <div className='w-full bg-[#F8F8F8]'>
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          {" "}
          <BestSeller />
        </div>
      </div>

      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Policy />
      </div>
      <div className='w-full'>
        <Subscribe />
      </div>
    </div>
  );
};

export default Home;
