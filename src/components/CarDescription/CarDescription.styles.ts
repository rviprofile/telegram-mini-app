import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px;
  text-align: start;
  width: 100%;
  align-items: flex-start;

  h2 {
    font-family: Inter;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0%;
  }

  p {
    font-family: Inter;
    font-weight: 400;
    font-size: 10px;
    line-height: 140%;
    letter-spacing: 0%;
    text-align: start;
  }
`;
