import styled from "styled-components";

export const Wrapper = styled.div<{ isVisible: boolean }>`
  position: absolute;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  height: 30rem;
  right: 8%;
  width: 25rem;
  background-color: white;
  top: 99%;
  border-radius: 1rem;
  z-index: -1;
  overflow: scroll;
  overflow-x: hidden;

  h1 {
    color: black;
    &::after {
      content: "";
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem;
  transform: translateX(-25%);
  justify-content: space-around;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 150%;
    height: 1px;
    background-color: grey;
  }

  h1 {
    transform: translateX(20%);
    color: black;
    font-size: 1.2rem;
    &::after {
      content: "";
    }
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 75%;
  place-items: center;
  font-size: 1.2rem;

  p {
    font-size: 1.5rem;
  }

  div {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.2rem;

    strong {
      padding: 0.5rem;
    }

    button {
      cursor: pointer;
      border: none;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.blueGrotto};
    }
  }
`;
