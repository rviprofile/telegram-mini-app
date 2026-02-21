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
  position: relative;

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

export const Source = {
  Buy: "buy",
  Referal: "referal",
} as const;

export const StatusCapsule = styled.div<{
  source: typeof Source | string;
}>`
  padding: 4px 8px;
  color: rgba(31, 38, 61, 1);
  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: right;
  text-transform: uppercase;
  border-radius: 16px;
  position: absolute;
  right: 16px;
  top: 10px;
  ${({ source }) => {
    switch (source) {
      case Source.Buy:
        return "background: rgba(150, 255, 181, 1)";
      case Source.Referal:
        return "background: rgb(207, 155, 96)";
      default:
        return "background: rgb(207, 155, 96)";
    }
  }}
`;
