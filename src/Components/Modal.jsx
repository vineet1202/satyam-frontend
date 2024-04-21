// Third party
import { useCallback } from "react";
import { useEffect, useRef } from "react";

const CustomModal = ({ className, children, state, hideModalHandler }) => {
  return state === "open" ? (
    <>
      {/* Modal */}
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ${className}`}>{children}</div>;
      {/* Backdrop */}
      <div className="fixed w-full h-full z-20 bg-[rgba(0,0,0,.6)] inset-0" onClick={hideModalHandler} />;
    </>
  ) : (
    <></>
  );
};

const DialogModal = ({ className, children, state, hideModalHandler }) => {
  const dialogRef = useRef();

  useEffect(() => {
    if (state === "open") dialogRef.current.showModal();
    else dialogRef.current.close();
  }, [state]);

  const onClickHandler = useCallback(
    (event) => {
      const dialogDimensions = event.target.getBoundingClientRect();
      if (
        event.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        hideModalHandler();
      }
    },
    [hideModalHandler]
  );

  return (
    <dialog ref={dialogRef} className={`backdrop:bg-[rgba(0,0,0,.6)] ${className}`} onClick={onClickHandler}>
      {children}
    </dialog>
  );
};

const Modal = (props) => {
  return typeof HTMLDialogElement === "function" ? <DialogModal {...props} /> : <CustomModal {...props} />;
};

export default Modal;
