import React from 'react'
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Modalk({show,handleClose}) {

  return (
    <>
    <Modal
        size="sm"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Succesfully
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Данные успешно отправлены!✔️</Modal.Body>
      </Modal>
  </>
  )
}

export default Modalk
