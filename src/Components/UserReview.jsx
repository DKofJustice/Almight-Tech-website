import React from 'react';
import Star from './../Assets/star_FILL0_wght400_GRAD0_opsz48 1.png';

export default function UserReview({ image }) {

  let stars = Array(5).fill(<img src={Star} className='star' alt='star' />);

  console.log(stars);

  return (
    <div className='user-review'>
        <img src={image} className='profile-image' alt="user-img" />

        <div className='rating'>{stars}</div>

        <p className='user-statement'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
</p>
    </div>
  )
}
