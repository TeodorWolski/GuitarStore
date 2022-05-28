import styled from "styled-components";

export const Wrapper = styled.nav`
  top: 0;
  left: 0;
  height: 8vh;
  width: 100vw;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.royalBlue};
  z-index: 999999999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  }
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: white;

  &::after {
    content: "Store";
    color: ${({ theme }) => theme.colors.navyBlue};
  }
`;
