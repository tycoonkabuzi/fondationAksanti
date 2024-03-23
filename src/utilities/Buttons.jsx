import styled from "styled-components";
import { primaryColor, secondaryColor } from "./Colors";
import { Link } from "react-router-dom";
const PrimaryButton = styled(Link)`
  width: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 200px;
  background-color: ${primaryColor};
  border: solid 2px ${secondaryColor};
  text-decoration: none;
  ${(prop) =>
    prop.scroll === true &&
    `  background-color: ${secondaryColor}; border: solid 2px ${primaryColor});`};
  border-radius: 15px;
  font-size: 0.7rem;
  color: white;

  &:hover {
    background-color: ${secondaryColor};
    border: solid 2px ${primaryColor};
  }
`;
export default PrimaryButton;
