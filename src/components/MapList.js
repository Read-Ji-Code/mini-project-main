import React from "react";

const MapList = ({ maps }) => {
    return (
        <div>
            {maps.map(map => (
                <div key={map.uc_seq}>
                    <h3>{map.title}</h3>
                    <p>Address: {map.addr1}</p>
                    <p>Representative Menu: {map.rprsntv_menu}</p>
                </div>
            ))}
        </div>
    );
};

export default MapList;
