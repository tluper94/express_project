import axios from 'axios';
import { useEffect, useState } from 'react';
import { ReactComponent as StoreIcon } from '../../icons/store-11331.svg';
import Button from '../../components/button/Button';
import {
  AddStoreSection,
  FirstTimeStoreConatiner,
  Label,
  StepOneConatiner,
  StoresContainer,
  StoreText,
} from './Stores.styles';
import {
  FormInput,
  FormLabel,
  FormSection,
} from '../../components/form/Form.styles';

function Stores({ user }) {
  const [stores, setStores] = useState([]);
  const [createStore, setCreateStore] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get('http://192.168.1.117:8000/finduser', {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setStores(res.data.stores);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [user]);

  function diplayStoreSection() {
    if (stores.length === 0 && !createStore) {
      return firstTimeStore();
    } else if (createStore) {
      return displayCreateForm();
    }
  }

  function firstTimeStore() {
    return (
      <FirstTimeStoreConatiner>
        <StoreIcon style={{ width: '5rem', height: '5rem' }} />
        <StoreText marginTop='30px'>
          Thank you for choosing <b>POS System</b>
        </StoreText>
        <StoreText marginTop='5px'>
          First step is to create your first store after that you on your way to
          using your new POS System
        </StoreText>
        <Button
          width='10rem'
          color='#385d6d'
          borderRadius='5px'
          height='40px'
          margin='15px 0 0 0'
          onClick={createStoreClickHandler}
        >
          Create your first store
        </Button>
      </FirstTimeStoreConatiner>
    );
  }

  function displayCreateForm() {
    return (
      <StepOneConatiner>
        <Label>General Info</Label>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Store Name
          </FormLabel>
          <FormInput />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Tax ID
          </FormLabel>
          <FormInput />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Full Address
          </FormLabel>
          <FormInput />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            City
          </FormLabel>
          <FormInput />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            State
          </FormLabel>
          <FormInput />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Zip Code
          </FormLabel>
          <FormInput />
        </FormSection>
        <Label margin='30px 0 0 0'>Contact Info</Label>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Phone
          </FormLabel>
          <FormInput type='tel' />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Fax
          </FormLabel>
          <FormInput />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Email
          </FormLabel>
          <FormInput />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Website
          </FormLabel>
          <FormInput />
        </FormSection>
        <Label margin='30px 0 0 0'>Social</Label>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Facebook
          </FormLabel>
          <FormInput />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Twitter
          </FormLabel>
          <FormInput />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Instagram
          </FormLabel>
          <FormInput />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Youtube
          </FormLabel>
          <FormInput />
        </FormSection>
        <Button
          // onClick={}
          width='10rem'
          margin='50px 25vw 0 auto'
          color='#278cb1'
          borderRadius='5px'
          height='35px'
        >
          Save Store
        </Button>
      </StepOneConatiner>
    );
  }

  function createStoreClickHandler() {
    setCreateStore(true);
  }

  return (
    <StoresContainer>
      <AddStoreSection>
        <Label margin='0 15px 0 0'>Stores</Label>
        <Button
          onClick={createStoreClickHandler}
          width='7rem'
          color='#385d6d'
          borderRadius='5px'
          height='30px'
        >
          Add New Store
        </Button>
      </AddStoreSection>
      <Label margin='5px 0' color='grey' size='1rem'>
        Create, edit and manage your stores
      </Label>
      {diplayStoreSection()}
    </StoresContainer>
  );
}

export default Stores;
