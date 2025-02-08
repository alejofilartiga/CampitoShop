import { TextAreaStyled, ErrorStyled } from "./TextAreaStyle"
import { InputWrapper, LabelStyled} from "../Input/inputStyle";
import { ErrorMessage, Field } from "formik";


const  TextArea = ({name, label, isError }) => {
  return (
    <InputWrapper>
      <LabelStyled htmlFor={label}>{label}</LabelStyled>
      <ErrorMessage name={name} component={ErrorStyled} />
      <Field
        name={name}
        id={label}
        error={isError}
        as={TextAreaStyled}
      />
    </InputWrapper>
  )
}

export default TextArea
