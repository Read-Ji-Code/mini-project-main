import React from "react";
import Header2 from "./Header2";
import Map from "../components/Map";
import MapInfo from "../components/MapInfo";

const Main = () => {
  return (
    <div>
        <Header2 />
        <div>
          <Map />
          <MapInfo />
        </div>
    </div>
  );
};

export default Main;
