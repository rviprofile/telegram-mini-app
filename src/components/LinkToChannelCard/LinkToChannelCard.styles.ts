import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  position: fixed;
  bottom: 60px;
  width: 100%;
  padding: 10px 20px;
  left: 0;
  background: rgba(29, 38, 80, 1);
  -webkit-box-shadow: 0px -15px 14px 9px rgba(29, 38, 80, 1);
  -moz-box-shadow: 0px -15px 14px 9px rgba(29, 38, 80, 1);
  box-shadow: 0px -15px 14px 9px rgba(29, 38, 80, 1);
`;

export const CardContainer = styled.div`
  background: rgba(68, 78, 114, 1);
  width: 100%;
  height: fit-content;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
