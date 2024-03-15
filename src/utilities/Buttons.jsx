import styled from "styled-components";
import { primaryColor, secondaryColor } from "./Colors";
const PrimaryButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: ${primaryColor};
  border: solid 2px ${secondaryColor};
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
