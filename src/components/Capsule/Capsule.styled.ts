import styled from "@emotion/styled";

export const Capsule = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  color: black;
  height: 25px;
  border-radius: 16px;
  padding-top: 4px;
  padding-right: 8px;
  padding-bottom: 4px;
  padding-left: 8px;
  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: center;
`;
