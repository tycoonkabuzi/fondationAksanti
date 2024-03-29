import styled from "styled-components";
import {
  grayForParagraph,
  primaryColor,
  secondaryColor,
} from "../../utilities/Colors";
const Main = styled.div`
  background-color: ${secondaryColor};
  color: ${grayForParagraph};
  display: grid;

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
    height: auto;
  }
  @media only screen and (min-width: 600px) {
    grid-template-columns: auto auto;
    height: auto;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: auto auto auto auto;

    height: 200px;
  }
`;
const Stat = styled.div`
  margin: auto;
`;
const Record = styled.h1`
  font-weight: 600;
  font-size: 45px;
  line-height: 10px;
  color: ${primaryColor};
`;
const Title = styled.p``;

function Stats() {
  return (
    <Main>
      <Stat>
        <Record>23K</Record>
        <Title>Projet terminé</Title>
      </Stat>
      <Stat>
        <Record>12M+</Record>
        <Title>Bureau au tours</Title>
      </Stat>
      <Stat>
        <Record>95M</Record>
        <Title>Vues</Title>
      </Stat>
      <Stat>
        <Record>5K</Record>
        <Title> Abonees</Title>
      </Stat>
    </Main>
  );
}
export default Stats;
