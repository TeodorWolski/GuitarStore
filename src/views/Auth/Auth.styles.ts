import styled from "styled-components";

export const AuthCard = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 50rem;
  width: 35rem;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 2rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 5rem;
    &::after {
      content: "Store";
      color: ${({ theme }) => theme.colors.royalBlue};
    }
  }

  input {
    outline: none;
    padding-left: 2rem;
    border: 1px solid gray;
    border-radius: 2rem;
    height: 2rem;
    width: 80%;
    height: 4rem;
    margin-bottom: 2rem;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  }

  button {
    border-radius: 2rem;
    border: none;
    color: white;
    height: 4rem;
    width: 80%;
    background-color: ${({ theme }) => theme.colors.royalBlue};
  }
`;
