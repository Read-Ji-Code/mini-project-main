import React, { useEffect, useState } from "react";
import MapInfoModal from "./MapInfoModal";
import { useRecoilValue } from "recoil";
import { AtomX } from "./AtomX";

const { kakao } = window;

const Map = () => {
  const [mapInfo, setMapInfo] = useState([]);
  const [selectedMarkerInfo, setSelectedMarkerInfo] = useState(null);
  const xgu = useRecoilValue(AtomX);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://10.125.121.222:8080/mapInfoEng");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMapInfo(data);
      } catch (error) {
        console.error("Data fetching error:", error.message);
      }
    };

    fetchData();
    
  }, []);

  useEffect(() => {
    let sumLat = 0;
    let sumLng = 0;
    let filtedLength = 0;

    let tm ;
    if (xgu !== "") {
      tm = mapInfo
        .filter((item) => item.gugunNm.trim() === xgu)
       
    }
    else {
      tm = mapInfo
    }

    tm.map((item) => {
      filtedLength += 1;
      sumLat += item.lat;
      sumLng += item.lng;
    });
    
    // mapInfo.map((item) => {
    //   filtedLength += 1;
    //   sumLat += item.lat;
    //   sumLng += item.lng;
    // });
    let avgLat = sumLat / filtedLength;
    let avgLng = sumLng / filtedLength;


    if (mapInfo.length > 0) {
      const container = document.getElementById("map2");
      const options = {
        center: new kakao.maps.LatLng(avgLat, avgLng),
        level: 5,
      };

      const map = new kakao.maps.Map(container, options);

      // if ( xgu !== "") mapInfo = mapInfo.filter(item => item.gugunNm.trim() === xgu.trim())

        tm.map((mapData) => {
          let marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(mapData.lat, mapData.lng),
          });
          kakao.maps.event.addListener(marker, "click", () => {
            setSelectedMarkerInfo(mapData);
          });

          const infowindow = new kakao.maps.InfoWindow({
            content: `<img src="${mapData.mainImgThumb}" style="width:350px; height:250px; border-radius: 10px;"</div>`,
          });

          kakao.maps.event.addListener(marker, "mouseover", function () {
            infowindow.open(map, marker);
          });

          kakao.maps.event.addListener(marker, "mouseout", function () {
            infowindow.close();
          });
          marker.setMap(map);
        });

    }
  
  }, [mapInfo, xgu]);

  return (
    <div>
      <div
        id="map2"
        style={{ width: "100%", height: "100vh", margin: "auto" }}
      ></div>
      {/* <div id="map2" className='w-full h-screen m-auto -z-10'></div> */}
      {/* Modal for displaying detailed information */}
      {selectedMarkerInfo && (
        <MapInfoModal
          info={selectedMarkerInfo}
          onClose={() => setSelectedMarkerInfo(null)
          }
        />
      )}
    </div>
  );
};

export default Map;
