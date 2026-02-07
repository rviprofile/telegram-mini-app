import styled from "@emotion/styled";

export const Tiket = styled.div`
  width: 100%;
  min-height: 64px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 16px;
  color: rgba(31, 38, 61, 1);
  display: flex;
  flex-direction: column;
  gap: 4px;

  div.title {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    color: rgba(31, 38, 61, 1);
    height: 25px;
    align-items: center;
  }

  div.date {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 12px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    opacity: 0.8;
  }
`;

export const FilterTab = styled.div<{ selected: boolean }>`
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);
  border-bottom: 2px solid rgba(189, 243, 93, 0);
  padding-bottom: 8px;

  ${({ selected }) =>
    selected &&
    `
        border-bottom: 2px solid rgba(189, 243, 93, 1);
  `}
`;
