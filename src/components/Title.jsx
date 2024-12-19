import PropTypes from "prop-types";

const Title = ({ text1, text2 }) => {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-2 mx-auto mb-3 md:flex-row'>
      <p className='text-xl text-[#ff64c3] uppercase sm:text-2xl md:text-3xl '>
        {text1}
        <span className='pl-2 text-xl font-medium text-gray-700 uppercase sm:text-2xl md:text-3xl sm:text-center'>
          {text2}
        </span>
      </p>
      <p className='w-5 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  );
};

Title.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default Title;
