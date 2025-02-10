import styled from 'styled-components';

const PopUpWrapper = styled.div`    
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 5;
  border-radius: 10px;
  border: 3px solid black;
  width: 300px;
`;

const PopUpMessage = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

const PopUpButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const PopUpButton = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  background: #006600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #004d00;
  }
`;

const PopUp = ({ message, onConfirm, onCancel }) => {
  return (
    <PopUpWrapper>
      <PopUpMessage>{message}</PopUpMessage>
      <PopUpButtonContainer>
        <PopUpButton onClick={onConfirm}>Sí</PopUpButton>
        <PopUpButton onClick={onCancel}>No</PopUpButton>
      </PopUpButtonContainer>

    </PopUpWrapper>
  );
};

export default PopUp;