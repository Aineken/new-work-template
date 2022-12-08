import React, { Fragment } from "react";
import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./ModalStyled";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ title, footer, children, active, hideModal }) => {
  return (
    <Fragment>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <ModalClose onClick={() => hideModal()}>
                <IoCloseSharp size={40} />
              </ModalClose>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </ModalContainer>
        </ModalBlock>
      )}
    </Fragment>
  );
};
export default Modal;
