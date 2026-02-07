import { Input } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Form = styled.form`
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 16px;
  font-family: Inter;
  font-weight: 600;
  font-style: Semi Bold;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  color: black;
  text-align: start;

  .secondary {
    font-weight: 500;
  }
`;

export const FormInput = styled(Input)`
  border-radius: 8px;
  font-family: Inter;
  font-weight: 500;
  font-style: Medium;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  padding: 16px;
  border: 1px solid rgba(204, 207, 222, 1);
`;
