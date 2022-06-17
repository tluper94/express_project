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
import StoresTable from '../../components/storesTable/StoresTable';

function Stores({ user }) {
  const [isLoading, setIsLoading] = useState(true);
  const [stores, setStores] = useState([]);
  const [createStore, setCreateStore] = useState(false);
  const [storeData, setStoreData] = useState({
    storeName: '',
    taxId: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    fax: '',
    email: '',
    website: '',
    facebook: '',
    twitter: '',
    instagram: '',
    youtube: '',
  });

  console.log(stores);

  useEffect(() => {
    const getStores = async () => {
      try {
        const res = await axios.get('http://192.168.1.117:8000/getstores', {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setStores(res.data.stores);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getStores();
  }, [user, createStore]);

  const onChangeHandler = (e) => {
    setStoreData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://192.168.1.117:8000/create',
        storeData,
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      );
      setCreateStore(false);
      setIsLoading(true);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const displayTable = () => {
    return <StoresTable stores={stores} />;
  };

  function diplayStoreSection() {
    if (stores.length === 0 && !createStore) {
      return firstTimeStore();
    } else if (createStore) {
      return displayCreateForm();
    } else {
      return displayTable();
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
      <StepOneConatiner onSubmit={onSubmit} method='post'>
        <Label>General Info</Label>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Store Name
          </FormLabel>
          <FormInput
            required
            name='storeName'
            onChange={onChangeHandler}
            value={storeData.storeName}
          />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Tax ID
          </FormLabel>
          <FormInput required name='taxId' onChange={onChangeHandler} />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Full Address
          </FormLabel>
          <FormInput required name='address' onChange={onChangeHandler} />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            City
          </FormLabel>
          <FormInput required name='city' onChange={onChangeHandler} />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            State
          </FormLabel>
          <FormInput required name='state' onChange={onChangeHandler} />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Zip Code
          </FormLabel>
          <FormInput required name='zipCode' onChange={onChangeHandler} />
        </FormSection>
        <Label margin='30px 0 0 0'>Contact Info</Label>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Phone
          </FormLabel>
          <FormInput
            type='tel'
            required
            name='phone'
            onChange={onChangeHandler}
          />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Fax
          </FormLabel>
          <FormInput name='fax' onChange={onChangeHandler} />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Email
          </FormLabel>
          <FormInput required name='email' onChange={onChangeHandler} />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Website
          </FormLabel>
          <FormInput name='website' onChange={onChangeHandler} />
        </FormSection>
        <Label margin='30px 0 0 0'>Social</Label>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Facebook
          </FormLabel>
          <FormInput name='facebook' onChange={onChangeHandler} />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Twitter
          </FormLabel>
          <FormInput name='twitter' onChange={onChangeHandler} />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Instagram
          </FormLabel>
          <FormInput name='instagram' onChange={onChangeHandler} />
        </FormSection>
        <FormSection direction='row'>
          <FormLabel width='100px' margin='0 10vw 0 0'>
            Youtube
          </FormLabel>
          <FormInput name='youtube' onChange={onChangeHandler} />
        </FormSection>
        <Button
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
      {isLoading ? <h2>Loading...</h2> : diplayStoreSection()}
    </StoresContainer>
  );
}

export default Stores;
