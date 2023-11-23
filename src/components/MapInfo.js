import React, { useEffect, useState } from "react";

const MapInfo = () => {
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

  return (
    <div>
      {mapInfo ? (
        <div>
          {mapInfo.map(map => (
            <div key={map.uc_seq}>
              <p>Title : {map.title}</p>
              <p>Address: {map.addr1}</p>
              
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MapInfo;
