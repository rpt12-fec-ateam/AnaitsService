import StarRatings from 'react-star-ratings';
import React from 'react';

const Stars = (props) => {
    return (
      <StarRatings
        rating={props.stars}
        starDimension="15px"
        starSpacing="1px"
        numberOfStars={5}
        starRatedColor="black"
      />
    );
} 

export default Stars;