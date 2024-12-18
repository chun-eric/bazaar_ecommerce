import PropTypes from "prop-types";
import Star from "./Star";

const RenderStars = ({ rating, showScore = false }) => {
  const normalizedRating = Math.min(5, Math.max(0, Number(rating) || 0));

  return (
    <>
      <div className='flex items-center gap-1'>
        {[0, 1, 2, 3, 4].map((index) => {
          const fill = Math.min(1, Math.max(0, normalizedRating - index));
          return <Star key={index} fill={fill} />;
        })}
        <div className=''>
          {showScore && (
            <span className='ml-2 text-sm'>
              ({normalizedRating.toFixed(1)})
            </span>
          )}
        </div>
      </div>
    </>
  );
};

RenderStars.propTypes = {
  rating: PropTypes.number.isRequired,
  showScore: PropTypes.bool,
};

export default RenderStars;
