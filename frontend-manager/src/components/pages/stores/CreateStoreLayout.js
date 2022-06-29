import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Nav, ProgressBar } from 'react-bootstrap';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { set, useForm } from 'react-hook-form';
import StoreInfoForm from './StoreInfoForm';
import ContactInfoForm from './ContactInfo';
import CreateStoreSuccess from './CreateStoreSuccess';
import SocialInfoForm from './SocialInfoForm';
import AppContext from 'context/Context';
import IconButton from 'components/common/IconButton';
import WizardModal from '../../wizard/WizardModal';
import Flex from 'components/common/Flex';
import { toast } from 'react-toastify';
import { CgClose } from 'react-icons/cg';
import ReactIconButton from '../../common/ReactIconButton';

import { useDispatch, useSelector } from 'react-redux';
import { createStore, resetState } from 'features/stores/storesSlice';

const WizardLayout = ({
  variant,
  validation,
  progressBar,
  setIsModalOpen,
  isModalOpen
}) => {
  const dispatch = useDispatch();
  const { isRTL } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
    clearErrors
  } = useForm();

  const { stores, isSuccess, isLoading, isError, message } = useSelector(
    state => state.stores
  );

  const [modal, setModal] = useState(false);
  const [step, setStep] = useState(1);

  const navItems = [
    {
      icon: 'lock',
      label: 'Store Info'
    },
    {
      icon: 'user',
      label: 'Contact Info'
    },
    {
      icon: 'dollar-sign',
      label: 'Social'
    },
    {
      icon: 'thumbs-up',
      label: 'Done'
    }
  ];

  console.log(step);
  useEffect(() => {
    if (isError) {
      toast.error(message, {
        theme: 'colored'
      });
    }

    if (step === 3 && isSuccess) {
      setStep(step + 1);
    }

    dispatch(resetState());
  }, [isSuccess, isError]);

  const onSubmitData = data => {
    console.log(data, isError);

    if (step === 3) {
      dispatch(createStore(data));
    }
  };
  const onError = () => {
    if (!validation) {
      clearErrors();
      setStep(step + 1);
    }
  };

  const toggle = () => setModal(!modal);

  const handleNavs = targetStep => {
    if (step !== 4) {
      console.log(targetStep);
      if (targetStep < step) {
        setStep(targetStep);
      } else {
        handleSubmit(onSubmitData, onError)();
      }
    } else {
      toggle();
    }
  };

  return (
    <>
      <WizardModal modal={modal} setModal={setModal} />
      <Card as={Form} className="theme-wizard h-100">
        <Card.Header
          className={classNames('bg-light', {
            'px-4 py-3': variant === 'pills',
            'pb-2': !variant
          })}
        >
          <CgClose
            onClick={() => {
              setIsModalOpen(false);
            }}
            transform="down-1 shrink-4"
            className="cursor-pointer"
            size="25px"
          />

          <Nav className="justify-content-center" variant={variant}>
            {variant === 'pills'
              ? navItems.map((item, index) => (
                  <NavItemPill
                    key={item.label}
                    index={index + 1}
                    step={step}
                    handleNavs={handleNavs}
                    icon={item.icon}
                    label={item.label}
                  />
                ))
              : navItems.map((item, index) => (
                  <NavItem
                    key={item.label}
                    index={index + 1}
                    step={step}
                    handleNavs={handleNavs}
                    icon={item.icon}
                    label={item.label}
                  />
                ))}
          </Nav>
        </Card.Header>
        {progressBar && <ProgressBar now={step * 25} style={{ height: 2 }} />}
        <Card.Body className="fw-normal px-md-6 py-4">
          {step === 1 && (
            <StoreInfoForm register={register} errors={errors} watch={watch} />
          )}
          {step === 2 && (
            <ContactInfoForm
              register={register}
              errors={errors}
              setValue={setValue}
            />
          )}
          {step === 3 && (
            <SocialInfoForm
              register={register}
              errors={errors}
              setValue={setValue}
            />
          )}
          {step === 4 && (
            <CreateStoreSuccess
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
              setStep={setStep}
              reset={reset}
            />
          )}
        </Card.Body>
        <Card.Footer
          className={classNames('px-md-6 bg-light', {
            'd-none': step === 4,
            ' d-flex': step < 4
          })}
        >
          <IconButton
            variant="link"
            icon={isRTL ? 'chevron-right' : 'chevron-left'}
            iconAlign="left"
            transform="down-1 shrink-4"
            className={classNames('px-0 fw-semi-bold', {
              'd-none': step === 1
            })}
            onClick={() => {
              setStep(step - 1);
            }}
          >
            Prev
          </IconButton>

          {step === 3 ? (
            <IconButton
              variant="primary"
              className="ms-auto px-5"
              icon={isRTL ? 'chevron-left' : 'chevron-right'}
              iconAlign="right"
              transform="down-1 shrink-4"
              onClick={handleSubmit(onSubmitData, onError)}
            >
              Submit
            </IconButton>
          ) : (
            <IconButton
              variant="primary"
              className="ms-auto px-5"
              icon={isRTL ? 'chevron-left' : 'chevron-right'}
              iconAlign="right"
              transform="down-1 shrink-4"
              onClick={handleSubmit(() => setStep(step + 1), onError)}
            >
              Next
            </IconButton>
          )}
        </Card.Footer>
      </Card>
    </>
  );
};

const NavItem = ({ index, step, handleNavs, icon, label }) => {
  return (
    <Nav.Item>
      <Nav.Link
        className={classNames('fw-semi-bold', {
          done: index < 4 ? step > index : step > 3,
          active: step === index
        })}
        onClick={() => handleNavs(index)}
      >
        <span className="nav-item-circle-parent">
          <span className="nav-item-circle">
            <FontAwesomeIcon icon={icon} />
          </span>
        </span>
        <span className="d-none d-md-block mt-1 fs--1">{label}</span>
      </Nav.Link>
    </Nav.Item>
  );
};

const NavItemPill = ({ index, step, handleNavs, icon, label }) => {
  return (
    <Nav.Item>
      <Nav.Link
        className={classNames('fw-semi-bold', {
          done: step > index,
          active: step === index
        })}
        onClick={() => handleNavs(index)}
      >
        <Flex alignItems="center" justifyContent="center">
          <FontAwesomeIcon icon={icon} />
          <span className="d-none d-md-block mt-1 fs--1 ms-2">{label}</span>
        </Flex>
      </Nav.Link>
    </Nav.Item>
  );
};

WizardLayout.propTypes = {
  variant: PropTypes.oneOf(['pills']),
  validation: PropTypes.bool,
  progressBar: PropTypes.bool
};

NavItemPill.propTypes = {
  index: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  handleNavs: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

NavItem.propTypes = NavItemPill.propTypes;

export default WizardLayout;
