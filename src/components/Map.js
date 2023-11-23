import React, { useEffect } from "react";
import MapInfo from "./MapInfo";
const { kakao: kakaoObject } = window;

function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new kakaoObject.maps.LatLng(35.114346619720365, 129.03941996724868), // 지도의 중심좌표.
      level: 5 // 지도의 레벨(확대, 축소 정도)
    };
    new kakaoObject.maps.Map(container, options); // 지도 생성 및 객체 리턴
  }, []);

  return (

    
      <div id="map" style={{ width: '600px', height: '100vh', margin: 'auto' }}></div>
    
    
  );
}

export default KakaoMap;
