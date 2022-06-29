import React, { useState } from 'react';
import {
  Button,
  Card,
  Row,
  Col,
  Form
  // Col,
  // OverlayTrigger,
  // Row,
  // Tooltip
} from 'react-bootstrap';
import IconButton from 'components/common/IconButton';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import CreateStoreModal from './CreateStoreModal';

const Stores = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  function BulAction({ selectedRowIds }) {
    return (
      <Row className="flex-between-center mb-3">
        <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
          <IconButton
            buttonClassNames="me-3"
            variant="primary"
            iconClassName="me-2"
            icon="plus"
            // transform="shrink-3"
            size="sm"
            onClick={() => {
              setIsOpenCreateModal(!isOpenCreateModal);
            }}
          >
            Add Store
          </IconButton>
          <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
            {Object.keys(selectedRowIds).length > 0
              ? 'You have selected ' +
                Object.keys(selectedRowIds).length +
                ' rows'
              : 'Stores'}
          </h5>
        </Col>
        <Col xs={8} sm="auto" className="ms-auto text-end ps-0">
          <div className="d-flex">
            <Form.Select size="sm" aria-label="Bulk actions">
              <option>Bulk Actions</option>
              <option value="refund">Refund</option>
              <option value="delete">Delete</option>
              <option value="archive">Archive</option>
            </Form.Select>
            <Button
              type="button"
              variant="falcon-default"
              size="sm"
              className="ms-2"
            >
              Apply
            </Button>
          </div>
        </Col>
      </Row>
    );
  }

  const columns = [
    {
      accessor: 'name',
      Header: 'Name'
    },
    {
      accessor: 'email',
      Header: 'Email',
      Cell: rowData => {
        const { email } = rowData.row.original;
        return <a href={'mailto:' + email}>{email}</a>;
      }
    },
    {
      accessor: 'age',
      Header: 'Age',
      cellProps: {
        className: 'fw-medium'
      }
    }
  ];

  const data = [
    // {
    //   name: 'Anna',
    //   email: 'anna@example.com',
    //   age: 18
    // },
    // {
    //   name: 'Homer',
    //   email: 'homer@example.com',
    //   age: 35
    // },
    // {
    //   name: 'Oscar',
    //   email: 'oscar@example.com',
    //   age: 52
    // },
    // {
    //   name: 'Emily',
    //   email: 'emily@example.com',
    //   age: 30
    // },
    // {
    //   name: 'Jara',
    //   email: 'jara@example.com',
    //   age: 25
    // }
  ];
  return (
    <>
      <Card>
        <Card.Body>
          <AdvanceTableWrapper
            columns={columns}
            data={data}
            sortable
            pagination
            perPage={5}
            selection
            selectionColumnWidth={30}
          >
            <BulAction table />
            <AdvanceTable
              table
              headerClassName="bg-200 text-900 text-nowrap align-middle"
              rowClassName="align-middle white-space-nowrap"
              tableProps={{
                striped: true,
                className: 'fs--1 mb-0 overflow-hidden'
              }}
            />
          </AdvanceTableWrapper>
          <CreateStoreModal
            setIsOpenCreateModal={setIsOpenCreateModal}
            isOpenCreateModal={isOpenCreateModal}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default Stores;
