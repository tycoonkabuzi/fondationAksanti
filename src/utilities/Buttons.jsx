import styled from "styled-components";
const PrimaryButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: rgb(29, 128, 204);
  border: solid 2px rgb(237, 178, 42);
  ${(prop) =>
    prop.scroll === true &&
    `  background-color: rgb(237, 178, 42); border: solid 2px rgb(25, 103, 162);`};
  border-radius: 15px;
  font-size: 0.7rem;
  color: white;

  &:hover {
    background-color: rgb(237, 178, 42);
    border: solid 2px rgb(29, 128, 204);
  }
`;
export default PrimaryButton;
