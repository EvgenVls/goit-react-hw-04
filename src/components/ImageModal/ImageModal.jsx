import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal(url, descr, modalIsOpen) {
  return (
    <Modal isOpen={modalIsOpen}>
      <img src={url} alt={descr} />
    </Modal>
  );
}
