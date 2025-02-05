import styled from 'styled-components';

const Form = () => {
  return (
    <StyledWrapper>
      <div className="contact-form">
        <form>
          <label htmlFor="name">Nombre:</label>
          <input type="text" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Asunto:</label>
          <textarea id="message" name="message" required defaultValue={""} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
    width: 100%;
  .contact-form {
    background-color: #000700;
    padding: 20px;
    width: 100%;
    border-radius: 10px;
  }

  .contact-form label {
    width: 100%;
    color: white;
  }

  .contact-form .heading {
    font-size: 24px;
    color: black;
    ;
    margin-bottom: 12px;
    font-weight: bold;
    display: block;
  }

  .contact-form form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .contact-form label {
    margin-bottom: 10px;
  }

  textarea {
    resize: none;
    height: 80px;
    width: 97%;
  }

  .contact-form input, .contact-form textarea {
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .contact-form input:focus, .contact-form textarea:focus {
    z-index: 1;
    position: relative;
    outline: none;
    box-shadow: 0 0 5px #04bf58;
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }

  .contact-form button[type="submit"] {
    background-color: #057310;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  .contact-form button[type="submit"]:hover {
    transform: scale(1.04);
    transition: transform 0.3s ease-in-out;
  }`;

export default Form;
