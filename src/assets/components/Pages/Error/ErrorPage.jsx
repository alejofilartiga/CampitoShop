import {useNavigate} from "react-router-dom"
import cover from "./img/cover.jpg"
import { ErrorContainer,ErrorInfo, ImageError, ErrorTitle, BackButton } from "./errorStyle"
const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <ErrorContainer>
        <ImageError src={cover} alt="error 404" />
        <ErrorInfo>
          <ErrorTitle>ERROR 404</ErrorTitle>
          <BackButton onClick={()=>navigate("/")}>VOLVER</BackButton>
        </ErrorInfo>
      </ErrorContainer>
    </>
  )
}

export default ErrorPage
