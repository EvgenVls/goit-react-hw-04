import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({
  obj: { urls, description },
  modalIsOpen,
}) {
  function openModal() {
    modalIsOpen(true);
  }

  function closeModal() {
    modalIsOpen(false);
  }

  return (
    <Modal isOpen={openModal} onRequestClose={closeModal} style={customStyles}>
      <img src={urls.regular} alt={description} />
    </Modal>
  );
}
