import styled from "styled-components";

const ActionButton = styled.button<{
  icon: string;
  amount?: number;
  isCart?: boolean;
}>`
  border: none;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${({ icon }) => icon});
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::after {
    content: "${({ amount }) => amount}";
    height: 2rem;
    width: 2rem;
    background-color: red;
    display: ${({ isCart }) => (isCart ? "flex" : "none")};
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    color: white;
    transform: translate(75%, -70%);
  }
`;

export default ActionButton;
