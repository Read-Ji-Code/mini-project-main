import React from 'react';

const ReviewList = ({ reviews }) => {
    return (
      <div>
        <h3 className='font-sans'>--------------------REVIEW LIST--------------------</h3>
        {reviews.map((review) => (
          <ReviewCard key={review.idx} review={review} />
        ))}
      </div>
    );
  };

const ReviewCard = ({ review }) => {
  return (
<div className='border rounded-md'>
    <div>
        <div className='review-info flex justify-evenly'>
            <div>{review.username} </div>
            <div>Score: {review.score}</div>
            <div>{review.date.slice(0, 10)}</div>
        </div>
    </div>
    <div className='border border-solid border-2 border-green-600 rounded-md'>
        <p className='h-20'>
            <div className='m-1 p-1'>
            {review.content}
            </div>
            </p>
    </div>
</div>


  );
};



export default ReviewList;
