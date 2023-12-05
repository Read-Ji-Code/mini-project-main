import React, { useEffect, useState } from "react";
import MapInfoModal from "./MapInfoModal"; // Import your modal component
const { kakao } = window;

const Map = ({xgu}) => {
  const [mapInfo, setMapInfo] = useState([]);
  const [selectedMarkerInfo, setSelectedMarkerInfo] = useState(null);

  const handleImageClick = (mapData) => {
    // 클릭한 이미지에 해당하는 마커 정보를 업데이트
    setSelectedMarkerInfo(mapData);
    // 추가로 다른 작업을 수행할 수 있습니다.
  };

  useEffect(() => {
    // Fetch map data
    const fetchData = async () => {
      try {
        const response = await fetch('http://10.125.121.222:8080/mapInfoEng');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMapInfo(data);
      } catch (error) {
        console.error('Data fetching error:', error.message);
      }
    };

    fetchData();
  }, []);
 
  useEffect(() => {
    
    if (mapInfo.length > 0) {
      const container = document.getElementById('map2');
      const options = {
        center: new kakao.maps.LatLng(35.114346619720365, 129.03941996724868),
        level: 5
      };

      const map = new kakao.maps.Map(container, options);

      mapInfo.forEach((mapData) => {
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(mapData.lat, mapData.lng),
        });

        kakao.maps.event.addListener(marker, 'click', () => {
          setSelectedMarkerInfo(mapData);
        });

        const infowindow = new kakao.maps.InfoWindow({
          content: `<div><img src="${mapData.mainImgThumb}" style="width:350px; height:250px; border-radius: 10px;"</div>` // Customize the content as needed
        });

        kakao.maps.event.addListener(marker, 'mouseover',
        function() {
          infowindow.open(map, marker); 
        }
        );

        kakao.maps.event.addListener(marker, 'mouseout', function() {
          infowindow.close(); 
        });
        marker.setMap(map);
      });
    }
  }, [mapInfo]);

  return (
    <div>
      <div id="map2" style={{ width: '100%', height: '100vh', margin:'auto'}}></div>
      {selectedMarkerInfo && (
        <MapInfoModal  
          info={selectedMarkerInfo}
          
          onClose={() => setSelectedMarkerInfo(null)}
        />
      )}
       <div>
    </div>
    </div>
  );
};

export default Map;