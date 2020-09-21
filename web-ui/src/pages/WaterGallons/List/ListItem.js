import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Button } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import moment from 'moment';
import ModalConfirm from '../../../components/ModalConfirm/ModalConfirm';

export default function ListItem({ water, history, deleteWater }) {
  const [openModal, setOpenModal] = useState(false);

  function formatDate(date) {
    return moment(date).format('dddd, MMMM Do YYYY');
  }

  function toggleConfirmDelete(e, water) {
    e.stopPropagation();
    setOpenModal(true);
  }

  function confirmDelete() {
    closeModal();
    deleteWater(water);
  }

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <>
      <ModalConfirm
        open={openModal}
        toggle={() => closeModal()}
        confirm={confirmDelete}
      />
      <Card
        onClick={() => history.push(`/water-gallon/${water._id}`)}
        className="mb-2 waterCard"
      >
        <CardBody>
          <CardTitle className="d-flex justify-content-between">
            <span>{formatDate(water.date)} </span>
            <span>{water.user}</span>
          </CardTitle>
          <div className="d-flex justify-content-between">
            <span>R${water.value}</span>
            <span>
              <Button
                onClick={(e) => toggleConfirmDelete(e, water)}
                size="sm"
                outline
                theme="danger"
              >
                <FontAwesomeIcon icon="trash" />
              </Button>
            </span>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

ListItem.propTypes = {
  water: PropTypes.object.isRequired,
  deleteWater: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
