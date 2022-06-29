import React from 'react';
import PropTypes from 'prop-types';
import WizardInput from '../../wizard/WizardInput';
import { statesArray } from '../../../data/usStates';

const SocialInfoForm = ({ register, errors, watch }) => {
  return (
    <>
      <WizardInput
        label="Facebook"
        name="facebook"
        errors={errors}
        formGroupProps={{ className: 'mb-3' }}
        formControlProps={{
          ...register('facebook')
        }}
      />

      <WizardInput
        type="text"
        errors={errors}
        label="Instagram"
        name="instagram"
        formGroupProps={{ className: 'mb-3' }}
        formControlProps={{
          ...register('instgram')
        }}
      />

      <WizardInput
        type="text"
        errors={errors}
        options={statesArray}
        label="Twitter"
        name="twitter"
        formGroupProps={{ className: 'mb-3' }}
        formControlProps={{
          ...register('twitter')
        }}
      />

      <WizardInput
        type="text"
        errors={errors}
        label="Youtube"
        name="youtube"
        formGroupProps={{ className: 'mb-3' }}
        formControlProps={{
          ...register('youtube')
        }}
      />
    </>
  );
};

SocialInfoForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func
};

export default SocialInfoForm;
