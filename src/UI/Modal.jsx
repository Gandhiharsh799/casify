import { forwardRef, useImperativeHandle, useState } from "react";
import "../index.css";
import { createPortal } from "react-dom";
import { Dialog } from "@mui/material";
import AddCaseForm from "./AddCaseForm";
// import {ClickAwayListener} from "@mui/material";


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

  // const handleAwayClick = ()=>{
  //   if(isOpen){
  //     closeModal();
  //   }
  // }

  return createPortal(
    
      <Dialog
        open={isOpen}
        sx={{
          backdropFilter: "blur(2px) sepia(5%)"
        }}
        PaperProps={{ sx: { borderRadius: "15px"} }}
        fullWidth
      >
        {/* <ClickAwayListener onClickAway={handleAwayClick}> */}
          <div style={{ width: "100%" }}>
            <header className="head">
              <p className="p-2 px-4 fs-4">Add Case</p>
            </header>

            <AddCaseForm close={closeModal} />
          </div>
        {/* </ClickAwayListener> */}
      </Dialog>
    ,
    document.getElementById("root")
  );
});

export default Modal;
