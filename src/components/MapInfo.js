import React, { useEffect, useState } from "react";

const MapInfo = () => {
  const [mapInfo, setMapInfo] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://10.125.121.222:8080/mapInfoEng', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setMapInfo(data);
          console.log('데이터 요청 성공:', data);
        })
        .catch(error => {
          console.error('데이터 요청 실패: ', error.message);
        });
    };

    fetchData();
  }, []);

  return (
    
    <div>
      {mapInfo.map(map => (
        <div key={map.ucSeq}>
          <img src={map.mainImgThumb} alt="Thumbnail" />
          <p>Title: {map.title}</p>
          <p>Address: {map.addr1}</p>
          <p>Menu: {map.rprsntvmenu}</p>
          <p>Menu Info: {map.itemcntnts}</p>
          {/* <p>LAT: {map.lat}</p> */}
          {/* <p>LNG: {map.lng}</p> */}
        </div>
      ))}
    </div>
  );
};

export default MapInfo;
