import { FormContainer, FormHeader, FormSection } from './Form.styles';
function Form({ title, onSubmit, children }) {
  return (
    <FormContainer method='post' onSubmit={onSubmit}>
      <FormHeader>{title}</FormHeader>
      {children.map((child, idx) => (
        <FormSection key={idx + title}>{child}</FormSection>
      ))}
    </FormContainer>
  );
}

export default Form;
