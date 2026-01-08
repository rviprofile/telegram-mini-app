import styled from "@emotion/styled";

export const CardContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  jusify-content: flex-start;
  flex-direction: column;
  border-radius: 16px;
  gap: 32px;

  .arrow {
    padding-top: 15px;
    position: relative;
    z-index: 10;
    min-width: 50px;
    transform: translateX(-27px);
  }
`;

export const MapPoint = styled.div`
  width: 39px;
  height: 39px;
  border-radius: 20px;
  background: rgba(36, 160, 232, 1);
`;

export const PointLabel = styled.p`
  color: rgba(31, 38, 61, 1);
  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: center;
`;

export const InfoBox = styled.div`
  height: 86px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: white;
  border-radius: 16px;
  width: 100%;
  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;

  color: black;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }
`;
