import { forwardRef, useImperativeHandle, useState } from "react";
import "../index.css";
import { createPortal } from "react-dom";
import { Dialog } from "@mui/material";
import AddCaseForm from "./AddCaseForm";

const Modal = forwardRef(function Modal(props, ref) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    showModal() {
      setIsOpen(true);
    },
  }));

  const closeModal = () => {
    setIsOpen(false);
  };

  return createPortal(
    <Dialog
      open={isOpen}
      sx={{
        backdropFilter: "blur(2px) sepia(5%)",
      }}
      PaperProps={{ sx: { borderRadius: "15px" } }}
      fullWidth
      onClose={closeModal}
    >
      <div>
        <header className="head">
          <p className="p-2 px-4 fs-4">Add Case</p>
        </header>

        <AddCaseForm close={closeModal} />
      </div>
    </Dialog>,
    document.getElementById("root")
  );
});

export default Modal;
