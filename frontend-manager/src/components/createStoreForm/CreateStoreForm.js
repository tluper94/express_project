import React, { useState } from 'react';
import AuthForm from '../authForm/AuthForm';
import { Input } from '../authForm/AuthForm.styles';

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
    <AuthForm>
      <Input
        onChange={onNameChange}
        type='text'
        placeholder='Store Name'
        value={storeInfo.name}
      ></Input>
      <Input
        onChange={onAddressChange}
        type='text'
        placeholder='Store Address'
      ></Input>
      <Input
        onChange={onPhoneChange}
        type='tel'
        placeholder='Store Phone Number'
      ></Input>
    </AuthForm>
  );
}

export default CreateStoreForm;
