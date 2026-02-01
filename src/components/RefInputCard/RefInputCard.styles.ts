import styled from "@emotion/styled";

export const Card = styled.div`
  width: 100%;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  background: linear-gradient(115.2deg, #59595916 0%, #cccdd224 100%),
    linear-gradient(106.37deg, #17b5ee 0%, #a356e0 85.74%);

  .label-ref {
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 12px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    margin-bottom: 8px;
  }

  .input-ref {
    height: 42px;
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 14px;
    leading-trim: CAP_HEIGHT;
    line-height: 100%;
    letter-spacing: 0%;
    border: 1px solid #cccfde;
    border-radius: 8px;
    background: #ffffffe5;
    color: black;
  }

  button {
    border: 2px solid #cccfde;
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 14px;
    leading-trim: CAP_HEIGHT;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;

    border-radius: 8px;
  }
`;
