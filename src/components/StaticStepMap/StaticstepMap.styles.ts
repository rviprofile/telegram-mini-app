import { Image, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const MapPoint = styled.div<{ active: boolean }>`
  width: 39px;
  height: 39px;
  border-radius: 20px;
  background: ${({ active }) => (active ? "#bdf35d" : "#676B90")};
  display: flex;
  align-items: center;
  justify-content: center;
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

export const ArrowIcon = styled(Image)`
  position: absolute;
  top: 16px;
  left: 108px;
`;
