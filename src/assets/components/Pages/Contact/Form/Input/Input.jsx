import { InputWrapper, LabelStyled, InputStyled, ErrorStyled } from "./inputStyle"
import { ErrorMessage, Field } from "formik"

const Input =({name, label, type, isError}) => {
  return (
    <InputWrapper>
      <LabelStyled htmlFor={label}>{label}</LabelStyled>
      <ErrorMessage name={name} component={ErrorStyled} />
      <Field
        name={name}
        type={type}
        id={label}
        error={isError}
        as={InputStyled}
      />
    </InputWrapper>
  )
}

export default Input
