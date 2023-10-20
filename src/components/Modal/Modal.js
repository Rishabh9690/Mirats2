import React from "react";
import "./modal.css";

const Modal =({ isOpen, onClose, children })=>{
  console.log("Inside Modal1")
  if (!isOpen) return null;
  console.log("Inside Modal2")
  return (
    <div className="modal_body">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal;





















//---------------------------------------------------------------------------

// import React from "react";
// import {
//   Background,
//   CloseModalButton,
//   CloseModalContainer,
//   ModalContent,
//   ModalWrapper,
// } from "./Modal.style";

// const Modal = ({ showModal, setShowModal, children }) => {
//   console.log(showModal);
//   return (
//     <>
//       {showModal ? (
//         <Background>
//           <ModalWrapper>
//             <ModalContent>{children}</ModalContent>
//             <CloseModalContainer onClick={() => setShowModal((prev) => !prev)}>
//               <CloseModalButton size={17}  />
//             </CloseModalContainer>
//           </ModalWrapper>
//         </Background>
//       ) : null}
//     </>
//   );
// };

// export default Modal;
