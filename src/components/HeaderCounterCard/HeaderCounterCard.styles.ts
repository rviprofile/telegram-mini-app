import styled from "@emotion/styled";
import { Slider } from "@chakra-ui/react";

export const CardContainer = styled.div`
  width: 100%;
  height: 152px;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;

  background: linear-gradient(115.2deg, #5959593e 0%, #cccdd24b 100%),
    linear-gradient(106.37deg, #17b5ee 0%, #a356e0 85.74%);

  h1 {
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 28px;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: left;
  }

  .valueText {
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;

    span {
      opacity: 0.8;
    }
  }

  .chakra-slider__label {
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    span {
      opacity: 0.8;
    }
  }

  p.segment {
    font-family: Inter;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    opacity: 0.8;
  }

  p.value {
    font-family: Inter;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
  }
`;

export const StatusCapsule = styled.div`
  position: absolute;
  z-index: 10;
  top: 16px;
  right: 16px;
  height: 25px;
`;

export const Range = styled(Slider.Range)`
  background: rgba(189, 243, 93, 1) !important;
  &[data-disabled] {
    background: rgba(189, 243, 93, 1) !important;
  }
`;
