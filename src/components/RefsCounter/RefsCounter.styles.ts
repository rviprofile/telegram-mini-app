import styled from "@emotion/styled";

import { Slider } from "@chakra-ui/react";

export const CardContainer = styled.div`
  width: 100%;
  height: 91px;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background:
    linear-gradient(115.2deg, #59595916 0%, #cccdd224 100%),
    linear-gradient(106.37deg, #17b5ee 0%, #a356e0 85.74%);

  .chakra-slider__label {
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: right;
  }

  p.segment {
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 12px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
  }

  p.value {
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 12px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
  }
`;

export const Range = styled(Slider.Range)`
  background: rgba(189, 243, 93, 1) !important;
  &[data-disabled] {
    background: rgba(189, 243, 93, 1) !important;
  }
`;
