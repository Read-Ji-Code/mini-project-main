import React from "react";
import Header2 from "./Header";
// import MapInfo from "../components/MapInfo";
// import Map from "../components/Map"
import { useParams } from "react-router-dom";
import MapX from "../components/MapX";
import MapInfoX from "../components/MapInfoX";
const MainDetail = () => {
  
  const xgu = useParams().xgu; 
  return (
    <div className="overflow-hidden">
        <Header2 />
        <div className="grow flex w-full max-w-screen-2xl mx-auto">
          <div className="w-1/2 h-screen"><MapX xgu={xgu} /></div>
          <div className="w-1/2 h-screen overflow-auto"><MapInfoX xgu={xgu}/></div>
          
        </div>
    </div>
  );
};

export default MainDetail;
