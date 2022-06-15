import { Btn } from './Button.styles';

function Button({
  children,
  fontColor,
  color,
  width,
  height,
  borderRadius,
  margin,
  onClick,
}) {
  const options = {
    fontColor,
    color,
    width,
    height,
    borderRadius,
    margin,
    onClick,
  };

  return <Btn {...options}>{children}</Btn>;
}

export default Button;
