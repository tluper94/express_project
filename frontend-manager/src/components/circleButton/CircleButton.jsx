import {
  CircleButtonContainer,
  DropDownLabelContainer,
  IconContainer,
} from './CircleButton.styles';

function CircleButton({ children, label }) {
  return (
    <CircleButtonContainer>
      <IconContainer>{children}</IconContainer>
      <DropDownLabelContainer>{label}</DropDownLabelContainer>
    </CircleButtonContainer>
  );
}

export default CircleButton;
