import React, { useEffect, useState } from "react";
import MapList from "./MapList"; 
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

  return mapInfo ? (
    <>
      <MapList maps={mapInfo} />
    </>
  ) : null;
};

export default MapInfo;
