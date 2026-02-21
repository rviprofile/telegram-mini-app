import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const CardContainer = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  background: #ffffffe5;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #1f263d;
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;

  p {
    line-height: 100%;
  }
`;

export const MapPoint = styled.div<{ gridColumn: string }>`
  width: 39px;
  height: 39px;
  border-radius: 20px;
  background: #bdf35d;
  grid-column: ${({ gridColumn }) => gridColumn};
`;

export const PointLabel = styled(Text)`
  color: white;
  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: center;
  width: 100%;
`;
