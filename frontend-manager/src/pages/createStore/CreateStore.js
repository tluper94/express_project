import React from 'react';
import CreateStoreForm from '../../components/createStoreForm/CreateStoreForm';
import { CreateStoreContainer } from './CreateStore.styles';

function CreateStore() {
  return (
    <CreateStoreContainer>
      <CreateStoreForm />
    </CreateStoreContainer>
  );
}

export default CreateStore;
