import styled from "@emotion/styled";

export const CardContainer = styled.div<{ image: string }>`
  width: 100%;
  height: 225px;
  border-radius: 16px;
  position: relative;
  background-color: rgba(71, 82, 114, 0.4);
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CornerBadge = styled.div`
  top: 16px;
  left: 16px;

  position: absolute;
  z-index: 10;

  color: white;

  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 0%;

  height: 25px;

  padding-top: 4px;
  padding-right: 8px;
  padding-bottom: 4px;
  padding-left: 8px;

  border-radius: 16px;

  background: linear-gradient(98.95deg, #17b5ee 0%, #5776b9 100%);
`;

export const OpenButton = styled.button`
  position: absolute;
  z-index: 10;
  bottom: 16px;

  height: 34;

  border-radius: 8px;

  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  border-width: 1px;

  border: 1px solid #ffffff;
  background: transparent;

  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
`;
