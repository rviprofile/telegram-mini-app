import styled from "@emotion/styled";

export const Container = styled.div`
  width: calc(100% - 32px);
  height: fit-content;
  border-radius: 16px;
  background-color: #ffffffe5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 84px;
  margin: 0 16px;
  padding: 8px 0;
`;

export const InfoItem = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 16px;
  align-items: flex-start;

  p.title {
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 12px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    color: #1f263d;
  }

  p.value {
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 12px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    color: #1f263d;
  }
`;
