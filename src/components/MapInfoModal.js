// Example MapInfoModal.js
import React from "react";
import Modal from "react-modal";

const MapInfoModal = ({ info, onClose }) => {
  return (
    <div>
     <Modal isOpen={true}>
      
        <span onClick={onClose}>&times;</span>
        <div>
        <p>Title: {info.title}</p>
        <p>Address: {info.addr1}</p>
        <p>Menu: {info.rprsntv_menu}</p>
        <p>Menu Info: {info.itemcntnts}</p>
        </div>
      </Modal>  
    </div>
      
  );
};

export default MapInfoModal;
