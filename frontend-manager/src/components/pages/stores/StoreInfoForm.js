import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import WizardInput from '../../wizard/WizardInput';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { statesArray } from '../../../data/usStates';

const StoreInfoForm = ({ register, errors, watch }) => {
  return (
    <>
      <WizardInput
        label="Store Name*"
        name="storeName"
        errors={errors}
        formGroupProps={{ className: 'mb-3' }}
        formControlProps={{
          ...register('storeName', {
            required: 'Store Name is required'
          })
        }}
      />

      <WizardInput
        type="text"
        errors={errors}
        label="Tax Id*"
        name="taxId"
        formGroupProps={{ className: 'mb-3' }}
        formControlProps={{
          ...register('taxId', {
            required: 'Tax Id field is required'
          })
        }}
      />

      <WizardInput
        type="address"
        errors={errors}
        label="Address*"
        name="address"
        formGroupProps={{ className: 'mb-3' }}
        formControlProps={{
          ...register('address', {
            required: 'Address field is required'
          })
        }}
      />
      <WizardInput
        type="text"
        errors={errors}
        label="City*"
        name="city"
        formGroupProps={{ className: 'mb-3' }}
        formControlProps={{
          ...register('city', {
            required: 'City field is required'
          })
        }}
      />

      <Row className="g-2 mb-3">
        <WizardInput
          type="select"
          errors={errors}
          options={statesArray}
          label="State*"
          name="state"
          formGroupProps={{ as: Col, sm: 6 }}
          formControlProps={{
            ...register('state', {
              required: 'You must select a state'
            })
          }}
        />
        <WizardInput
          type="text"
          errors={errors}
          label="Zip Code*"
          name="zipCode"
          formGroupProps={{ as: Col, sm: 6 }}
          formControlProps={{
            ...register('zipCode', {
              required: 'Zip code field is required'
            })
          }}
        />
      </Row>
    </>
  );
};

StoreInfoForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func
};

export default StoreInfoForm;
