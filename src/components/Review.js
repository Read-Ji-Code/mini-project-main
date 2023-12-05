import React, { useState, useEffect } from 'react';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    content: '',
    date: '',
    score: 0,
  });
  const storedUsername = localStorage.getItem('username');
  const [username, setUsername] = useState(storedUsername || '');

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

    if (!storedUsername) {
      // API 호출을 통해 사용자 이름 가져오기
      // 예시: fetch("URL").then((response) => response.json()).then((data) => setUsername(data.username));
    } else {
      setUsername(storedUsername);
    }
  }, []);

  const addReview = () => {
    if (newReview.content.trim() !== '' && newReview.score >= 1 && newReview.score <= 5 && storedUsername) {
      const postData = {
        username: storedUsername,
        content: newReview.content,
        date: new Date().toISOString(),
        score: newReview.score,
      };

      fetch('http://10.125.121.222:8080/api/reviews/adding', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json',
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
            content: '',
            date: '',
            score: 0,
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
      <p>{storedUsername} SIR, WRITE REVIEW </p>
      <div>
        <span onClick={() => handleStarClick(1)} style={{ color: newReview.score >= 1 ? 'gold' : 'black' }}>★</span>
        <span onClick={() => handleStarClick(2)} style={{ color: newReview.score >= 2 ? 'gold' : 'black' }}>★</span>
        <span onClick={() => handleStarClick(3)} style={{ color: newReview.score >= 3 ? 'gold' : 'black' }}>★</span>
        <span onClick={() => handleStarClick(4)} style={{ color: newReview.score >= 4 ? 'gold' : 'black' }}>★</span>
        <span onClick={() => handleStarClick(5)} style={{ color: newReview.score >= 5 ? 'gold' : 'black' }}>★</span>
        <button className = "p-2" onClick={addReview}>SEND REVIEW</button>

      </div>
 
      <textarea
        rows="2"
        cols="50"
        placeholder="리뷰를 작성하세요."
        value={newReview.content}
        onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
      ></textarea>

      
    
      <div>
        <h3>리뷰 목록</h3>
        <ul>
          {reviews.map((review) => (
            <li key={review.idx}>
              <strong>Username:</strong> {review.username}, 
              <strong>Content:</strong> {review.content}, 
              <strong>Date:</strong> {review.date}, 
              <strong>Score:</strong> {review.score}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Review;
