import React from "react";
import Header2 from "./Header";
import MapInfo from "../components/MapInfo";
import Map from "../components/Map"

const Main = () => {
  return (
    <div className="overflow-hidden">
        <Header2 />
        <div className="grow flex w-full max-w-screen-2xl mx-auto">
          <div className="w-1/2 h-screen"><Map /></div>
          <div className="w-1/2 h-screen overflow-auto"><MapInfo /></div>
          
        </div>
    </div>
  );
};

export default Main;
