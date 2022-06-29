import React from 'react';
import PropTypes from 'prop-types';
import WizardInput from '../../wizard/WizardInput';
import { Col } from 'react-bootstrap';
import { statesArray } from '../../../data/usStates';

const ContactInfoForm = ({ register, errors, watch }) => {
  return (
    <>
      <WizardInput
        label="Phone Number*"
        name="phone"
        errors={errors}
        formGroupProps={{ className: 'mb-3' }}
        formControlProps={{
          ...register('phone', {
            required: 'Phone number is required'
          })
        }}
      />

      <WizardInput
        type="text"
        errors={errors}
        label="Fax"
        name="fax"
        formGroupProps={{ className: 'mb-3' }}
        formControlProps={{
          ...register('fax')
        }}
      />

      <WizardInput
        type="email"
        errors={errors}
        options={statesArray}
        label="Email*"
        name="email"
        formGroupProps={{ className: 'mb-3' }}
        formControlProps={{
          ...register('email', {
            required: 'Email field is required',
            pattern: {
              value:
                /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/i,
              message: 'Email must be valid'
            }
          })
        }}
      />

      <WizardInput
        type="text"
        errors={errors}
        label="Website"
        name="website"
        formGroupProps={{ className: 'mb-3' }}
        formControlProps={{
          ...register('website')
        }}
      />
    </>
  );
};

ContactInfoForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func
};

export default ContactInfoForm;
