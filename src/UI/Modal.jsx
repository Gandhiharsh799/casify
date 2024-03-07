import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import "../index.css";

import { Dialog } from "@mui/material";
import AddCaseForm from "./AddCaseForm";


const Modal = forwardRef(function Modal(props, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null)

  useImperativeHandle(ref, () => ({
    showModal() {
      setIsOpen(true);
    },
  }));

  const closeModal = () => {
    setIsOpen(false);
  };

  // const hadleAwayClick = ()=>{
  //   if(isOpen){
  //     closeModal();
  //   }
  // }

  return (
    <Dialog
      open={isOpen}
      PaperProps={{ sx: { borderRadius: "15px" } }}
      fullWidth
    >
      {/* <ClickAwayListener onClickAway={hadleAwayClick}> */}
        <div ref={dialogRef} style={{width: '100%'}}>
          <header className="head">
            <p className="p-2 px-4 fs-4">Add Case</p>
          </header>

          <AddCaseForm close={closeModal} />
        </div>
      {/* </ClickAwayListener> */}
    </Dialog>
  );
});

export default Modal;
