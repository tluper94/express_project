import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import Lottie from 'react-lottie';
import animationData from '../../wizard/lottie/celebration.json';

const Success = ({ reset, setStep, setIsModalOpen, isModalOpen }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const emptyData = () => {
    setStep(1);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Row>
        <Col className="text-center">
          <div className="wizard-lottie-wrapper">
            <div className="wizard-lottie mx-auto">
              <Lottie options={defaultOptions} />
            </div>
          </div>
          <h4 className="mb-1">Your Store has been created!</h4>
          <Button color="primary" className="px-5 my-3" onClick={emptyData}>
            Done
          </Button>
        </Col>
      </Row>
    </>
  );
};

Success.propTypes = {
  reset: PropTypes.func.isRequired
};

export default Success;
