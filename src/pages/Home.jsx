import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";

const Home = () => {
  return (
    <div className='my-2'>
      <Hero />
      <LatestCollection />
      <BestSeller />
    </div>
  );
};

export default Home;
