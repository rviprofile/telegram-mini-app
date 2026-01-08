import styled from "@emotion/styled";

export const CardContainer = styled.div`
  background: rgba(71, 82, 114, 1);
  width: 100%;
  height: 108px;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  h2 {
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0%;
    text-align: center;
  }
  button {
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
  }
`;
