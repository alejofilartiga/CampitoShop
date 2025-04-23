import { useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"

import * as Yup from "yup"

import { checkoutInitialValues} from "../../../../formik"

import Loader from "../../../components/Loader/Loader";
import Input from "../../Pages/Contact/Form/Input/Input";
import Submit from "../../Pages/Contact/Form/Submit/Submit";

import {createOrder} from "../../../../axios/axios-orders"
import {clearCart} from "../../Redux/cart/cartSlice"

import {CheckoutWrapper, Form, Title, Formik} from "./checkoutFormStyled"


const validationSchema = Yup.object({

  name: Yup.string().trim().required("Este Campo es Obligatorio"),
  location: Yup.string().trim().required("Este Campo es Obligatorio"),
  email: Yup.string().email("El correo que ingresaste no es valido").required("Este Campo es Obligatorio"),
  number: Yup.string().max(13, "El Maximo de Caracteres Permitidos es de 13").required("Este Campo es Obligatorio"),
})

const CheckoutForm = ({cartItems, price}) => { 
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  return (
    <CheckoutWrapper>
      <Title>Ingresa tus datos</Title>
      <Formik
        validationSchema={validationSchema}
        initialValues={checkoutInitialValues}
        onSubmit={async (values) =>{
          const orderData = {
            items: cartItems,
            price,
            total: price,
            user: values.name,
          };
          try{
            await createOrder(orderData, dispatch);
            navigate("/successful");
            dispatch(clearCart());
          } catch (error){
            alert("Error al crear la orden")
          }
        }}
      >
        {({isSubmitting, touched, errors})=> (
          <Form>
            <Input
              name="name"
              label="Tu Nombre"
              type="text"
              id="nombre"
              isError={touched.name && errors.name}
            >
            </Input>
            <Input
              name="number"
              label="Tu celular"
              type="number"
              id="celular"
              isError={touched.number && errors.number}
            >
            </Input>
            <Input
              name="location"
              label="Tu localidad"
              type="text"
              id="localidad"
              isError={touched.location && errors.location}
            >
            </Input>
            <Input
              name="email"
              label="Tu Correo Electronico"
              type="email"
              isError={touched.email && errors.email}
            >
            </Input>
            <div>
              <Submit disabled={!cartItems.length}>
                {isSubmitting ? <Loader /> : "Iniciar Pedido"}
              </Submit>
            </div>
          </Form>
        )}
      </Formik>
    </CheckoutWrapper>
  )
}

export default CheckoutForm
