import React from 'react';
import CreateStoreForm from '../../components/createStoreForm/CreateStoreForm';
import { CreateStoreContainer } from './CreateStore.styles';
import Form from '../../components/form/Form';
import {
  FormHeader,
  FormInputContainer,
  FormInput,
} from '../../components/form/Form.styles';

function CreateStore() {
  return (
    <CreateStoreContainer>
      <CreateStoreForm />
      <Form>
        <FormHeader>Categories</FormHeader>
        <FormInputContainer>
          <FormInput />
        </FormInputContainer>
      </Form>
    </CreateStoreContainer>
  );
}

export default CreateStore;
