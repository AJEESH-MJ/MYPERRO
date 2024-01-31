import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ filledStars }) => {
  return (
    <div className="flex text-yellow-500 text-[40px] -mb-4">
      {Array.from({ length: filledStars }, (_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  filledStars: PropTypes.number.isRequired,
};

export default StarRating;
