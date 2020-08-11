import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  color: var(--color-text);
  font-weight: bold;
  font-size: 18px;
  width: 40px;
  height: 40px;
  background: var(--color-button);
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 50px;
  margin: 2px;
  outline: none;

  :hover {
    opacity: 0.7;
  }
`;

export const ButtonAC = styled(Button)`
  background: var(--color-button-ac);
`;

export const ButtonEnter = styled(Button)`
  background: var(--color-button-enter);
  width: 84px;
`;

export default Button;