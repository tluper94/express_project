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

function StoresTable({ stores }) {
  const [isChecked, setIsChecked] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
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
  return (
    <Table>
      <thead>
        <TableRow height='3rem'>
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
                <EditLinksContainer>
                  <CircleButton>
                    <BiEditAlt size='20px' color='#0079b0' />
                  </CircleButton>
                  <CircleButton>
                    <IoTrashOutline size='20px' color='#db2b11' />
                  </CircleButton>
                  <CircleButton label='Registers'>
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
