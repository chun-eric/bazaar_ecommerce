import Title from "../components/Title";
import { assets } from "../assets/assets";
import Subscribe from "../components/Subscribe";

const About = () => {
  return (
    <div className='flex flex-col items-center w-full border-t'>
      <div className='pt-20 text-2xl text-center '>
        <Title text1={"Our"} text2={"Story"} />
      </div>
      <div className='flex flex-col items-center gap-16 my-16 '>
        <img
          src={assets.about_img}
          alt='about us image'
          className='w-full md:max-w-[550px]'
        />
        <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-1/2'>
          <b className='text-lg text-gray-800'>Our Mission</b>
          <p className='text-indent-8'>
            Bazaar is redefining luxury fashion for the digital age. Born from
            the belief that exceptional style should be accessible to all, we've
            created more than just a shopping destination – we've built a
            community where fashion-forward individuals discover their unique
            voice through carefully curated collections.
          </p>
          <p className='text-indent-8'>
            Our journey started with a vision to transform how people experience
            fashion online. We handpick each piece in our collection,
            collaborating with emerging designers and established houses alike
            to bring you distinctive styles that transcend trends. From timeless
            essentials to bold statement pieces, every item tells a story of
            quality, creativity, and conscious craftsmanship.
          </p>

          <p className='text-indent-8'>
            Our mission is simple yet ambitious: to empower individuals to
            express their authentic selves through fashion. We believe that when
            you feel confident in what you wear, you're unstoppable. That's why
            we're committed to not just selling clothes, but to creating an
            immersive experience that inspires, guides, and celebrates your
            personal style journey.
          </p>
        </div>
      </div>

      {/* Spacer */}
      <div className='h-8'></div>

      {/* Mini Title */}
      <div className='py-10 pt-12 text-xl text-center border-t'>
        <h3 className='font-bold'>What Makes Our Products Special</h3>
      </div>

      {/* Benefits */}
      <div className='flex flex-col mb-32 text-sm md:flex-row'>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20 transition-all duration-100 ease-in-out hover:bg-[#e0ffe0] '>
          <b className='text-base'>Quality Aussurance</b>
          <p className='text-gray-600 '>
            We carefully test and choose products that will last longer and work
            better for you, saving you time and money in the long run.
          </p>
        </div>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20 transition-all duration-100 ease-in-out hover:bg-[#e0ffe0] '>
          <b className='text-base'>Convenience</b>
          <p className='text-gray-600'>
            Find and buy exactly what you need in just a few clicks - no
            complicated menus or confusing checkout processes to slow you down.
          </p>
        </div>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20 transition-all duration-100 ease-in-out hover:bg-[#e0ffe0] '>
          <b className='text-base'>Exceptional Service</b>
          <p className='text-gray-600'>
            Get expert help whenever you need it from real people who actually
            care about solving your problems, not just following a script.
          </p>
        </div>
      </div>

      {/* Subscribe Component  */}
      <div className='w-full'>
        <Subscribe />
      </div>
    </div>
  );
};

export default About;
