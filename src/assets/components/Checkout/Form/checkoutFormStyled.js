import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutWrapper = styled.div`
    width: 30%;
    background-color: #000700;
    flex-direction: column;
    border-radius: 10px;
    font-weight: 200;

    @media (max-width: 768px) {
        width: 90%;
        align-items: center;
        justify-content: center;
    }

`;

export const Formik = styled(FormikContainer)`
    display: flex;
    flex-wrap: wrap;
`;

export const Title = styled.h2`
    color: #fff;
    font-size: 2rem;
    font-weight: 200;
    text-align: center;
`

export const Form = styled(FormikForm)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
`;


