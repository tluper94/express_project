import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import { AddStoreSection, Label, StoresContainer } from './Stores.styles';

function Stores({ user }) {
  const [stores, setStores] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get('http://localhost:8000/finduser', {
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

  console.log(stores);

  return (
    <StoresContainer>
      <AddStoreSection>
        <Label>Stores</Label>
        <Button width='7rem' color='#385d6d' borderRadius='5px' height='30px'>
          Add New Store
        </Button>
      </AddStoreSection>
      <Label color='grey' size='0.8rem'>
        Create, edit and manage your stores
      </Label>
    </StoresContainer>
  );
}

export default Stores;
