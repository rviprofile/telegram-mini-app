import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MenuContainer = styled.nav`
  background-color: rgba(40, 53, 97, 1);
  box-shadow: 0px -5px 32px 0px rgba(0, 0, 0, 0.5);
  border-top: 2px solid rgba(78, 82, 127, 1);
  min-height: 58px;
  width: 100vw;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;

export const LinkButton = styled(Link)<{ selected: boolean }>`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 10px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: ${(props) =>
    props.selected ? "rgba(189, 243, 93, 1)" : "rgba(117, 129, 171, 1)"};
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 25vw;
  height: 56px;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  transition: all 0.2s ease;
`;
