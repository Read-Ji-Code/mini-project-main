import React, { useState, useEffect } from 'react';
import ReviewTable from './ReviewTable';
const Review = ({imageURL, title}) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    content: '',
    date: '',
    score: 0,
  });
  
  const storedUsername = localStorage.getItem('username');
  const token = localStorage.getItem('token');
  console.log(token)
  useEffect(() => {
    const fetchData = () => {
      fetch("http://10.125.121.222:8080/api/public/reviews/selecting")
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

  const addReview = () => {
    if (newReview.content.trim() !== '' && newReview.score >= 1 && newReview.score <= 5 && storedUsername) {
      const postData = {
        username:storedUsername,
        content: newReview.content,
        score: newReview.score,
      };

      fetch('http://10.125.121.222:8080/api/reviews/adding', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json',
          "Authorization" : `${token}`
        },
        body: JSON.stringify(postData),

      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("리뷰 전송 성공:", data);
          setReviews([...reviews, data]);
          setNewReview({
            username : storedUsername,
            content: '',
            score: 0,
            picture:0,
          });
        })
        .catch((error) => {
          console.error("데이터 전송 실패: ", error.message);
        });
    }
  };

  const handleStarClick = (value) => {
    setNewReview({ ...newReview, score: value });
  };

  return (
    <div>
      <div style={{textAlign:'center'}}>
      <p className='m-2 p-2' style={{ color:'blue'}}>THANK YOU FOR {storedUsername}'s REVIEW </p>
      
      <div>
        {<img src= {imageURL} className="rounded-md mb-4" alt="Review Thumbnail"/>}
      </div>
      <p className="text-l font-bold mb-2">{title} {reviews.score}</p>
      </div>
      <div className='cursor-pointer flex justify-end'>
        <span onClick={() => handleStarClick(1)} style={{ color: newReview.score >= 1 ? 'gold' : 'black' }}>★</span>
        <span onClick={() => handleStarClick(2)} style={{ color: newReview.score >= 2 ? 'gold' : 'black' }}>★</span>
        <span onClick={() => handleStarClick(3)} style={{ color: newReview.score >= 3 ? 'gold' : 'black' }}>★</span>
        <span onClick={() => handleStarClick(4)} style={{ color: newReview.score >= 4 ? 'gold' : 'black' }}>★</span>
        <span onClick={() => handleStarClick(5)} style={{ color: newReview.score >= 5 ? 'gold' : 'black' }}>★</span>
        <button className = 'm-2 px-1 py-1 cursor-pointer rounded-md  bg-green-400' onClick={addReview}>SEND REVIEW</button>  

      </div>
      
      <textarea className='border-green-600 border-2 rounded-md'
        rows="3"
        cols="42"
        placeholder="WRITE HERE."
        value={newReview.content}
        onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
      ></textarea>

      <div>
        <div>
        <ReviewTable reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default Review;