import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import AppContext from 'context/Context';
import CreateStoreLayout from './CreateStoreLayout';

const CreateStoreModal = ({ setIsOpenCreateModal, isOpenCreateModal }) => {
  const {
    config: { isDark }
  } = useContext(AppContext);

  const handleClose = () => {
    setIsOpenCreateModal(!isOpenCreateModal);
  };

  return (
    <Modal
      show={isOpenCreateModal}
      onHide={handleClose}
      contentClassName="border"
    >
      <CreateStoreLayout
        validation
        setIsModalOpen={setIsOpenCreateModal}
        isModalOpen={isOpenCreateModal}
      />
    </Modal>
  );
};

CreateStoreModal.propTypes = {
  setIsOpenCreateModal: PropTypes.func.isRequired,
  isOpenCreateModal: PropTypes.bool.isRequired
};

export default CreateStoreModal;
