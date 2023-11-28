// Example MapInfoModal.js
import React from "react";

const MapInfoModal = ({ info, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>Title: {info.title}</p>
        <p>Address: {info.addr1}</p>
        <p>Menu: {info.rprsntv_menu}</p>
        <p>Menu Info: {info.itemcntnts}</p>
      </div>
    </div>
  );
};

export default MapInfoModal;
