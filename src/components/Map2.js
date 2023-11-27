import React, { useState, useEffect } from "react";
import MapInfo from "./MapInfo";
const { kakao } = window;

function KakaoMap() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMarkerInfo, setSelectedMarkerInfo] = useState(null);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(35.114346619720365, 129.03941996724868),
      level: 5
    };

    const map = new kakao.maps.Map(container, options);

    const markerPositions = [
      { position: new kakao.maps.LatLng(35.114346619720365, 129.03941996724868), info: "Marker 1 information" },
      // Add more positions and information as needed
    ];

    markerPositions.forEach((markerData, index) => {
      const marker = new kakao.maps.Marker({
        position: markerData.position
      });

      // Add a click event listener to each marker
      kakao.maps.event.addListener(marker, 'click', () => {
        setModalVisible(true);
        setSelectedMarkerInfo(markerData.info);
      });

      marker.setMap(map);
    });

  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <div id="map" style={{ width: '600px', height: '100vh', margin: 'auto' }}></div>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{selectedMarkerInfo}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default KakaoMap;
