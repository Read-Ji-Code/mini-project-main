import React from "react";


const MapList = ({ maps }) => {
    return (
        
        <div>
            {maps.map(map => (
                <div key={map.uc_seq}>
                    <p>title : {map.title}</p>
                    <p>Address: {map.addr1}</p>
                    <p>Representative Menu: {map.rprsntv_menu}</p>
                </div>
            ))}
        </div>
        
    );
};

export default MapList;
