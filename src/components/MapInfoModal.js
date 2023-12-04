import { useEffect } from "react";
import Modal from "react-modal";

const MapInfoModal = ({ info, onClose }) => {
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  return (
    <div>
      <Modal
        isOpen={true}
        className="fixed inset-0 flex items-center justify-center"
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            position: 'absolute',
            maxWidth: '400px',
            width: '100%',
            maxHeight: '700px',
            height: '100%',
            margin: 'auto',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
          }
        }}
      >
        <div>
          <button onClick={onClose} className="absolute top-1 right-1 px-4 py-1 bg-green-500 rounded-md hover:bg-green-600 cursor-pointer">X</button>
        </div>
        <div>
          <span className="text-xl font-bold mb-2"><img src={info.mainImgNormal} alt="ThumbNail" className="rounded-md mb-4"/></span>
          <table>
            <tbody>
              <tr>
                <th colSpan="2"><h3><p className="mb-2">{info.title}</p></h3></th>
              </tr>
              <tr className="p-2 border border-solid border-gray border-opacity-50 rounded-lg">
                <td colSpan="2">{info.itemcntnts}</td>
              </tr>
              <tr>
                <th>Menu</th>
                <td>{info.rprsntvmenu}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{info.addr1}</td>
              </tr>
              <tr>
                <th>Opening hours</th>
                <td>{info.usageDayWeekAndTime}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </div>
  );
};

export default MapInfoModal;