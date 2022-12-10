import React from 'react';
import Star from './../Assets/star_FILL0_wght400_GRAD0_opsz48 1.png';

export default function UserReview({ image }) {

  let stars = [];

  for(let i = 0; i < 6; i++) {
    stars.concat(<Star/>);
    i++;
  };

  console.log(stars)

  return (
    <div className='user-review'>
        <img src={image} alt="user-img" />

        <div className='rating'>{stars}</div>

        <p className='user-statement'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
</p>
    </div>
  )
}
