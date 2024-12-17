import PropTypes from "prop-types";

// generate and fill star
const Star = ({ fill }) => {
  return (
    <div className='relative w-6 h-6'>
      {/* Background star gray */}
      <svg viewBox='0 0 24 24' className='absolute w-6 h-6' fill='#e4e4e4'>
        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
      </svg>

      {/* Foreground star (filled portion) with orange color */}
      <svg
        viewBox='0 0 24 24'
        className='absolute w-6 h-6'
        // fill * 100 converts the 0-1 fill value to a percentage
        // For a half star (0.5 fill), it shows 50% of the orange star
        // For 0.7 fill, it shows 70% of the orange star
        style={{
          clipPath: `inset(0 ${100 - fill * 100}% 0 0)`,
        }}
        fill='#FF6443' // Updated to orange color
      >
        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
      </svg>
    </div>
  );
};

Star.propTypes = {
  fill: PropTypes.number.isRequired,
};

export default Star;
