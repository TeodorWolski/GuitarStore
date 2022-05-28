import styled from "styled-components";

export const CardWrapper = styled.div<{ swipedPosition?: number }>`
  position: relative;
  transition: 0.3s ease-in-out;
  margin-top: 4rem;
  height: 35rem;
  width: 25rem;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemInfo = styled.div`
  bottom: 0;
  position: absolute;
  z-index: 999999999;
  background-color: white;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  button {
    border: none;
    padding: 0.75rem;
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.colors.royalBlue};
    color: white;
  }
`;
