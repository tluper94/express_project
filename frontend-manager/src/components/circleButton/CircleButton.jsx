import {
  CircleButtonContainer,
  DropDownLabelContainer,
  IconContainer,
} from './CircleButton.styles';

import { useEffect, useRef, useState } from 'react';

function CircleButton({ children, label, onClick }) {
  const [dropDownWidth, setDropDownWidth] = useState(0);
  const dropDownRef = useRef();

  useEffect(() => {
    dropDownRef.current.style.display = 'block';
    const width = dropDownRef.current.offsetWidth;
    dropDownRef.current.style.display = 'none';
    setDropDownWidth(width);
  }, []);

  const onMouseEnter = () => {
    const dropDown = dropDownRef.current;
    dropDown.style.display = 'block';
  };

  const onMouseLeave = () => {
    const dropDown = dropDownRef.current;
    dropDown.style.display = 'none';
  };

  console.log(dropDownWidth);

  return (
    <CircleButtonContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <IconContainer>{children}</IconContainer>
      <DropDownLabelContainer ref={dropDownRef} width={dropDownWidth}>
        {label}
      </DropDownLabelContainer>
    </CircleButtonContainer>
  );
}

export default CircleButton;
