import React, { useState, useEffect } from 'react';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [newReviews, setNewReviews] = useState({
    username: '',
    content: '',
    date: '',
    score: 0,
  });

  useEffect(() => {
    const fetchData = () => {
      fetch("http://10.125.121.222:8080/api/reviews/selecting", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
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

  const addReviews = () => {
    if (newReviews.content.trim() !== '') {
      const postData = {
        username: newReviews.username,
        content: newReviews.content,
        date: new Date().toISOString(),
        score: newReviews.score,
      };

      fetch("http://10.125.121.222:8080/api/reviews/adding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
          setReviews(data);
        })
        .catch((error) => {
          console.error("데이터 전송 실패: ", error.message);
        });
    }
  };

  return (
    <div>
      <h2>리뷰 남기기</h2>
      
      <textarea
        rows="2"
        cols="50"
        placeholder="리뷰를 작성하세요."
        value={newReviews.content}
        onChange={(e) => setNewReviews({ ...newReviews, content: e.target.value })}></textarea>
      
      <button onClick={addReviews}>리뷰 남기기</button>
      
      <div>
        <h3>리뷰 목록</h3>
        
        <ul>
          {reviews.map((reviews) => (
            <li key={reviews.idx}>
            <strong>Username:</strong> {reviews.username}, 
            <strong>Content:</strong> {reviews.content}, 
            <strong>Date:</strong> {reviews.date}, 
            <strong>Score:</strong> {reviews.score}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Review;
