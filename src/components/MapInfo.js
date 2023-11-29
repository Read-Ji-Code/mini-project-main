import React, { useEffect, useRef, useState } from "react";
import TailSelect from "./TailSelect";
const MapInfo = () => {
  const [mapInfo, setMapInfo] = useState([]);
  const [select, setSelect] = useState();
  const selRef = useRef();
  const [selTag, setSelTag] = useState();
  
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
  let gugun = new Set();
useEffect(() => {
  if (!mapInfo) return;
  let guguns = mapInfo.map(item => 
    item.gugunNm
    )
    console.log(guguns)
    
  guguns.map(item => gugun.add(item));
  gugun = [...gugun];
  console.log(gugun)
  setSelect(
    <div>
    <label>구/군 선택하세요!</label>
      <select ref={selRef} id='sel' name='sel' onChange={handleSelChange}>
        {gugun.map(item => <option value={item}>{item}</option>)}
        
      </select>

    </div>
    )

    
},[mapInfo])

const handleSelChange = () => {
  setSelTag(
    mapInfo.filter(item => item.gugunNm === selRef.current.value)
    .map(map => (
      <div key={map.ucSeq}>
        <img src={map.mainImgThumb} alt="Thumbnail" />
        <p>Title: {map.title}</p>
        <p>Address: {map.addr1}</p>
        <p>Menu: {map.rprsntvmenu}</p>
        <p>Menu Info: {map.itemcntnts}</p>
        <p>LAT: {map.lat}</p>
        <p>LNG: {map.lng}</p>
      </div>
))
  )

}

    

  return (
    
     <div>
      {select&&select}
       <div>
        {selTag&&selTag}
       </div>
    </div>
  );
};

export default MapInfo;
