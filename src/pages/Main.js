import React from "react";
import Header from "./Header";
import Map from "../components/Map";
import MapInfo from "../components/MapInfo";
const Main = () => {
  return (
    
    <div className="overflow-hidden ">
        <Header />
        <div className="bg-gray-50">
          <div className="grow flex w-full max-w-screen-xl mx-auto justify-center">  
          <div className="w-1/2 h-screen"><Map /></div>
          <div className="w-1/2 h-screen overflow-auto"><MapInfo/></div> 
        </div>
        </div>
    </div>
  );
};

export default Main;
