import styled from "@emotion/styled";

export const Header = styled.header`
  height: 22px;
  width: calc(100vw - 32px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px;

  margin-bottom: 32px;
`;

export const BackButton = styled.button`
  width: 22px;
  height: 22px;
  img {
    width: 22px;
    height: 22px;
  }
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;

  margin: 0;

  color: white;
`;
