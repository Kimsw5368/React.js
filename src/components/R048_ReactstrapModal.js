import React, {useState} from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

const R048_ReactstrapModal = (props) => {
  const [modalState, setModalState] = useState(false)

  const toggle = () => {
    setModalState(!modalState)
  }

  return (
    <>
      <Button color={'warning'} onClick={toggle}>Modal 버튼</Button>
      <Modal isOpen={modalState} fade={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal Header</ModalHeader>
        <ModalBody>
          The generated Lorem Ipsum is therefore always free from repetition.
        </ModalBody>
        <ModalFooter>
          <Button color={'primary'} onClick={toggle}>save</Button>
          <Button color={'secondary'} onClick={toggle}>cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default R048_ReactstrapModal
