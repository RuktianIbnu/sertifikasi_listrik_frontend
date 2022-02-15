import React from "react";
import { Transition } from "@tailwindui/react";
import { Modal, Button } from "react-bootstrap";

export default function ModalBootstrap({
  show,
  onClickBackdrop,
  modalTitle,
  children,
  modalSize,
  ...otherProps
}) {
  return (
    <Modal size={modalSize} show={show} onHide={onClickBackdrop}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span className="text-center font-bold">{modalTitle}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
