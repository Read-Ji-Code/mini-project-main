import React, { useEffect, useRef, useState } from "react";

const MapInfoX = ({ xgu }) => {
  const [mapInfo, setMapInfo] = useState([]);
  const [select, setSelect] = useState();
  const selRef = useRef();
  const [selTag, setSelTag] = useState();

  useEffect(() => {
    const fetchData = () => {
      fetch("http://10.125.121.222:8080/mapInfoEng", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setMapInfo(data);
          console.log("데이터 요청 성공:", data);
        })
        .catch((error) => {
          console.error("데이터 요청 실패: ", error.message);
        });
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!mapInfo) return;

    let gugun = new Set(mapInfo.map((item) => item.gugunNm));
    gugun = [...gugun];

    setSelect(
      <div>
        <label className="m-10 p-5">SELECT DISTRICT!</label>
        <select ref={selRef} id="sel" name="sel" onChange={handleSelChange}>
          <option value="">{xgu}</option>
          {gugun.map((item) => (
            <option key={`x${item}`} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
    
    setSelTag(
      mapInfo.map((map) => (
        <div key={map.ucSeq} className="p-10 m-5 border border-solid border-gray border-opacity-50 rounded-lg">
          <div >
            <img src={map.mainImgThumb} alt="Thumbnail" />
            <table>
              <tbody>
                <tr>
                  <td colSpan="2">
                    <h3>
                      <p>{map.title}</p>
                    </h3>
                  </td>
                </tr>
                <tr>
                  <th>Menu</th>
                  <td>{map.rprsntvmenu}</td>
                </tr>
                <tr>  
                  <th>Address</th>
                  <td>{map.addr1}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))
    );
  }, [mapInfo]);

  const handleSelChange = () => {
    setSelTag(
      mapInfo
        .filter((item) =>
          selRef.current.value === "" ? item : item.gugunNm === selRef.current.value
        )
        .map((map) => (
          <div key={map.ucSeq} className="p-10 m-5 border border-solid border-gray border-opacity-50 rounded-lg">
            <img src={map.mainImgThumb} alt="Thumbnail" />
            <table>
              <tbody>
                <tr>
                  <td colSpan="2">
                    <h3>
                      <p>{map.title}</p>
                    </h3>
                  </td>
                </tr>
                <tr>
                  <th>Menu</th>
                  <td>{map.rprsntv_menu}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{map.addr1}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
    );
    window.location.href = `/detail/${selRef.current.value}`;
  };

  return (
    <div className="">
      {select && select}
      <div>{selTag && selTag}</div>
    </div>
  );
};

export default MapInfoX;