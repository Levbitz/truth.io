import React, { useState } from "react";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

const MAX_RATING = 4;
const MIN_RATING = 1;

function Rating() {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() > 0.5);
  return (
    <div>
      <div className="ratingDiv">
        <span style={{ marginRight: 10 }} className="rating black-text">
          {Array(rating).length}.5
        </span>
        <span className="stars">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <TiStarFullOutline key={i} />
            ))}

          <TiStarHalfOutline />
        </span>
      </div>
      <div>
        {hasPrime && (
          <span>
            <div className="bestsellerBadge">Bestseller</div>
          </span>
        )}
      </div>
    </div>
  );
}

export default Rating;
