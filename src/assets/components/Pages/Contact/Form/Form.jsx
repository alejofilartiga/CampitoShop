import { Formik } from "formik";
import * as Yup from "yup";


import Input from "./Input/Input";
import Submit from "./Submit/Submit";
import TextAreaInput from "./TextArea/TextArea";
import { StyledWrapper, FormContainer, FormStyled } from "./formStyle";



const validationSchema = Yup.object({

  name: Yup.string().trim().required("Este Campo es Obligatorio"),
  email: Yup.string().email("El correo que ingresaste no es valido").required("Este Campo es Obligatorio"),
  comments: Yup.string().max(200, "El Maximo de Caracteres Permitidos es de 200").required("Este Campo es Obligatorio")

})





const Form = () => {
  return (
    <Formik  
      initialValues={{
        name: "",
        email: "",
        comments: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log({ values });
        resetForm();
      }}
    >
      {({ touched, errors, isValid, dirty }) => (
      <StyledWrapper>
        <FormContainer>
          <FormStyled>
            <Input
              name="name"
              label="Nombre"
              type="text"
              isError={touched.name && errors.name}
            />
            <Input
              name="email"
              label="Correo Electronico"
              type="email"
              isError={touched.email && errors.email}
            />
            <TextAreaInput  
              name="comments"
              label="Envia un mensaje"
              isError={touched.comments && errors.comments}
            />
            <Submit disabled={!(isValid && dirty)} children={!(isValid && dirty) ? "Completa los campos correctamente" : "Enviar"} />
          </FormStyled>
        </FormContainer>
      </StyledWrapper>
      )}
    </Formik>
  );
}

export default Form;