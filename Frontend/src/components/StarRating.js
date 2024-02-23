import React from 'react';
import { useState } from 'react';
import { FaStar } from "react-icons/fa";

const StarRating = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;

                return (
                    <div className="positionStarRating">
                        <label>
                            <input
                                type="radio"
                                name="rating"
                                className="radioStar"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                            />
                            <FaStar
                                className="star"
                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                size={40}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    </div>
                );
            })}
            <p>la note est {rating}</p>
        </div>
    );
};

export default StarRating;