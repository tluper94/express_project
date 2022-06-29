import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButton = ({
  buttonClassNames,
  iconAlign = 'left',
  iconClassName,
  transform,
  children,
  size,
  ...rest
}) => (
  <Button className={buttonClassNames} {...rest}>
    {iconAlign === 'right' && children}
    {children.map(child => {
      const className = classNames(iconClassName, {
        'me-1': children && iconAlign === 'left',
        'ms-1': children && iconAlign === 'right'
      });
      child.props.className = className;

      return child;
    })}
    {iconAlign === 'left' && children}
  </Button>
);

IconButton.propTypes = {
  ...Button.propTypes,
  children: PropTypes.any,
  iconAlign: PropTypes.oneOf(['left', 'right']),
  iconClassName: PropTypes.string,
  transform: PropTypes.string
};

export default IconButton;
