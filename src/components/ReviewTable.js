import React from 'react';

const ReviewList = ({ reviews, title }) => {
    
    return (
      <div>
        <h3 className='font-sans'>-------------------REVIEW LIST-------------------</h3>
        {reviews.filter(item => item.restaurant===title)
        .map((review) => (
          <ReviewCard key={review.idx} review={review} />
        ))}
      </div>
    );
    
  };
  const Star = ({review}) => {
    const fullStars = Math.floor(review.score);
    let stars = [];
    for (let i =1; i <= fullStars; i++) {
      stars.push(<span key={i} style={{color:'yellowgreen'}}>&#9733;</span>);
    }
    return(
      <div>{stars}</div>
    )
  }

  
  
const ReviewCard = ({ review }) => {
  return (
<div className='border rounded-md'>
    <div>
        <div className='review-info flex justify-evenly'>
            <div>{review.username} </div>
            <div><Star review={review}/></div>
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
