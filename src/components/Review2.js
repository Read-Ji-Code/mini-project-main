import React from 'react'
import { useState, useEffect } from 'react';
const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = () => {
          fetch("http://10.125.121.222:8080/api/reviews/selecting")
            .then((response) => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then((data) => {
              setReviews(data);
            })
            .catch((error) => {
              console.error("데이터 요청 실패: ", error.message);
            });
        };
    
        fetchData();
      }, []);

  return (
    <div>
      <div>
        <h3>리뷰 목록</h3>
        
        <ul> 
          {/* {reviews.map((review) => (
            <li key={review.idx}>
              <strong>Username:</strong> {review.username}, 
              <strong>Content:</strong> {review.content}, 
              <strong>Date:</strong> {review.date}, 
              <strong>Score:</strong> {review.score}
            </li>
          ))} */}
          <div>
          <ReviewTable reviews={reviews} />
          </div>
            
          
        </ul>
      </div>
    </div>
  )
}

export default Review
