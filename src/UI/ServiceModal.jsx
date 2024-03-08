import { Dialog } from "@mui/material";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import AddServiceForm from "./AddServiceForm";

const ServiceModal = forwardRef(function ServiceModal(props, ref) {
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
      sx={{ backdropFilter: "blur(2px) sepia(5%)" }}
      onClose={closeModal}
      fullWidth
      PaperProps={{ sx: { borderRadius: "15px" } }}
    >
      <div style={{ width: "100%" }}>
        <header className="head">
          <p className="p-2 px-4 fs-4">Add Service</p>
        </header>
        <AddServiceForm close={closeModal} />
      </div>
    </Dialog>,
    document.getElementById("root")
  );
});

export default ServiceModal;
