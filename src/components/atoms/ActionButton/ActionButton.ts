import styled from "styled-components";

const ActionButton = styled.button<{ icon?: string }>`
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
`;

export default ActionButton;
