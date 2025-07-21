import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './star.css';

function Star({ noofstars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <div className="starRating">Star Ratings
      {[...Array(noofstars)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <FaStar
            key={starIndex}
            className={starIndex <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default Star;
