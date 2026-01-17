import styled from "@emotion/styled";

export const DocLink = styled.div`
  font-family: Inter;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;

  color: white;

  padding-bottom: 14.5px;
  padding-top: 14.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #ffffff33;

  width: calc(100vw - 32px);

  img {
    transform: rotate(180deg);
  }
`;
