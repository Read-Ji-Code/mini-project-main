import React, { useEffect, useState } from "react";

const GetMapInfo = () => {
  
  const [mapInfo, setMapInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://10.125.121.222:8080/mapInfoEng', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        setMapInfo(data);
        console.log('데이터 요청 성공:', data);
      } catch (error) {
        console.error('데이터 요청 실패 : ', error.message);
      }
    };

    fetchData();
  }, []);

  // 상태에 저장된 데이터를 사용할 수 있습니다.
  // 예를 들어, 다른 컴포넌트로 전달하거나 렌더링할 수 있습니다.
  return (
    <div>
      {mapInfo && (
        <div>
          {/* 상태에 저장된 데이터를 출력하거나 활용합니다. */}
          <p>맵 정보: {mapInfo.someProperty}</p>
        </div>
      )}
    </div>
  );
};

export default GetMapInfo;
