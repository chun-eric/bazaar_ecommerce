import PropTypes from "prop-types";
import Star from "./Star";

const RenderStars = ({ rating }) => {
  // Ensure rating is between 0 and 5
  // number doesnt over 5
  // number doesnt under 0
  // eg Math.min(5, 4)
  const normalizedRating = Math.min(5, Math.max(0, Number(rating) || 0));

  return (
    <div className='flex items-center gap-1'>
      {[0, 1, 2, 3, 4].map((index) => {
        // Calculate the fill value for each star
        // e.g First star (index 0):
        // 3.7 - 0 = 3.7
        // Math.min(1, 3.7) = 1  --> full star
        // Fourth star (index 3):
        // 3.7 - 3 = 0.7
        // Math.min(1, 0.7) = 0.7  // Partial star (70% filled)
        const fill = Math.min(1, Math.max(0, normalizedRating - index));
        return <Star key={index} fill={fill} />;
      })}
    </div>
  );
};

RenderStars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RenderStars;
