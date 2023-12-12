import React, { useState, useEffect } from 'react';
import ReviewTable from './ReviewTable';

const Review = ({imageURL, title}) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    content: '',
    date: '',
    score: 3,
  });
  const [avgStar, setAvgStar] = useState();
  const storedUsername = localStorage.getItem('username');
  const token = localStorage.getItem('token');
  const tokenExists = !!token;
  const AverageStar = (realPoint) => {
 
    if (realPoint.length === 0) {
      return 0;
    }
    
    const sum = realPoint.reduce((acc, score) => acc + score, 0);
    const avg = (sum / realPoint.length).toFixed(2);
    return avg;
  };
  
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

  let point = null;
  let realPoint = null;

  useEffect(()=>{
    point = reviews.filter( item => item.restaurant ===title);
    realPoint = point.map( point => point.score)
    setAvgStar(AverageStar(realPoint))
  },[reviews])
  
  useEffect(() => {
    fetchData();
  }, []);


  const addReview = () => {
    if (newReview.content.trim() !== '' && newReview.score >= 1 && newReview.score <= 5 && storedUsername) {
      const postData = {
        username:storedUsername,
        content: newReview.content,
        score: newReview.score,
        restaurant: title,
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
          fetchData();
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
      <div className='m-2 p-2 text-gray-700'>THANK YOU FOR {storedUsername}'s REVIEW </div>
      
        {<img src= {imageURL} className="rounded-md mb-4" alt="Review Thumbnail"/>}
      <div className="text-l font-bold mb-2">{title} </div>
      <div className='text-gray-500'>Rating Score:{avgStar}</div>
      
      </div>
      {tokenExists && (
        <div>

        
      <div className='cursor-pointer flex justify-end'>
  
        <span onClick={() => handleStarClick(1)} style={{ color: newReview.score >= 1 ? 'gold' : 'black' }}>★</span>
        <span onClick={() => handleStarClick(2)} style={{ color: newReview.score >= 2 ? 'gold' : 'black' }}>★</span>
        <span onClick={() => handleStarClick(3)} style={{ color: newReview.score >= 3 ? 'gold' : 'black' }}>★</span>
        <span onClick={() => handleStarClick(4)} style={{ color: newReview.score >= 4 ? 'gold' : 'black' }}>★</span>
        <span onClick={() => handleStarClick(5)} style={{ color: newReview.score >= 5 ? 'gold' : 'black' }}>★</span>
        <button className = 'm-2 px-1 py-1 cursor-pointer rounded-md  bg-green-400' onClick={addReview}>SEND REVIEW</button>  

      </div>
      
      <textarea className='border-green-400 border-2 rounded-md'
      
        rows="3"
        cols="42"
        placeholder="WRITE HERE."
        value={newReview.content}
        onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
      ></textarea>
    </div>
      )}
      <div>
        <div>
        <ReviewTable reviews={reviews} title={title} />
        </div>
      </div>
      </div>
    
  );
};

export default Review;