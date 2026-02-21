import styled from "@emotion/styled";
import { Status } from "./RefsListCard";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;

  .header {
    padding: 12px 16px;
    font-family: Inter;
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
    background: rgba(255, 255, 255, 0.9);
    color: rgba(31, 38, 61, 1);
  }

  .header_value {
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 18px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
  }
`;

export const Content = styled.div`
  dislay: flex;
  flex-diretion: column;
  padding: 16px;
  width: 100%;
  background: rgba(68, 78, 114, 1);
`;

export const Ref = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(117, 129, 171, 1);

  color: rgba(255, 255, 255, 1);

  .primary {
    font-family: Inter;
    font-weight: 600;
    font-style: Semi Bold;
    font-size: 14px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
  }

  .secondary {
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 12px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;
  }

  &:last-child {
    border: none;
    margin: 0;
    padding-bottom: 0;
  }
`;

export const StatusCapsule = styled.div<{
  status: Status | string;
}>`
  padding: 4px 8px;
  color: rgba(31, 38, 61, 1);
  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: right;
  text-transform: uppercase;
  border-radius: 16px;
  ${({ status }) => {
    switch (status) {
      case Status.Active:
        return "background: rgba(150, 255, 181, 1)";
      case Status.Sended:
        return "background: rgb(207, 155, 96)";
      default:
        return "background: rgb(207, 155, 96)";
    }
  }}
`;
