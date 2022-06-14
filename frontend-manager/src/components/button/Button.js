import { Btn } from './Button.styles';

function Button({ children, fontColor, color, width, height, borderRadius }) {
  const options = { fontColor, color, width, height, borderRadius };

  return <Btn {...options}>{children}</Btn>;
}

export default Button;
