import React, { useState } from 'react';
import {
  FormContainer,
  FormHeader,
  FormInput,
  FormInputContainer,
  FormLabel,
} from './CreateStoreForm.styles';

function CreateStoreForm() {
  const [storeInfo, setStoreInfo] = useState({
    name: '',
    address: '',
    phone: '',
  });
  function onNameChange(e) {
    setStoreInfo((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  }
  function onAddressChange(e) {
    setStoreInfo((prevState) => {
      return { ...prevState, address: e.target.value };
    });
  }
  function onPhoneChange(e) {
    setStoreInfo((prevState) => {
      return { ...prevState, phone: e.target.value };
    });
  }

  console.log(storeInfo);
  return (
    <FormContainer>
      <FormHeader>Store Info</FormHeader>
      <FormInputContainer>
        <FormLabel>Name</FormLabel>
        <FormInput
          onChange={onNameChange}
          type='text'
          value={storeInfo.name}
        ></FormInput>
      </FormInputContainer>
      <FormInputContainer>
        <FormLabel>Address</FormLabel>
        <FormInput onChange={onAddressChange} type='text'></FormInput>
      </FormInputContainer>
      <FormInputContainer>
        <FormLabel>Phone Number</FormLabel>
        <FormInput onChange={onPhoneChange} type='tel'></FormInput>
      </FormInputContainer>
    </FormContainer>
  );
}

export default CreateStoreForm;
