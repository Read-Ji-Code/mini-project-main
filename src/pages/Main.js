import React from "react";
import Header2 from "./Header2";
import Map from "../components/Map";
import MapInfo from "../components/MapInfo";
import Map2 from "../components/Map2"
const Main = () => {
  return (
    <div>
        <Header2 />
        <div className="grow flex w-full max-w-screen-2xl mx-auto">
          <div className="w-1/2"><Map2 /></div>
          <div className="w-1/2 h-screen overflow-auto"><MapInfo /></div>
          
        </div>
    </div>
  );
};

export default Main;
