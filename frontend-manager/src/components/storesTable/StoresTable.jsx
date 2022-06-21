import { useState } from 'react';
import CircleButton from '../circleButton/CircleButton';
import {
  Table,
  TableBody,
  TableData,
  TableHeader,
  TableInput,
  TableRow,
} from '../table/table';
import { BiEditAlt } from 'react-icons/bi';
import { EditLinksContainer } from './StoresTable.styles';
import { IoTrashOutline } from 'react-icons/io5';
import { FaCashRegister } from 'react-icons/fa';

import axios from 'axios';

function StoresTable({ stores, user, setStores }) {
  const [isChecked, setIsChecked] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [editButtonDisplay, setEditButtonDisplay] = useState('none');

  const displayArrayOfTableData = (array) => {
    return array.map((value) => {
      return <TableData>{value.name}</TableData>;
    });
  };

  const checkAllInput = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsChecked(stores.map(({ _id }) => _id));
    if (isCheckAll) {
      setIsChecked([]);
    }
  };

  const onCheckHandler = (e) => {
    const { checked, id } = e.target;
    setIsChecked([...isChecked, id]);
    if (!checked) {
      setIsChecked(isChecked.filter((item) => item !== id));
    }
  };

  console.log(user);

  const onDeleteClick = async (storeId) => {
    try {
      const res = await axios.delete('http://192.168.1.117:8000/deletestore/', {
        headers: {
          Authorization: `Bearer ${user}`,
        },
        data: {
          id: storeId,
        },
      });
      setStores(res.data.stores);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Table>
      <thead>
        <TableRow
          hoverSelector='#editLinks'
          hoverStyles='opacity: 100%'
          height='3rem'
        >
          <TableHeader width='6rem'>
            <TableInput
              width='1rem'
              height='1rem'
              type='checkbox'
              onChange={checkAllInput}
            />
          </TableHeader>
          <TableHeader>Store Name</TableHeader>
          <TableHeader>Employees</TableHeader>
          <TableHeader>Registers</TableHeader>
          <TableHeader>Enabled</TableHeader>
          <TableHeader></TableHeader>
        </TableRow>
      </thead>
      <TableBody>
        {stores.map(({ storeName, _id }) => {
          return (
            <TableRow key={_id} height={'8rem'}>
              <TableData>
                <TableInput
                  id={_id}
                  type='checkbox'
                  width='1rem'
                  height='1rem'
                  onChange={onCheckHandler}
                  checked={isChecked.includes(_id)}
                />
              </TableData>
              <TableData>{storeName}</TableData>
              <TableData></TableData>
              <TableData></TableData>
              <TableData></TableData>
              <TableData>
                <EditLinksContainer id='editLinks'>
                  <CircleButton label='Edit Store'>
                    <BiEditAlt size='20px' color='#0079b0' />
                  </CircleButton>
                  <CircleButton
                    onClick={() => onDeleteClick(_id)}
                    label='Delete Store'
                  >
                    <IoTrashOutline size='20px' color='#db2b11' />
                  </CircleButton>
                  <CircleButton label='Show Registers'>
                    <FaCashRegister size='20px' color='#0079b0' />
                  </CircleButton>
                </EditLinksContainer>
              </TableData>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default StoresTable;
