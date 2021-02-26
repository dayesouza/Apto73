import React from 'react';
import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  ModalFooter,
} from 'shards-react';
import PropTypes from 'prop-types';

function ModalConfirm({ open, toggle, confirm, message, isDelete }) {
  return (
    <Modal open={open} toggle={toggle}>
      <ModalHeader>{message}</ModalHeader>
      <ModalBody>
        <span className="text-danger">This action can't be undone</span>
      </ModalBody>
      <ModalFooter className="d-flex justify-content-between">
        <Button outline theme="danger" onClick={confirm}>
          {isDelete ? 'Delete' : 'Yes'}
        </Button>
        <Button onClick={toggle}>{isDelete ? 'Cancel' : 'No'}</Button>
      </ModalFooter>
    </Modal>
  );
}

ModalConfirm.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  message: PropTypes.string,
  delete: PropTypes.bool,
};

ModalConfirm.defaultProps = {
  message: 'Are you sure you want to delete this item?',
  isDelete: true,
};

export default ModalConfirm;
